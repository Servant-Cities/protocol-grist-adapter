# protocol-grist-adapter

Use our protocol in Grist.

Exposes the protocol's REST api that let you store your workflows in Grist documents.

Also let you test your workflow apps in preview mode trough widgets. (only the format of [protocol-api-tester](https://github.com/Servant-Cities/protocol-api-tester) is currently hardcoded)


## Run locally

First, you need to create a Grist document using [this template](https://docs.getgrist.com/cVrWhcVBTPrp/Servant-cities-protocol-widget-template?utm_id=share-doc) 

Make sure you use the right version of nodejs, only 20+ supports .env injection as implemented here.
```
nvm use 20
```

Then install the dependences

```
cd protocol-grist-adapter
yarn
cp .env.example .env
```

You need to fill the document ID and your personnal API key in the .env file.

Then run the service.

```
yarn dev
```

This will let you use our protocol's API with Grist data.

Then run [our protocol tester](https://github.com/Servant-Cities/protocol-api-tester) or any other compatible app in localhost on port 5173 in order to display the app in the widgets.

It is ultimately up to you to decide your own data structure in Grist, you can create your own adapter based on this one ("simply" rewrite the format functions in the API) or hire us to create and host a tailor made adapter.


## How does it work

![Diagram showing what is explained in this document](https://github.com/Servant-Cities/protocol-grist-adapter/blob/main/doc/assets/how-it-works.jpg?raw=true)

This service provides the necessary components to operate a workflow app with Grit data, a great way to start building workflows in tables without worrying about acquiring a workflow builder.

These components are:


### Widgets

We serve the widgets from dedicated endpoints, each has an iframe loading specific pages of workflow apps and a script sending preview parameters to the embeded workflow app.

If the workflow app implements our preview SDK, it will reroute any request made with fetch to this adapter's API

### The API

We implement our protocol's API in this adapter and the necessary logic to retrieve the data from [Grist API](https://support.getgrist.com/api/#tag/records/operation/listRecords) and format it.


### Proxy

Since the widgets' iframe herit this service's origin, a workflow app using relative url might not be able to retrieve its own files or non rerouted resources. 

We had to implement a proxy to solve that issue.


## Protocol implementation progress

The protocol itself is still in R&D stage, we use this adapter and our [REST Playground](https://github.com/Servant-Cities/rest-api-playground-template) as two different data sources and develop their APIs as we are designing the protocol.

But You don't need a finished protocol to use this, it's already very usable as it is for small centralized projects.

We developped a first widget as a prove of concept:
![A screenshot of the widget introduced in this document](https://github.com/Servant-Cities/protocol-grist-adapter/blob/main/doc/assets/widget.png?raw=true)

This widget requests workflow data using our protocol's API and assembles it in a [mermaid diagram](https://mermaid.js.org/).