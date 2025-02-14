import get from "./resources";

async function api(fastify, options) {
  fastify.get("/api/scenarios", get("scenarios"));
  fastify.get("/api/activities", get("activities"));
  fastify.get("/api/connections", get("connections"));
  fastify.get("/api/triggers", get("triggers"));
}

export default api;
