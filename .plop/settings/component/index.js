module.exports = {
  description: 'Creates a new component',
  prompts: [
    {
      type: 'list',
      name: 'componentType',
      message: 'What component do you want to create?',
      choices: ['atoms', 'molecules', 'organisms', 'templates']
    },
    {
      type: 'input',
      name: 'name',
      message: 'What is the name of the component?'
    }
  ],
  actions: [
    // component
    {
      type: 'add',
      path: '../src/components/ui/{{componentType}}/{{pascalCase name}}/index.tsx',
      templateFile: 'templates/component/component.tsx.hbs'
    },
    // storybook
    // {
    //   type: 'add',
    //   path: '../src/components/ui/{{componentType}}/{{pascalCase name}}/index.stories.tsx',
    //   templateFile: 'templates/component/stories.tsx.hbs'
    // },
    // tests
    // {
    //   type: 'add',
    //   path: '../src/components/ui/{{componentType}}/{{pascalCase name}}/index.test.tsx',
    //   templateFile: 'templates/component/test.tsx.hbs'
    // },
    // styles
    {
      type: 'add',
      path: '../src/components/ui/{{componentType}}/{{pascalCase name}}/index.styles.tsx',
      templateFile: 'templates/component/styles.tsx.hbs'
    }
  ]
}
