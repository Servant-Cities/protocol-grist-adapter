import formatGristURIList from "../utils/formatGristURIList";

const { API_KEY, DOCUMENT_ID } = process.env;

export const formatScenario = (gristScenario) => {
    const scenario = {
        uri: gristScenario.fields.uri,
        name: gristScenario.fields.name,
        connections: formatGristURIList(gristScenario.fields.connections)
    }

    return scenario;
}

export const getScenario = async (request, reply) => {
  const response = await fetch(
    `https://docs.getgrist.com/api/docs/${DOCUMENT_ID}/tables/Scenarios/records?filter={"uri": ["${request.protocol}://${request.host}${request.url}"]}&limit=1`,
    {
      headers: {
        Authorization: `Bearer ${API_KEY}`,
      },
    }
  );

  const data = await response.json();

  return formatScenario(data.records[0]);
};

export const getScenarios = async (request, reply) => {
  const response = await fetch(
    `https://docs.getgrist.com/api/docs/${DOCUMENT_ID}/tables/Scenarios/records`,
    {
      headers: {
        Authorization: `Bearer ${API_KEY}`,
      },
    }
  );

  const data = await response.json();

  const formated = data.records.map(formatScenario)
  return formated;
};
