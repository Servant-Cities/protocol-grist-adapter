import mockData from "../data/mock";

const get = (resourceName: string) => async (request, reply) => {
  return mockData[resourceName];
};

export default get;
