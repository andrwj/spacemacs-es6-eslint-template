// Options reference: https://pm2.io/doc/en/runtime/reference/ecosystem-file/
module.exports = {
  apps: [
    {
      name: "PM2 configuration",
      script: "index.js",
      interpreter: "babel-node",
      args: "one two",
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: "1G",
      env: {
        NODE_ENV: "staging",
      },
      env_production: {
        NODE_ENV: "production",
      },
    },
  ],

  deploy: {
    production: {
      user: "ubuntu",
      host: "ip-address",
      ref: "origin/master",
      repo: "git@github.com:repo.git",
      path: "/var/www/path-to-deploy",
      "post-deploy":
      "npm install && pm2 reload ecosystem.config.js --env production",
    },
  },
};
