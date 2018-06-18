defmodule Api.User do

  def load_user() do
    users_cursor = Mongo.find(
      :mongo,
      "users",
      %{},
      limit: 1,
      pool: DBConnection.Poolboy
    )

    users = Enum.to_list(users_cursor)

    if length(users) == 1 do
      users
      |> hd
      |> Map.take(["_id", "watching_currencies"])
    else
      create_user()
    end
  end

  def create_user do
    Mongo.insert_one(
      :mongo,
      "users",
      %{
        "watching_currencies" => [],
      },
      pool: DBConnection.Poolboy
    )
  end

  def start_watching_currency(currency) do
    user = load_user()

    Mongo.find_one_and_update(
      :mongo,
      "users",
      %{_id: user["_id"]},
      %{"$set": %{
          watching_currencies: [currency | user["watching_currencies"]]
        }
      },
      pool: DBConnection.Poolboy
    )

    true
  end

  def stop_watching_currency(currency) do
    user = load_user()

    Mongo.find_one_and_update(
      :mongo,
      "users",
      %{_id: user["_id"]},
      %{"$set": %{
          watching_currencies: List.delete(user["watching_currencies"], currency)
        }
      },
      pool: DBConnection.Poolboy
    )

    true
  end

end
