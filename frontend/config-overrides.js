module.exports = function override(config, env) {
    if (!config.devServer) {
      config.devServer = {};
    }
  
    config.devServer.allowedHosts = [
      'localhost',
      '.yourdomain.com' // replace with your actual domain if needed
    ];
  
    return config;
  };
  