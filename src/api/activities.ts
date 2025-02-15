const { API_KEY, DOCUMENT_ID } = process.env;

export const formatActivity = (gristActivity) => {
    const activity = {
        uri: gristActivity.fields.uri,
        name: gristActivity.fields.name,
        trigger: gristActivity.fields.trigger,
    }

    return activity;
}

export const getActivity = async (request, reply) => {
  console.log(request.params.uri)
  const response = await fetch(
    `https://docs.getgrist.com/api/docs/${DOCUMENT_ID}/tables/Activities/records?filter={"uri": ["${encodeURIComponent(request.params.uri)}"]}&limit=1`,
    {
      headers: {
        Authorization: `Bearer ${API_KEY}`,
      },
    }
  );

  const data = await response.json();

  return data.records[0];
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

  const formated = data.records.map(formatActivity)
  return formated;
};
