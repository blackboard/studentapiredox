# Working With The New OpenAPI Documentation Process

While testing delivery of the Anthology Developer OpenAPI Documentation via this GitHub repo, we will using [Docusaurus 2](https://docusaurus.io/), and [redocly](https://redocly.com)] for generating the static files delivered through GitHub Pages. 

## Viewing on Github Pages
### Student
https://probable-broccoli-vr1gken.pages.github.io/docs/studentapisintro

### Learn
https://probable-broccoli-vr1gken.pages.github.io/docs/learnapisintro

## Getting Started

:warning: Do not push, pull, fetch, or otherwise "manage" the gh-pages branch. This branch is auto maintained by main PRs and merge actions.

1. Clone this repo
2. `$ cd` to the project directory
3. `$ npm install` to install project dependencies
4. `$ npm run start` to run the Docusaurus site locally - it will open in your browser
5. Edit your pages and the site will update automatically on save
6. When you think you are done before you do a pull request ***test the build*** (steps 7 and 8)...
7. `$ npm run build` to build the site locally. The great thing here is *everything* gets tested and if the build fails you will know... if it fails - fix it and rinse/repeat step 7 until it succeeds, then move onto step 8.
8. `$ npm run serve` to locally serve the static build of the site - if your changes look good carry on to step 9, otherwise back to step 4 (that is faster than doing a full build for each possible test cycle), make your changes, and run through steps 5-8.
9. Do a PR with your changes...
   1.  When you submit your PR an automated test is run. If the test fails it shows as failed on the PR. If it is successful, and we approve the changes requested then we will merge. The test takes about 2.5 minutes. If you have merge privileges please wait until a successful test completes before attempting the merge. Allow for the merge test to complete before deleting your branch.
   2.  When merged an auto-build takes place generating the static files for the API site. The auto-build takes about 2 minutes.
   3.  After step 9.ii is complete, the pages-build-deploy action is run which copies the static pages file to github pages. The build-deploy takes about 2 minutes.
   4.  in 1-5 minutes the site is refreshed and delivering your new content.