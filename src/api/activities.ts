import formatGristURIList from "../utils/formatGristURIList";

const { API_KEY, DOCUMENT_ID } = process.env;

export const formatActivity = gristActivity => {
  const activity = {
    uri: gristActivity.fields.uri,
    name: gristActivity.fields.name,
    previous_connections: formatGristURIList(gristActivity.fields.previous_connections),
    next_connections: formatGristURIList(gristActivity.fields.next_connections),
    trigger: gristActivity.fields.trigger,
  };

  return activity;
};

export const getActivity = async (request, reply) => {
  const response = await fetch(
    `https://docs.getgrist.com/api/docs/${DOCUMENT_ID}/tables/Activities/records?filter={"uri": ["${request.protocol}://${request.host}${request.url}"]}&limit=1`,
    {
      headers: {
        Authorization: `Bearer ${API_KEY}`,
      },
    }
  );

  const data = await response.json();

  return formatActivity(data.records[0]);
};

export const getActivities = async (request, reply) => {
  const response = await fetch(
    `https://docs.getgrist.com/api/docs/${DOCUMENT_ID}/tables/Activities/records`,
    {
      headers: {
        Authorization: `Bearer ${API_KEY}`,
      },
    }
  );

  const data = await response.json();

  const formated = data.records.map(formatActivity);
  return formated;
};
