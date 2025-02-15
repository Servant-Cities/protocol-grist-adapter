import fastifyCors from "@fastify/cors";
import { getTrigger, getTriggers } from "./triggers";
import { getScenario, getScenarios } from "./scenarios";
import { getActivity, getActivities } from "./activities";
import { getConnection, getConnections } from "./connections";

async function api(fastify, options) {
  fastify.register(fastifyCors, {
    origin: "*",
  });

  fastify.get("/api/scenarios/:uri", getScenario);
  fastify.get("/api/scenarios", getScenarios);
  fastify.get("/api/connections/:uri", getConnection);
  fastify.get("/api/connections", getConnections);
  fastify.get("/api/activities/:uri", getActivity);
  fastify.get("/api/activities", getActivities);
  fastify.get("/api/triggers/:uri", getTrigger);
  fastify.get("/api/triggers", getTriggers);
}

export default api;
