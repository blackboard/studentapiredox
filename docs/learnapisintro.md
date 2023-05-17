---
id: learnapisintro
displayed_sidebar: LearnAPIsSidebar
---

# Learn APIs Intro

Learn provides APIs to enable campus developers to integrate their campus workflows and services with Learn to use and manage Learn data. Third party Partners may also use our REST APIs to build RESTful or augment LTI 1.3 integrations to bring innovative solutions to your campus.

## Some examples
**User and course management**: REST APIs can be used to create, read, update, and delete information about users, courses, and enrollments in the Blackboard Learn environment. See: `Courses`, `Users`, `Course Memberships`, and `Course Groups`.

**Content management:** REST APIs can be used to manage content in Blackboard Learn, including uploading, updating, and deleting files and other course resources. See: `Course Content`, `Content Collection Resources`, `Content Attachments`, and `Adaptive Release`.

**Gradebook management:** REST APIs can be used to manage the Blackboard Learn Gradebook, including creating and editing grade columns, submitting and retrieving grades, and exporting grade data. See: `Course Grades` and `Course Grade Attempts`.

**System Information and Announcements**: Integrations may discover information about the target system and create announcements. See: `System`, `Announcements`, `Course Announcements`.

**API Authorization**: Our REST APIs use Two- and Three-legged OAuth. See: [Basic Authentication](https://docs.anthology.com/docs/REST%20APIs/Learn/Getting%20Started/rest_apis-learn-getting-started-basic_auth) and [3LO](https://musical-adventure-wl1kq5k.pages.github.io/docs/REST%20APIs/Learn/Getting%20Started/rest_apis-learn-getting-started-3lo)

**LTI 1.3 tools**: REST APIs can be used to enhance LTI integrations.

Let's discover Learn APIs.

## Present, and Future Releases
Our REST APIs are updated with each SaaS release - introducing new APIs and when necessary application of endpoint versioning and deprecation existing APIs. 

Note endpoints are version specific.

The latest ***released*** version contains information which applies to current *and* all previous production Learn versions. 

The latest ***unreleased*** version contains information which applies to current, previous, *and* unreleased Learn versions.

As such any current or future release provides the information necessary for change management via the `Since` tag on any endpoint. These tags serve as indicators of when an endpoint was added and thus for which version of Learn the endpoint is callable.

**Note**: You should ***always*** observe the `Since` tag on each endpoint and only use endpoints released on or before your Learn target major version.

## Latest Learn API docs

[Latest Release](./apis/learn/learnapisreleased) 

## Latest Unreleased Learn API docs
[Unreleased](./apis/learn/learnapisunreleased)

## Downloading OpenAPI.json
All our API documents are stored in a publicly readable S3 bucket. You may access version specific documents using the following pattern:

`https://devportal-docstore.s3.amazonaws.com/learn-swagger-<LEARN_VERSION>.json`

e.g.:

`https://devportal-docstore.s3.amazonaws.com/learn-swagger-3900.69.0.json`








