Feature: Menu on top

    Background: Open site
        Given I'm on the initial page

    Scenario: Show the menu on top
        When I have a navigation menu on top
        Then should have the menu items

    Scenario Outline: Show the submenu on <menuName>
        When I have a menu call <index>
            And I open this menu <index>
        Then should show the submenu items from <index>
        Examples:
        | index |  menuName  |
        |1      | Casas de Apuestas |
        |2      | Bonos |
        |3      | Latinoamérica |
        |4      | Deportes |
        |5      | Pagos |
        |6      | Casinos |
        |7      | Poker |
        |8      | eSports |
