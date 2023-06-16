// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'API DEMO',
  tagline: 'API Docs are cool',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  // url: 'https://probable-broccoli-vr1gken.pages.github.io',
  url: 'http://localhost:3000',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  // Use this for local previewing
  // baseUrl: '/',
  // Use this for blackboard.github.io/
  baseUrl: '/studentapiredox/',
  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'Anthology', // Usually your GitHub org/user name.
  projectName: 'studentapiredox', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // editUrl:
          //   'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        // blog: {
        //   showReadingTime: true,
        //   // Please change this to your repo.
        //   // Remove this to remove the "edit this page" links.
        //   editUrl:
        //     'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        // },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],

    // Redocusaurus config
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
          {
            id: 'learn_released',
            spec: 'openapi/learn/learn-swagger.json',
            route: '/openapi/learn/learn-swagger',
            url: 'https://devportal-docstore.s3.amazonaws.com/learn-swagger.json'
          },
          {
            id: 'learn_unreleased',
            spec: 'openapi/learn/learn-unreleased.json',
            route: '/openapi/learn/learn_unreleased',
            url: 'https://devportal-docstore.s3.amazonaws.com/learn-unreleased.json'
          },
          // ACADEMICS
          // OMG: these take forevs to render if loaded as a single .yaml
          // Unbundle and deliver 
          {
            id: 'academics_no_areaofstudy_or_programversion',
            spec: 'openapi/student/academics_no_areaofstudy_or_programversion.yaml',
            route: '/openapi/student/academics'
          },
          // {
          //   id:'studentacademicsadditionalgpa',
          //   spec: 'openapi/student/academics/academicsAdditionalGpa.yaml',
          //   route: '/openapi/student/academics/academicsAdditionalGpa',
          // },
          // {
          //   id:'studentacademicsareaofstudy',
          //   spec: 'openapi/student/academics/academicsAreaOfStudy.yaml',
          //   route: '/openapi/student/academics/academicsAreaOfStudy',
          // },
          // {
          //   id:'studentacademicsattendance',
          //   spec: 'openapi/student/academics/academicsAttendance.yaml',
          //   route: '/openapi/student/academics/academicsAttendance',
          // },
          // {
          //   id:'studentacademicsclasssection',
          //   spec: 'openapi/student/academics/academicsClassSection.yaml',
          //   route: '/openapi/student/academics/academicsClassSection',
          // },
          // {
          //   id:'studentacademicscommon',
          //   spec: 'openapi/student/academics/academicsCommon.yaml',
          //   route: '/openapi/student/academics/academicsCommon',
          // },
          // {
          //   id:'studentacademicscourse',
          //   spec: 'openapi/student/academics/academicsCourse.yaml',
          //   route: '/openapi/student/academics/academicsCourse',
          // },
          // {
          //   id:'studentacademicsdegree',
          //   spec: 'openapi/student/academics/academicsDegree.yaml',
          //   route: '/openapi/student/academics/academicsDegree',
          // },
          // {
          //   id:'studentacademicsenrollmentstatus',
          //   spec: 'openapi/student/academics/academicsEnrollmentStatus.yaml',
          //   route: '/openapi/student/academics/academicsEnrollmentStatus',
          // },
          // {
          //   id:'studentacademicsprogram',
          //   spec: 'openapi/student/academics/academicsProgram.yaml',
          //   route: '/openapi/student/academics/academicsProgram',
          // },
          // {
          //   id:'studentacademicsprogramversion',
          //   spec: 'openapi/student/academics/academicsProgramVersion.yaml',
          //   route: '/openapi/student/academics/academicsProgramVersion',
          // },
          // {
          //   id:'studentacademicsregistration',
          //   spec: 'openapi/student/academics/academicsRegistration.yaml',
          //   route: '/openapi/student/academics/academicsRegistration',
          // },
          // {
          //   id:'studentacademicsschoolstartdate',
          //   spec: 'openapi/student/academics/academicsSchoolStartDate.yaml',
          //   route: '/openapi/student/academics/academicsSchoolStartDate',
          // },
          // {
          //   id:'studentacademicsshift',
          //   spec: 'openapi/student/academics/academicsShift.yaml',
          //   route: '/openapi/student/academics/academicsShift',
          // },
          // {
          //   id:'studentacademicsstudentcourse',
          //   spec: 'openapi/student/academics/academicsStudentCourse.yaml',
          //   route: '/openapi/student/academics/academicsStudentCourse',
          // },
          // {
          //   id:'studentacademicsstudentenrollmentdpacourse',
          //   spec: 'openapi/student/academics/academicsStudentEnrollmentDpaCourse.yaml',
          //   route: '/openapi/student/academics/academicsStudentEnrollmentDpaCourse',
          // },
          // {
          //   id:'studentacademicsstudentenrollmentperiod',
          //   spec: 'openapi/student/academics/academicsStudentEnrollmentPeriod.yaml',
          //   route: '/openapi/student/academics/academicsStudentEnrollmentPeriod',
          // },
          // {
          //   id:'studentacademicsterm',
          //   spec: 'openapi/student/academics/academicsTerm.yaml',
          //   route: '/openapi/student/academics/academicsTerm',
          // },
          // the rest of them
          {
            id:'studentadmissions',
            spec: 'openapi/student/admissions.json',
            route: '/openapi/student/admissions',
          },
          {
            id: 'studentcareerservices',
            spec: 'openapi/student/careerservices.json',
            route: '/openapi/student/careerservices',
          },
          {
            id: 'studentcommon',
            spec: 'openapi/student/common.json',
            route: '/openapi/student/common',
          },
          {
            id: 'studentcrm',
            spec: 'openapi/student/crm.json',
            route: '/openapi/student/crm',
          },
          {
            id: 'studentfinancialaid',
            spec: 'openapi/student/financialaid.json',
            route: '/openapi/student/financialaid',
          },
          {
            id: 'studentaccounts',
            spec: 'openapi/student/studentaccounts.json',
            route: '/openapi/student/studentaccounts',
          },
        ],
        // Theme Options for modifying how redoc renders them
        theme: {
          // Change with your site colors
          primaryColor: '#1890ff',
        },
      },
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      // navbar: {
      //   title: 'My Site',
      //   logo: {
      //     alt: 'My Site Logo',
      //     src: 'img/logo.svg',
      //   },
      //   items: [
      //     {
      //       type: 'docSidebar',
      //       sidebarId: 'tutorialSidebar',
      //       position: 'left',
      //       label: 'Tutorial',
      //     },
      //     {to: '/blog', label: 'Blog', position: 'left'},
      //     {
      //       href: 'https://github.com/facebook/docusaurus',
      //       label: 'GitHub',
      //       position: 'right',
      //     },
      //   ],
      // },
      // footer: {
      //   style: 'dark',
      //   links: [
      //     {
      //       title: 'Docs',
      //       items: [
      //         {
      //           label: 'Tutorial',
      //           to: '/docs/intro',
      //         },
      //       ],
      //     },
      //     {
      //       title: 'Community',
      //       items: [
      //         {
      //           label: 'Stack Overflow',
      //           href: 'https://stackoverflow.com/questions/tagged/docusaurus',
      //         },
      //         {
      //           label: 'Discord',
      //           href: 'https://discordapp.com/invite/docusaurus',
      //         },
      //         {
      //           label: 'Twitter',
      //           href: 'https://twitter.com/docusaurus',
      //         },
      //       ],
      //     },
      //     {
      //       title: 'More',
      //       items: [
      //         {
      //           label: 'Blog',
      //           to: '/blog',
      //         },
      //         {
      //           label: 'GitHub',
      //           href: 'https://github.com/facebook/docusaurus',
      //         },
      //       ],
      //     },
      //   ],
      //   copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`,
      // },
      // prism: {
      //   theme: lightCodeTheme,
      //   darkTheme: darkCodeTheme,
      // },
      colorMode: {
        disableSwitch: true,
      },
      docs: {
        sidebar: {
          hideable: true,
        },
      },
    }),
};

module.exports = config;
