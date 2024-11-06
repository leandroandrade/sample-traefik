# sample-traefik

Sample using a [traefik](https://doc.traefik.io/traefik/) load balancer and rate limit.

## Get started

Installing dependencies:

```shell
npm i
```

Starting application local:

```shell
npm start
```

## Build Image

Command do build docker image:
```shell
docker build -t leandromandrade/sample-traefik .
```

## Production

Starting environment and build image:

```shell
docker compose up -d --build
```

Stopping environment:

```shell
docker compose down -v
```

## Traefik

Access API by traefik:
```http request
http://localhost/fastify/api/sample
```

Traefik dashboard:
```http request
http://localhost/dashboard/
```

Send bursts of requests:
```sh
for i in {1..20}; do curl http://localhost/fastify/api/sample; done
```

Generate password in case of `traefik.http.middlewares.traefik-auth.basicauth.users`:
```http request
https://hostingcanada.org/htpasswd-generator/
```

## License

Licensed under [MIT](./LICENSE).


