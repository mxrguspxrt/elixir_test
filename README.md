# Overall

Implementing this project took 1 day, around 10 hours.

## Client

* Is a simple React app, with custom dispatching, state update and event
  proxy to API.
* I decided not to use redux, containers, mapStateToProps etc - just to see how simple/complicated life is without them.

## API

* I decided not to use Phonix because I wanted to try out something RCP or GraphQL mutations commands (without browsing in graph)
* Is a simple Elixir HTTP server with custom "commands".
* Manual used to setup HTTP server
  https://www.jungledisk.com/blog/2018/03/19/tutorial-a-simple-http-server-in-elixir/
* Is missing model validation
