/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  //tutorialSidebar: [{type: 'autogenerated', dirName: '.'}],

  // But you can create a sidebar manually
  
  APIsSidebar: [
    {
      type: 'category',
      label: 'Ally',
      items: [
        'allyapisintro',
        'apis/ally/allyapis'
      ]
    },
    {
      type: 'category',
      label: 'Learn',
      items: [
        'learnapisintro',
        'apis/learn/learnapisreleased',
        'apis/learn/learnapisunreleased'
      ]
    },
    {
      type: 'category',
      label: 'Student',
      items: [
        'studentapisintro',
        {
          type: 'autogenerated',
          dirName: 'apis/student', // Generate sidebar slice from docs path
        },
      ]
    },
  ],
  StudentAPIsSidebar: [
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
  StudentRapidocsAPIsSidebar: [
    'rapidocs/student/studentredocsapisintro',
    {
      type: 'category',
      label: 'Student APIs',
      items: [
        {
          type: 'link',
          label: 'Academics',
          href: 'https://blackboard.github.io/studentapiredox/api-specs/student/academics'
        },
        {
          type: 'link',
          label: 'Admissions',
          href: 'https://blackboard.github.io/studentapiredox/api-specs/student/admissions'
        },
        {
          type: 'link',
          label: 'Career Services',
          href: 'https://blackboard.github.io/studentapiredox/api-specs/student/careerservices'
        },
        {
          type: 'link',
          label: 'Common',
          href: 'https://blackboard.github.io/studentapiredox/api-specs/student/common'
        },
        {
          type: 'link',
          label: 'CRM',
          href: 'https://blackboard.github.io/studentapiredox/api-specs/student/crm'
        },
        {
          type: 'link',
          label: 'Financial Aid',
          href: 'https://blackboard.github.io/studentapiredox/api-specs/student/financialaid'
        },
        {
          type: 'link',
          label: 'Student Accounts',
          href: 'https://blackboard.github.io/studentapiredox/api-specs/student/studentaccounts'
        },
      ]
    }
  ],
  LearnAPIsSidebar: [
    'learnapisintro',
    'apis/learn/learnapisreleased',
    'apis/learn/learnapisunreleased'
  ],
  LearnRapidocsAPIsSidebar: [
    'rapidocs/learn/learnapisintro',
    {
          type: 'link',
          label: 'Learn Released',
          href: 'https://blackboard.github.io/studentapiredox/api-specs/learn/released',
    },
    {
          type: 'link',
          label: 'Learn Unreleased',
          href: 'https://blackboard.github.io/studentapiredox/api-specs/learn/unreleased',

    },
  ],
  AllyAPIsSidebar: [
    'allyapisintro',
    'apis/ally/allyapis'
  ],
  AllyRapidocsAPIsSidebar: [
    'rapidocs/ally/allyapisintro',
    {
      type: 'link',
      label: 'Ally APIs',
      href: 'https://blackboard.github.io/studentapiredox/api-specs/ally',
    },
  ],

  RapidocsAPIsSidebar: [
    'rapidocs/rapidoxapis',
    {
      type: 'category',
      label: 'APIs',
      items: [
        {
          type: 'category',
          label: 'Ally',
          items: [
            'rapidocs/ally/allyapisintro',
            {
              type: 'link',
              label: 'Ally APIs',
              href: 'https://blackboard.github.io/studentapiredox/api-specs/ally',
            },
          ]

        },
        {
          type: 'category',
          label: 'Learn',
          items: [
            'rapidocs/learn/learnapisintro',
            {
              type: 'link',
              label: 'Learn Released',
              href: 'https://blackboard.github.io/studentapiredox/api-specs/learn/released',
            
            },
            {
              type: 'link',
              label: 'Learn Uneleased',
              href: 'https://blackboard.github.io/studentapiredox/api-specs/learn/unreleased',
            },
          ]
        },
        {
          type: 'category',
          label: 'Student',
          items: [
            'rapidocs/student/studentredocsapisintro',
            {
              type: 'category',
              label: 'Student APIs',
              items: [
                {
                  type: 'link',
                  label: 'Academics',
                  href: 'https://blackboard.github.io/studentapiredox/api-specs/student/academics'
                },
                {
                  type: 'link',
                  label: 'Admissions',
                  href: 'https://blackboard.github.io/studentapiredox/api-specs/student/admissions'
                },
                {
                  type: 'link',
                  label: 'Career Services',
                  href: 'https://blackboard.github.io/studentapiredox/api-specs/student/careerservices'
                },
                {
                  type: 'link',
                  label: 'Common',
                  href: 'https://blackboard.github.io/studentapiredox/api-specs/student/common'
                },
                {
                  type: 'link',
                  label: 'CRM',
                  href: 'https://blackboard.github.io/studentapiredox/api-specs/student/crm'
                },
                {
                  type: 'link',
                  label: 'Financial Aid',
                  href: 'https://blackboard.github.io/studentapiredox/api-specs/student/financialaid'
                },
                {
                  type: 'link',
                  label: 'Student Accounts',
                  href: 'https://blackboard.github.io/studentapiredox/api-specs/student/studentaccounts'
                },
              ]
            }
          ]

        },

      ]
    }
  ]

};

module.exports = sidebars;