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

## Past, Present, and Future Releases
Our REST APIs are updated with each SaaS release - introducing new APIs and when necessary versioning and deprecating existing APIs. 

**Note**: You should always observe the `Since` tag on each endpoint and only use endpoints released on or before your Learn target version.

<form>
<b>Learn API docs</b> 
<select 
  name="LearnAPIDocs" 
  id="LearnAPIDocs" 
  onchange="location = this.value;">
  <option value="https://localhost:3000/apis/learn/" selected>Latest Release</option>
  <option value="https://localhost:3000/apis/learn/learn-3900680">3900.68.0</option>
  <option value="https://localhost:3000/apis/learn/learn-3900670">3900.67.0</option>
  <option value="https://localhost:3000/apis/learn/learn-3900660">3900.66.0</option>
  <option value="https://localhost:3000/apis/learn/learn-3900650">3900.65.0</option>
  <option value="https://localhost:3000/apis/learn/learn-3900640">3900.64.0</option>
</select>
</form>