Feature: Google search

  Scenario Outline: As a user, I can perform google text search

    Given I am on the google search page
    When I perform search for <searchText>

    Examples:
      | searchText | count    |
      | bdd test   | 20       |
