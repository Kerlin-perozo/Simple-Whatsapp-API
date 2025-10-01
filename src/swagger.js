const swaggerJSDoc = require('swagger-jsdoc');

const swaggerDefinition = {
  openapi: '3.0.0',
  info: {
    title: 'Simple WhatsApp API',
    version: '1.0.0',
    description: 'A simple API to send WhatsApp messages, built with Node.js and whatsapp-web.js.',
  },
  servers: [
    {
      url: 'https://simple-whatsapp-api.kp7b0h3vueu5g.ap-south-1.cs.amazonlightsail.com',
      description: 'Development server',
    },
  ],
  components: {
    securitySchemes: {
      ApiKeyAuth: {
        type: 'apiKey',
        in: 'header',
        name: 'X-MASTER-KEY',
      },
    },
  },
  security: [
    {
      ApiKeyAuth: [],
    },
  ],
};

const options = {
  swaggerDefinition,
  // Paths to files containing OpenAPI definitions
  apis: ['./src/routes/*.js'],
};

const swaggerSpec = swaggerJSDoc(options);

module.exports = swaggerSpec;
