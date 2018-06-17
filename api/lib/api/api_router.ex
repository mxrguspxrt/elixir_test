defmodule Api.Router do
  use Plug.Router
  use Plug.Debugger
  require Logger

  plug(Plug.Logger, log: :debug)

  plug(:match)
  plug(:dispatch)

  get "/api/prices" do
    Api.Price.ensure_that_prices_are_fresh()
    prices = Api.Price.load_latest_prices()
    send_resp(conn, 200, Poison.encode!(prices))
  end

  match _ do
    send_resp(conn, 404, "not found")
  end

end
