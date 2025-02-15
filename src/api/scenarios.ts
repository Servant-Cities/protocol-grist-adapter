const { API_KEY, DOCUMENT_ID } = process.env;

export const formatScenario = (gristScenario) => {
    const scenario = {
        uri: gristScenario.fields.uri,
        name: gristScenario.fields.name
    }

    return scenario;
}

export const getScenario = async (request, reply) => {
  const response = await fetch(
    `https://docs.getgrist.com/api/docs/${DOCUMENT_ID}/tables/Scenarios/records?filter={"uri": ["${encodeURIComponent(request.params.uri)}"]}&limit=1`,
    {
      headers: {
        Authorization: `Bearer ${API_KEY}`,
      },
    }
  );

  const data = await response.json();

  return data.records[0];
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
