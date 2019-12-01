module.exports = {
  apps : [{
    name: 'blog',
    script: 'app.js',

    // Options reference: https://pm2.keymetrics.io/docs/usage/application-declaration/
    args: 'one two',
    instances: 1,
    autorestart: true,
    watch: false,
    max_memory_restart: '1G',
    env: {
      NODE_ENV: 'development'
    },
    env_production: {
      NODE_ENV: 'production'
    }
  }],

  deploy : {
    production : {
      user : 'root',
      host : '94.191.104.239',
      ref  : 'origin/master',
      repo : 'https://github.com/pyc123/blog.git',
      path : '/www/blog',
      'post-deploy' : 'npm install && npm run server'
    }
  }
};
