import Fastify from "fastify";
import api from "./api";
import widgets from "./widgets";

const fastify = Fastify();
fastify.register(api);
fastify.register(widgets);

const start = async () => {
  try {
    await fastify.listen({ port: 4000 });
  } catch (err) {
    fastify.log.error(err);
    process.exit(1);
  }
};
start();
