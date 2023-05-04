Feature: test

  Scenario: test scenario
    Given User is on google main page to search github.com/serhatozdursun keyword
    When Hit to Enter
    Then Except to find https://github.com/serhatozdursun webpage