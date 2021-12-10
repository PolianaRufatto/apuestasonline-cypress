Feature: SEO Friendly

    Background: Open site
        Given I'm on the initial page

    Scenario: Should have only one h1 element
        When have an h1 element
        Then verify if have only one h1 element
            And have the descption 'ApuestasOnline.net: Las mejores apuestas online de España'

    Scenario: Should have at least 2 H2 elements
        When have an h2 element
        Then verify if have at least 2

    Scenario: Should all images have alt tags
        When have images
        Then all have alt tags

    Scenario: Should have one heading with a title and meta description
        When have a title
        Then the title have the descption 'Mejores apuestas online 2021 → Ranking España y Latam'
            And the meta description is 'Comparador de apuestas que analiza en detalle: cuotas, deportes, promos, app, seguridad y la mejor oferta de apuestas online España y Latam en diciembre 2021'

    Scenario: Should content is divided by multiple subheadings
        When I have an h3 element
            And I have an h4 element
        Then verify if have multiple h3
            And verify if have multiple h4

    Scenario: Should have all canonicals valid
        When have a canonical link
        Then it was valid

    Scenario: Should have an HTML lang set
        When I have a html tag
        Then the tag has a attrib lang
            And the language is 'es'
