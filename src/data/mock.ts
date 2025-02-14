const mockData = {
  scenarios: [
    {
      uri: "http://localhost:3000/scenarios/1",
      name: "Scenario 1",
    },
    {
      uri: "http://localhost:3000/scenarios/2",
      name: "Scenario 2",
    },
  ],
  activities: [
    {
      uri: "http://localhost:3000/activities/1",
      name: "Activity 1",
      trigger: "http://localhost:3000/triggers/1",
    },
    {
      uri: "http://localhost:3000/activities/2",
      name: "Activity 2",
      trigger: "http://localhost:3000/triggers/2",
    },
    {
      uri: "http://localhost:3000/activities/3",
      name: "Activity 4",
      trigger: "http://localhost:3000/triggers/1",
    },
    {
      uri: "http://localhost:3000/activities/4",
      name: "Activity 4",
      trigger: "http://localhost:3000/triggers/2",
    },
  ],
  connections: [
    {
      uri: "http://localhost:3000/connections/1",
      previous_activity: "http://localhost:3000/activities/1",
      next_activity: "http://localhost:3000/activities/2",
      scenario: "http://localhost:3000/scenarios/1",
    },
    {
      uri: "http://localhost:3000/connections/2",
      previous_activity: "http://localhost:3000/activities/3",
      next_activity: "http://localhost:3000/activities/4",
      scenario: "http://localhost:3000/scenarios/2",
    },
  ],
  triggers: [
    {
      uri: "http://localhost:3000/triggers/1",
      name: "START",
    },
    {
      uri: "http://localhost:3000/triggers/2",
      name: "AND",
    },
    {
      uri: "http://localhost:3000/triggers/3",
      name: "OR",
    },
    {
      uri: "http://localhost:3000/triggers/4",
      name: "XOR",
    },
  ],
};

export default mockData;
