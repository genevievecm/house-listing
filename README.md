# Page with a House Listing

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app) and uses:
- [Sass modules](https://sass-lang.com/) for styles
- [axe-core-npm](https://github.com/dequelabs/axe-core-npm/tree/develop/packages/react) for some accessibility automation
- React hooks and local state (for now)


## To run this project locally:
```bash
yarn install && yarn start
```

## Concept

Based on the JSON object returned on the Properly PDP page, display basic information about the property for the user:
- one or two main images
- address, city
- listing price
- a user-centric room details feature:
  - As a user I want to have a better visual understanding of how big each room is in comparison to one another (e.g. because I care about a large kitchen instead of a large bedroom).
  - **Desktop experience:** click or tab to a room row and sees a shape on the right side which illustrates the size of a room. If the list of rooms is very long (longer than the height of the window, show similar UX as mobile with scrollable section, or fixed shape)
  - **Mobile experience:** [did not complete] room details should appear in a scrollable section with the visual aid below; touching a row will cause the shape to update
  - **Accessibility:** this is mainly a visual feature; visual aid is not focusable
sqft number should be a live-region which gets announced by screen readers (example: “Kitchen is 19’8” long and 13’1” wide which totals to approximately 259 square feet”)



------
## Some helpful resources
Styles
- https://itnext.io/the-css-preprocessor-dilemma-node-sass-or-dart-sass-32a0a096572

Testing
- https://www.smashingmagazine.com/2020/07/react-apps-testing-library/
- https://dev.to/mbellagamba/react-testing-library-recipes-getting-started-1agd

Accessibility
- https://www.matuzo.at/blog/12-tips-for-more-accessible-react-apps-slides-react-finland-2019/
