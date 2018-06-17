defmodule Api.Calls do
  defmodule LOAD_PRICES_REQUEST do

    def run(_params) do
      Api.Price.ensure_that_prices_are_fresh()
      Api.Price.load_latest_prices_as_list()
    end

  end
end
