const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'https://ajh-website.herokuapp.com/',
      changeOrigin: true,
    })
  );
};