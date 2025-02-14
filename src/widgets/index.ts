import selectScenario from "./select-scenario";

async function widgets(fastify, options) {
  fastify.get("/widgets/select-scenario", selectScenario);
}

export default widgets;
