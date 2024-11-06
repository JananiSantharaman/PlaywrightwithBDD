Feature: User Login
  As a registered user
  I want to log in to my account
  So that I can access my personalized dashboard

  Scenario: Successful login with valid credentials
    Given I am on the login page
    When I enter a valid email address and password
    And I click on the "Login" button
  #  Then I should be redirected to the dashboard
  #  And I should see a welcome message
