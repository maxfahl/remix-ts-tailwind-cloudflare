/**
 * @type {import('@remix-run/dev').AppConfig}
 */
module.exports = {
  serverBuildTarget: process.env.NODE_ENV === 'development' ? undefined : 'cloudflare-pages',
  server: process.env.NODE_ENV === 'development' ? undefined : './server.js',
  devServerBroadcastDelay: 1000,
  ignoredRouteFiles: ['.*'],
  // serverDependenciesToBundle: [/^marked.*/, /^mapbox-gl.*/],
}
