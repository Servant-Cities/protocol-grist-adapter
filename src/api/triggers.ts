const { API_KEY, DOCUMENT_ID } = process.env;

export const formatTrigger = (gristTrigger) => {
    const trigger = {
        uri: gristTrigger.fields.uri,
        name: gristTrigger.fields.name
    }

    return trigger;
}

export const getTrigger = async (request, reply) => {
  const response = await fetch(
    `https://docs.getgrist.com/api/docs/${DOCUMENT_ID}/tables/Triggers/records?filter={"uri": ["${encodeURIComponent(request.params.uri)}"]}&limit=1`,
    {
      headers: {
        Authorization: `Bearer ${API_KEY}`,
      },
    }
  );

  const data = await response.json();

  return data.records[0];
};

export const getTriggers = async (request, reply) => {
  const response = await fetch(
    `https://docs.getgrist.com/api/docs/${DOCUMENT_ID}/tables/Triggers/records`,
    {
      headers: {
        Authorization: `Bearer ${API_KEY}`,
      },
    }
  );

  const data = await response.json();

  const formated = data.records.map(formatTrigger)
  return formated;
};
