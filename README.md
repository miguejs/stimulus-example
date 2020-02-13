# stimulus-example


### Running the stack for Development

1. Fire up a terminal and run:


```bash
$ docker-compose up web
```

That command will lift every service stimulus-example needs, such as the `rails server`, `postgres`, and `redis`.


It may take a while before you see anything, you can follow the logs of the containers with:

```
$ docker-compose logs
```

Once you see an output like this:

```
web_1   | => Booting Puma
web_1   | => Rails 5.1.3 application starting in development on http://0.0.0.0:3000
web_1   | => Run `rails server -h` for more startup options
web_1   | => Ctrl-C to shutdown server
web_1   | Listening on 0.0.0.0:3000, CTRL+C to stop
```

This means the project is up and running.

### Stop the project

In order to stop stimulus-example as a whole you can run:

```
% docker-compose down
```

This will stop every container.

`web` is the service name located on the `docker-compose.yml` file, there you can see the services name and stop each of them if you need to.




### Running specs

To run specs, you can do:

```
$ docker-compose run test rspec
```

Or for a specific file:

```
$ docker-compose run test rspec spec/models/user_spec.rb
```
