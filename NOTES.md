# NOTES

A few notes regarding the exercise

## Libraries

- I used NextJS instead of CRA because it's my personal preference and also because it's less opinionated has less problem integrating some libs.
- Stiches was choosen because it's fast to configure. I was tempted to go for Tailwind but decided to go for a CSS-in-JS solution instead.

For Developer eXperience I have used the following (among others):

- ESlint & Prettier to deal with lint and formatting
  - I use `Alloy` as the main ESLint config: [eslint-config-alloy](https://github.com/AlloyTeam/eslint-config-alloy)
- Husky and lint-staged to automate the previous point and some safe checks
- NVM for align all enviroments node versions

## Other

The app was only tested on the following browsers:

- Firefox (Nightly Version 89.0a1)
- Microsoft Edge (Version 91.0.831,1)

Due to time constraints the app wasn't fully developed to be highly responsive but it's functional.

Once again, due to time constraints I only tested a few things: a couple of functions, one react component and a custom hook.

## TODO

- Improve ProductCard logic for edge cases
- Improve the UI
- More tests in general
- Add some E2E tests (w/ Cypress)
- Better project scaffolding
