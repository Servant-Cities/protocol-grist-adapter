const preview = {
  pathsMap: {
    "/api/*": "/api/"
  },
};

const widgetAdapter = () => {
  const iframe = document.getElementById("preview");

  const sendPreviewData = () => {
    if (iframe?.contentWindow) {
      iframe.contentWindow.postMessage(
        {
          type: "REQUEST_PREVIEW_SDK",
          preview,
          secret: "",
        },
        new URL(preview.url).origin
      );
    }
  };

  const handleIframeLoad = () => {
    setTimeout(sendPreviewData, 100);
  };

  iframe.addEventListener("load", handleIframeLoad);

  grist.ready();
  grist.onRecord(function (record) {
    console.log({ record });
    iframe.src = record.uri;
  });
};

const selectScenario = async (request, reply) => {
  try {
    const functionCode = widgetAdapter.toString();
    reply.type("text/html").send(`<html
      <head>
        <script src="https://docs.getgrist.com/grist-plugin-api.js"></script>
      </head>
      <body>
        <iframe id="preview" src="" width="100%" height="100%"></iframe>
        <script>
          const preview = ${JSON.stringify(preview)}
          const adapt = ${functionCode};
          adapt();
        </script>
      </body>
    </html>`);
  } catch (error) {
    reply.status(500).send("Error fetching or modifying the HTML");
  }
};

export default selectScenario;
