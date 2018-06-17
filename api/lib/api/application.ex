defmodule Api.Application do
  # See https://hexdocs.pm/elixir/Application.html
  # for more information on OTP Applications
  @moduledoc false

  use Application

  def start(_type, _args) do
    # import Supervisor.Spec

    children = [
      Plug.Adapters.Cowboy.child_spec(scheme: :http, plug: Api.Router, options: [port: 8085]),
      # worker(Mongo, [[name: :mongo, database: "elixir_test", pool: DBConnection.Poolboy]])
    ]

    # See https://hexdocs.pm/elixir/Supervisor.html
    # for other strategies and supported options
    opts = [strategy: :one_for_one, name: Api.Supervisor]
    Supervisor.start_link(children, opts)
  end
end
