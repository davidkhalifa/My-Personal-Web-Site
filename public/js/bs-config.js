/*
 * Browser-sync config file
 * For more options: https://browsersync.io/docs/options
 */
module.exports = {
  server: {
    baseDir: './public',
    routes: {
      "/node_modules": "node_modules"
    }
  },
  port: 3000,
  files: ["./public/**/*"],
  injectChanges: true,
  logLevel: "info",
  logPrefix: "WebServer",
  notify: true,
  open: true,
  reloadDelay: 50
};