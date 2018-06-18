defmodule Api.Router do
  use Plug.Router
  use Plug.Debugger

  require Logger

  plug(
    Plug.Logger,
    log: :debug
  )
  plug(
    CORSPlug,
    origin: ["http://localhost", "http://localhost:3000"]
  )
  plug(
    Plug.Parsers,
    parsers: [:json],
    pass:  ["application/json"],
    json_decoder: Poison
  )
  plug(:match)
  plug(:dispatch)

  post "/api/calls" do
    params = conn.body_params
    result = case params["action"] do
      "LOAD_PRICES_REQUEST" -> Api.Calls.LOAD_PRICES_REQUEST.run(params["params"])
      "START_WATCHING_CURRENCY_REQUEST" -> Api.Calls.START_WATCHING_CURRENCY_REQUEST.run(params["params"])
      "STOP_WATCHING_CURRENCY_REQUEST" -> Api.Calls.STOP_WATCHING_CURRENCY_REQUEST.run(params["params"])
    end
    send_resp(conn, 200, Poison.encode!(%{result: result}))
  end

  match _ do
    send_resp(conn, 404, "not found")
  end

end
