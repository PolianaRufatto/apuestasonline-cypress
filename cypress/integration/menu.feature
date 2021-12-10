Feature: Menu on top

    Background: Open site
        Given I'm on the initial page

    Scenario: Should have a menu on top
        When I have a navigation menu on top
        Then should have the menu itens
