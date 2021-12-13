Feature: Performance with lighthouse

    Scenario: Check the performance
        Given I'm on the initial page
        When I run the lighthouse 
        Then the reporter has been created