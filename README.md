# Fincheck API

Another one of my personal projects: REST API using the [Nest](https://github.com/nestjs/nest) framework.

## Installation

```bash
yarn install
```

## Setup

Make sure you provide a [PostgreSQL](https://www.postgresql.org/) database along with the necessary environment variables described in the `.env.example` file:

```bash
DATABASE_URL="postgresql://username:password@localhost:5432/fincheck?schema=public"
JWT_SECRET=unsecure_jwt_secret
```

## Running the app

```bash
# development
$ yarn run start

# watch mode
$ yarn run start:dev

# production mode
$ yarn run start:prod
```

## License

[MIT licensed](LICENSE).
