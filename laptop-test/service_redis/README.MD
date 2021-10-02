## setup
 * run your redis container on port 6379.

## to-do:
  * run my express app and Redis using docker compose.

### setting up REDIS in a docker and a simple express application.

  docker run --name rdb -p 6379:6379 redis

  docker exec -it rdb redis-cli

  npm run start app on 5000

  questions.
    - ran redis in docker once. Even if i close my docker exec connection,
      I can still connect and get my keys. Why?. is it because a docker container is still
      running in the background. So, redis is still using that port 6379.
    - if i run this application on a new desktop startup, will my connections still exist.
    - do docker containers run in the background?.

### DOCKER compose running REDIS and an Express application.

  questions.
    - running two applications. how do run docker from a file?.
