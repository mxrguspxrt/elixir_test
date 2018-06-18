defmodule Api.Calls.LOAD_PRICES_REQUEST do

  def run(_params) do
    Api.Price.ensure_that_prices_are_fresh()
    current_user = Api.User.load_user()
    watching_currencies = current_user["watching_currencies"]
    prices_list = Api.Price.load_latest_prices_as_list()

    Enum.filter(
      prices_list,
      fn(prices_list_item) ->
        Enum.member?(watching_currencies, prices_list_item[:currency])
      end
    )
  end

end
