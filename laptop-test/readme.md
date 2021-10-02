
docker-compose up
docker-compose up --build

### Currently.

* Connecting service_express as a container with PostgresQL in localhost at the moment.
* express-Redis consumes the redis container by passing the redis url as an env variable. we can't just pass the port and localhost as the connection
  string since our container doesn't sit in localhost or is exposed to this.

### need to learn

* learn how to migrate the Prisma db to different schemas when updating the model schema.

* Running PostgreSQL in a container with service_express being able to communicate to that container.
    > They need to share the same network?
    > Follow the redis and redis-db containers and how they're linked?.

* setup a react app served by a server in a container.
    * make axios requests to different containers.
    * serve the react as a built app and served as a static asset.
    * undertstand how to make calls to a service using its name, not the localhost:port 

* setup nginx to forward requests from a single port to different service ports.
    * 


### links / help

* https://stackoverflow.com/questions/52010778/docker-compose-make-requests-between-containers
