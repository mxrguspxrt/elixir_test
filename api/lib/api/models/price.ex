defmodule Api.Price do

  def ensure_that_prices_are_fresh() do
    if should_update_latest_price() do
      update_latest_prices()
    end
  end

  def should_update_latest_price() do
    latest_prices = load_latest_prices()
    !latest_prices || latest_prices["timestamp"] + 5*60 < :os.system_time(:seconds)
  end

  def update_latest_prices() do
    url = "https://min-api.cryptocompare.com/data/pricemulti?fsyms=BTC,ETH,XRP,LTC&tsyms=EUR"
    http_response = HTTPoison.get!(url)
    currencies = Poison.decode!(http_response.body)

    {:ok, mongodb_connection} = Mongo.start_link(url: "mongodb://localhost:27017/elixir_test")

    Mongo.insert_one(
      mongodb_connection,
      "prices",
      %{
        "timestamp" => :os.system_time(:seconds),
        "btc_eur" => currencies["BTC"]["EUR"],
        "eth_eur" => currencies["ETH"]["EUR"],
        "xrp_eur" => currencies["XRP"]["EUR"],
        "ltc_eur" => currencies["LTC"]["EUR"],
      }
    )
  end

  def load_latest_prices() do
    {:ok, mongodb_connection} = Mongo.start_link(url: "mongodb://localhost:27017/elixir_test")

    existing_prices_cursor = Mongo.find(
      mongodb_connection,
      "prices",
      %{},
      limit: 1,
      sort: %{timestamp: -1}
    )

    existing_prices = Enum.to_list(existing_prices_cursor)

    if length(existing_prices) == 1 do
      existing_prices
      |> hd
      |> Map.take(["btc_eur", "eth_eur", "xrp_eur", "ltc_eur", "timestamp"])
    end
  end

  def load_latest_prices_as_list() do
    latest_prices = load_latest_prices()

    [
      %{currency: "BTC", price: latest_prices["btc_eur"]}
    ]
  end

end
