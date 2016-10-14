$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("myFeature.feature");
formatter.feature({
  "line": 1,
  "name": "Adopt an animal Scenario Hooks",
  "description": "",
  "id": "adopt-an-animal-scenario-hooks",
  "keyword": "Feature"
});
formatter.before({
  "duration": 3484745168,
  "status": "passed"
});
formatter.scenario({
  "line": 3,
  "name": "Adopt an available animal",
  "description": "",
  "id": "adopt-an-animal-scenario-hooks;adopt-an-available-animal",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 4,
  "name": "I am at the zoo site",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "I navigate to adoption",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "I check for an available animal",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "I populate the form",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "There should be a confirmation message",
  "keyword": "Then "
});
formatter.match({
  "location": "Steps.shouldNavigateToZooSite()"
});
formatter.result({
  "duration": 3682523470,
  "status": "passed"
});
formatter.match({
  "location": "Steps.navigateToAdoption()"
});
formatter.result({
  "duration": 2152993739,
  "status": "passed"
});
formatter.match({
  "location": "Steps.checkAvailableAnimal()"
});
formatter.result({
  "duration": 2460017390,
  "status": "passed"
});
formatter.match({
  "location": "Steps.populateForm()"
});
formatter.result({
  "duration": 5573411542,
  "status": "passed"
});
formatter.match({
  "location": "Steps.verifyConfirmMessageAvilable()"
});
formatter.result({
  "duration": 2077442522,
  "status": "passed"
});
formatter.after({
  "duration": 1131068228,
  "status": "passed"
});
});