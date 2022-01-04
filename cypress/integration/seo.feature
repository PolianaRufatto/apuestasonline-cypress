Feature: SEO Friendly

    Background: Open site
        Given I'm on the initial page

    Scenario: Have only one h1 element
        When I have an h1 element
        Then check if has only one h1 element
            And the h1 descption is 'ApuestasOnline.net: Las mejores apuestas online de España'

    Scenario: Have at least 2 H2 elements
        When I have an h2 element
        Then check if has at least 2

    Scenario: All images have alt tags
        When I have images
        Then check if all has alt tags

    Scenario: Have one heading with a title and meta description
        When I have a title
        Then check if the title is correct
            And check if the meta description is correct

    Scenario: Content is divided by multiple subheadings
        When I have an h3 element
            And I have an h4 element
        Then check if has multiple h3
            And check if has multiple h4

    Scenario: All canonicals are valid
        When I have a canonical link
        Then it is valid

    Scenario: HTML has a lang attribute set
        When I have a html tag
        Then the tag has a attribute lang
            And the value is set to 'es'
