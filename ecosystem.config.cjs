module.exports = {
  apps: [
    {
      name: "sitelestetelecom",
      cwd: __dirname,
      script: "node_modules/next/dist/bin/next",
      args: "start -p 3000",
      exec_mode: "fork",
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: "512M",
      restart_delay: 5000,
      env: {
        NODE_ENV: "production",
        PORT: "3000",
      },
    },
  ],
};
