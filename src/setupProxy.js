const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
  app.use(
    '/api', // Intercepts requests to paths starting with /api
    createProxyMiddleware({
      target: 'https://4be3-113-203-198-37.ngrok-free.app', // Backend server
      changeOrigin: true, // Ensures the Origin header matches the target
      secure: false, // For HTTPS with self-signed certificates (optional)
      pathRewrite: {
        '^/api': '', // Removes /api prefix when forwarding to the target
      },
    })
  );
};
