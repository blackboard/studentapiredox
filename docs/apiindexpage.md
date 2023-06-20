---
id: apisintro
displayed_sidebar: APIsSidebar
title: All the APIs...
---

Welcome to all the APIs...

To the left is a full API sidebar for convenience - I expect we would deliver as viewed below.

## Redocly Examples
Redocly pre-renders and indexes the OpenAPI docs to static stand-alone html pages.

[Ally](allyapisintro.md) sidebar only

[Learn](learnapisintro.md) sidebar only

[Student](studentapisintro.md) sidebar only

The Student Academic APIs are not renderable as is by Redoc due to a bug (https://github.com/Redocly/redocly-cli/issues/1092). They may be unbundled, but this is not a desireable approach.
## Rapidocs Example
Rapidocs is a dynamic OpenAPI renderer much like the current Swagger docs. 

[rapidocs](/docs/rapidocs/rapidoxapis.md)

The Student Academic APIs are not renderable as is by Rapidocx due to the long rendering time (which often times out).

## Comments...
### Pre-rendering:
#### Pros: 
* Pre-rendering dramatically improves user experience in nearly all cases.

#### Cons: 
* Pre-rendered files do not necessarially work well with React.

### Dynamic Rendering
#### Pros:
* Works well with React.
* Minimal change to existing portal code.
* Rapidocs is highly and easily configurable.

#### Cons
* Client side rendering results in percieved performance degradation, especially with large specifications.
* Spliting the student docs improves dynamic rendering.


