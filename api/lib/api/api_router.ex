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
    result = Api.Calls.LOAD_PRICES_REQUEST.run(conn.body_params)
    send_resp(conn, 200, Poison.encode!(%{result: result}))
  end

  match _ do
    send_resp(conn, 404, "not found")
  end

end
