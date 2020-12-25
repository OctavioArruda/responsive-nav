# Responsive navbar 

## A simple and beauty navbar with responsive layout

- Usage of javascript event listeners
- `@Keyframes` for smooth transition of burger icon when clicked
- `@media` queries for responsivity
- Usage of transitions and transform

### Basic structure
- The Html is composed by a nav with three childs:
  - A div with the `Logo` class containing the nav title
  - A ul with the `nav-links` class containing the links
  - A div with the `burger` class that refers to the burguer responsive menu icon

### The CSS structure
- The CSS is composed by several selectors. The most important ones are:
  - * (all) with margin, padding set to 0, box-sizing set to border-box
  - nav display is flex, justify-content is space-around to space the elements alongside the nav
  - align items set to center, to the cross-axis placement of the items are centered
  - `nav.links` are also flex displayed, with justify content set to space-around, to space elements alongside the ul
  - the `burger div` width is 25px and height is 3px, setting the burguer container size, and the background-color is some white.
  - Then, we start the breakpoints for responsive layout:
    - With the max-width of 1024px we have:
      - `nav-links` with width set to 50%, to fit the menu items alongside the navbar without overlapping each other
    - With the max-width of 768px we have:
      - `body` overflow-x set to hidden, so we don't have a horizontal scroll
      - `nav-links` position set to absolute, height set to 92vh that is 100-8, since the min-height of nav is set to 8.
      - the display is flex, flex-direction is set to column to the elements now are displayed in the cross-axis and not the main axis. Actually, it's the main axis rotated.
      - align items set to center so the elements are centered horizontally
      - and a transition so when the burger icon get clicked the responsive menu comes out with some transform effect