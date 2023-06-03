const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/api', // Replace '/api' with the appropriate endpoint on your backend server
    createProxyMiddleware({
      target: 'http://localhost:8080', // Replace with the correct URL for your backend server
      changeOrigin: true,
    })
  );
};