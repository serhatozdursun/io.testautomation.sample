const { DEFAULT_THEME } = require('@cucumber/pretty-formatter');

module.exports = {
  default: {
    format: ['html:./report/cucumber-report.html', '@cucumber/pretty-formatter'],
    formatOptions: {
      theme: {
        ...DEFAULT_THEME,
        'datatable border': ['green'],
        'datatable content': ['green', 'italic'],
        'docstring content': ['green', 'italic'],
        'docstring delimiter': ['green'],
        'feature description': ['green'],
        'feature keyword': ['bold', 'green'],
        'rule keyword': ['yellow'],
        'scenario keyword': ['greenBright'],
        'scenario name': ['green', 'underline'],
        'step keyword': ['bgGreen', 'black', 'italic'],
        'step text': 'greenBright',
        tag: 'green'
      }
    },
    paths: ['features/**/*.feature'],
    require: ['step_definitions/*.ts'],
    requireModule: ['ts-node/register'],
    publishQuiet: false,
    publish: true,
    retry: 1
  }
};
