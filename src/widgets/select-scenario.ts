const widgetAdapter = () => {
  console.log("adapted");

  grist.ready();
  grist.onRecord(function (record) {
    console.log({record});
    document.getElementById("preview").src = record.uri;
  });
};

const selectScenario = async (request, reply) => {
  try {
    const functionCode = widgetAdapter.toString();
    reply.type("text/html").send(`<html
      <head>
        <script src="https://docs.getgrist.com/grist-plugin-api.js"></script>
        <script>const adapt = ${functionCode}; adapt();</script>
      </head>
      <body>
        <iframe id="preview" src="" width="100%" height="100%"></iframe>
      </body>
    </html>`);
  } catch (error) {
    reply.status(500).send("Error fetching or modifying the HTML");
  }
};

export default selectScenario;
