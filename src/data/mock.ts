const mockData = {
  scenarios: [
    {
      uri: "http://localhost:4000/api/scenarios/1",
      name: "Scenario 1",
    },
    {
      uri: "http://localhost:4000/api/scenarios/2",
      name: "Scenario 2",
    },
  ],
  activities: [
    {
      uri: "http://localhost:4000/api/activities/1",
      name: "Activity 1",
      trigger: "http://localhost:4000/api/triggers/1",
    },
    {
      uri: "http://localhost:4000/api/activities/2",
      name: "Activity 2",
      trigger: "http://localhost:4000/api/triggers/2",
    },
    {
      uri: "http://localhost:4000/api/activities/3",
      name: "Activity 4",
      trigger: "http://localhost:4000/api/triggers/1",
    },
    {
      uri: "http://localhost:4000/api/activities/4",
      name: "Activity 4",
      trigger: "http://localhost:4000/api/triggers/2",
    },
  ],
  connections: [
    {
      uri: "http://localhost:4000/api/connections/1",
      previous_activity: "http://localhost:4000/api/activities/1",
      next_activity: "http://localhost:4000/api/activities/2",
      scenario: "http://localhost:4000/api/scenarios/1",
    },
    {
      uri: "http://localhost:4000/api/connections/2",
      previous_activity: "http://localhost:4000/api/activities/3",
      next_activity: "http://localhost:4000/api/activities/4",
      scenario: "http://localhost:4000/api/scenarios/2",
    },
  ],
  triggers: [
    {
      uri: "http://localhost:4000/api/triggers/1",
      name: "START",
    },
    {
      uri: "http://localhost:4000/api/triggers/2",
      name: "AND",
    },
    {
      uri: "http://localhost:4000/api/triggers/3",
      name: "OR",
    },
    {
      uri: "http://localhost:4000/api/triggers/4",
      name: "XOR",
    },
  ],
};

export default mockData;
