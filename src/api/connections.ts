const { API_KEY, DOCUMENT_ID } = process.env;

export const formatConnection = gristConnection => {
  const connection = {
    uri: gristConnection.fields.uri,
    name: gristConnection.fields.name,
    scenario: gristConnection.fields.scenario,
    previous_activity: gristConnection.fields.previous_activity,
    next_activity: gristConnection.fields.next_activity,
  };

  return connection;
};

export const getConnection = async (request, reply) => {
  const response = await fetch(
    `https://docs.getgrist.com/api/docs/${DOCUMENT_ID}/tables/Connections/records?filter={"uri": ["${request.protocol}://${request.host}${request.url}"]}&limit=1`,
    {
      headers: {
        Authorization: `Bearer ${API_KEY}`,
      },
    }
  );

  const data = await response.json();

  return formatConnection(data.records[0]);
};

export const getConnections = async (request, reply) => {
  const response = await fetch(
    `https://docs.getgrist.com/api/docs/${DOCUMENT_ID}/tables/Connections/records`,
    {
      headers: {
        Authorization: `Bearer ${API_KEY}`,
      },
    }
  );

  const data = await response.json();

  const formated = data.records.map(formatConnection);
  return formated;
};
