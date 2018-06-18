defmodule Api.Calls.STOP_WATCHING_CURRENCY_REQUEST do

  def run(params) do
    Api.User.stop_watching_currency(params["currency"])
  end

end
