# Week 28

- Postman endpoint: GET `http://localhost:1337/restaurants`
- GraphQL endpoint: `http://localhost:1337/graphql`
- GraphQL query:
```
{
  restaurants {
    id
    name
    description
    image {
      id
    }
  }
}
```
Add dishes:
```
dishes {
  name
  description
  price
}
```
Find specific restaurant:
```
restaurant(id: 2) {
```

## [How to run a Strapi dev stack with Docker Compose](https://strapi.io/blog/how-to-run-a-strapi-dev-stack-with-docker-compose)
1. Create an `.env` file containing the following:
```
DATABASE_CLIENT=mongo
DATABASE_NAME=strapi
DATABASE_HOST=mongoexample
DATABASE_PORT=27017
DATABASE_USERNAME=strapi
DATABASE_PASSWORD=password
MONGO_INITDB_ROOT_USERNAME=strapi
MONGO_INITDB_ROOT_PASSWORD=password
```
2. Create a `docker-compose.yml` file with the following:
```
version: "3"

services:
  strapiexample:
    image: strapi/strapi
    container_name: strapiexample
    restart: unless-stopped
    env_file: .env
    environment:
      DATABASE_CLIENT: ${DATABASE_CLIENT}
      DATABASE_NAME: ${DATABASE_NAME}
      DATABASE_HOST: ${DATABASE_HOST}
      DATABASE_PORT: ${DATABASE_PORT}
      DATABASE_USERNAME: ${DATABASE_USERNAME}
      DATABASE_PASSWORD: ${DATABASE_PASSWORD}
    #    links:
    #      - mongo:mongo
    networks:
      - strapi-app-network
    volumes:
      - ./app:/srv/app
    ports:
      - "1337:1337"

  mongoexample:
    image: mongo
    container_name: mongoexample
    restart: unless-stopped
    env_file: .env
    environment:
      MONGO_INITDB_ROOT_USERNAME: ${MONGO_INITDB_ROOT_USERNAME}
      MONGO_INITDB_ROOT_PASSWORD: ${MONGO_INITDB_ROOT_PASSWORD}
    networks:
      - strapi-app-network
    volumes:
      - strapidata:/data/db
    ports:
      - "27017:27017"

networks:
  strapi-app-network:
    driver: bridge

volumes:
  strapidata:
```
3. `docker-compose pull`
4. `docker-compose up -d`
5. To check on how the build is going `docker exec -it strapiexample /bin/bash`
6. Then from inside the container, execute `ps -ef`, you want to see the following:
`/usr/local/bin/node /usr/local/bin/strap/i develop`
Keep waiting if you see the following:
`/bin/sh -c npm run -s build -- --no-optimization` or
`node /srv/app/node_modules/.bin/strapi build --no-optimization`
