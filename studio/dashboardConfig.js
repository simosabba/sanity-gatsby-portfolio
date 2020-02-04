export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5e39d44cfc4895febd7ba4bf',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-4aoxzigf',
                  apiId: '1b614e70-7b1a-4676-a558-33e2729bde94'
                },
                {
                  buildHookId: '5e39d44dfc4895febd7ba4c0',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-zvhvmbkw',
                  apiId: '05b96185-7282-4be7-8e3a-14acae427980'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/simosabba/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-web-zvhvmbkw.netlify.com',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}
