Feature: Schema definition and robots.txt

    Background: Open site
        Given I'm on the initial page

    Scenario: Have a robots meta tag
        When I have a meta robots
        Then check the content

    Scenario: Have a robots.txt
        When I have a robots.txt file
        Then check if contains a Sitemap
