Feature: As a user, I want to be able to get a random word through the REST api

  Scenario: Retrieve a random word

    Given a user
    When a GET request to /words is made with an Accept header of "application/json"
    Then a random word is returned


