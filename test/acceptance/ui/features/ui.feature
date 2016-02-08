Feature: As a user, I want a user interface to enable me to guess a random word by entering letters

  Scenario: Start

    Given a user starts the game
    When a user first sees the screen
    Then screen displays blanks for each letter of the word to be guessed

  Scenario: Submit a non letter guess

    Given a user
    When a user submits a non letter guess
    Then a feedback message is shown indicating a non letter guess has been submitted

  Scenario: Submit a previously guessed letter

    Given a user
    When a user submits a previously guessed letter
    Then a feedback message is shown indicating a previously guessed letter has been submitted

  Scenario: Incorrect Guess

    Given a user guesses incorrectly
    When a user submits an incorrect guess
    Then a miss counter increments

  Scenario: Correct Guess

    Given a user guesses correctly
    When a user submits an correct guess
    Then the appropriate blanks are populated

  Scenario: Lost

    Given a user has lost
    When a user has lost after 7 incorrect guesses
    Then a feedback message is shown indicating the user has lost and the game is over

  Scenario: Won

    Given a user has won
    When a user has won after all blanks are populated
    Then a feedback message is shown indicating the user has won and the game is over
