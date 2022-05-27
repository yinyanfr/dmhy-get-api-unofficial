import path from 'path';

export const PORT = 20226;
export const PREFIX = '/api';

export const swaggerOptions = {
  info: {
    version: '0.0.1',
    title: 'Unoffical DMHY GET API',
    description: 'Yet another DMHY scraper',
    license: {
      name: 'MIT',
    },
  },
  // security: {
  //   BasicAuth: {
  //     type: 'http',
  //     scheme: 'basic',
  //   },
  //   Token: {
  //     type: 'http',
  //     scheme: 'bearer',
  //   },
  // },
  baseDir: path.join(__dirname, '..'),
  // Glob pattern to find your jsdoc files (multiple patterns can be added in an array)
  filesPattern: './**/*.ts',
  // URL where SwaggerUI will be rendered
  swaggerUIPath: '/swagger',
  // Expose OpenAPI UI
  exposeSwaggerUI: true,
  // Expose Open API JSON Docs documentation in `apiDocsPath` path.
  exposeApiDocs: true,
  // Open API JSON Docs endpoint.
  apiDocsPath: '/api/doc',
  // Set non-required fields as nullable by default
  notRequiredAsNullable: true,
};
