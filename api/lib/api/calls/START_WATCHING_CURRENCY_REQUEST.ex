defmodule Api.Calls.START_WATCHING_CURRENCY_REQUEST do

  def run(params) do
    Api.User.start_watching_currency(params["currency"])
  end

end
