# Working With The New OpenAPI Documentation Process

While testing delivery of the Anthology Developer OpenAPI Documentation via this GitHub repo, we will using [Docusaurus 2](https://docusaurus.io/), and [redocly](https://redocly.com)] for generating the static files delivered through GitHub Pages. 

An alternative to prerendering static pages is using [Rapidoc Web](https://rapidocweb.com) [npm...rapidoc package](https://www.npmjs.com/package/rapidoc)to dynamically render pages. Rapidoc 

# Viewing on Github Pages

### Redocusaurus examples (static)
#### Student
https://blackboard.github.io/studentapiredox/docs/studentapisintro

#### Learn
https://blackboard.github.io/studentapiredox/docs/learnapisintro

#### Ally
https://blackboard.github.io/studentapiredox/docs/studentapisintro

### Rapidoc examples (dynamic)
https://blackboard.github.io/studentapiredox/rapidocs/rapidoxapis

:warning: Student Academics (even with the failing endpoints removed) *still* takes too long to render if it ever completes. Need resolution here. 

I propose we break academis into individual tags or deliver as a static html.

## Getting Started

:warning: Do not push, pull, fetch, or otherwise "manage" the gh-pages branch. This branch is auto maintained by main PRs and merge actions.

1. Clone this repo
2. `$ cd` to the project directory
3. `$ npm install` to install project dependencies
4. `$ npm run start` to run the Docusaurus site locally - it will open in your browser. 
5. Edit your pages and the site will update automatically on save
6. When you think you are done before you do a pull request ***test the build*** (steps 7 and 8)...
7. `$ npm run build` to build the site locally. The great thing here is *everything* gets tested and if the build fails you will know... if it fails - fix it and rinse/repeat step 7 until it succeeds, then move onto step 8.
8. `$ npm run serve` to locally serve the static build of the site - if your changes look good carry on to step 9, otherwise back to step 4 (that is faster than doing a full build for each possible test cycle), make your changes, and run through steps 5-8.
9.  Do a PR with your changes...
   1.  When you submit your PR an automated test is run. If the test fails it shows as failed on the PR. If it is successful, and we approve the changes requested then we will merge. The test takes about 2.5 minutes. If you have merge privileges please wait until a successful test completes before attempting the merge. Allow for the merge test to complete before deleting your branch.
   2.  When merged an auto-build takes place generating the static files for the API site. The auto-build takes about 2 minutes.
   3.  After step 9.ii is complete, the pages-build-deploy action is run which copies the static pages file to github pages. The build-deploy takes about 2 minutes.
   4.  in 1-5 minutes the site is refreshed and delivering your new content.

## Tips
If you are interested in only proofing the OpenAPI docs you may:

`$ npx @redocly/openapi-cli preview-docs --port=8081 yourspec.json||.yaml`


## Delivery Notes

### In General
It is anticipated that we will not be using Docusaurus in the final implementation of the API docs in the Developer Portal... Rather we will be using the static documents (likely generated using redocly cli) pulled from S3 by the Portal. This is all TBD by the Portal team.

Also to simpify delivery rather than use the approach of bundling yaml files into a spec (granted, a nifty feature of redocly) we will use standalone OpenAPI .json files. 

>Note that this approach means we have to figure out how to enable the "Download OpenAPI specification" button to link to the proper .json file vs the current redocly built .yaml file. 

> See `static/api-specs-html/student/README.md` for details on building static docs...
 
### Specific to Learn
While this site uses learn-swagger.json and learn-unreleased.json to generate current and future API docs in this demo, we ***must*** in addition to a PR for new versions, continue to push version named docs to S3. 

E.g.: https://devportal-docstore.s3.amazonaws.com/learn-swagger-3900.68.0.json. 

This is because existing integrations and libraries have dependencies on accessing these files which contain the Learn version in the filename.


## Steps to prep student-swagger.json
1. Student files:
   1. academics.json
   2. admissions.json
   3. careerservices.json
   4. common.json
   5. crm.json
   6. financialaid.json
   7. studentaccounts.json

   Are proviced by Student team as OpenAPI 3.0+
2. each of the above with the exception of academics.json is fine and may be used as is.
3. each of the above is listed in the redocusaurus section of docusaurus.config.js
   
```
   [
      'redocusaurus',
      {
        // Plugin Options for loading OpenAPI files
        specs: [
          {
            id: 'ally_released',
            spec: 'openapi/ally/ally-swagger.json',
            route: '/openapi/ally/ally-swagger',
            url: 'https://devportal-docstore.s3.amazonaws.com/ally-swagger.json'
          },
          ...
        ]
      }
   ]
   ...
```
and is referenced in the sidebar:
```
APISidebar: [
    'studentapisintro',
    {
      type: 'category',
      label: 'Student APIs',
      items: [
        {
          type: 'autogenerated',
          dirName: 'apis/student', // Generate sidebar slice from docs path
        },
      ]
    }
  ],
 ...
 ```
 Inside project directory `docs/apis/` are the mdx files used to render the api doc. e.g.

### Academics.json
This file must be dereferenced (or the recursion bug in redocly fixed) for redocly to render it. 

Notably the AreaOfStudy and ProgramVersion endpoints have too many/recursive $refs to render.