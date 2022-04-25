import { isBrowser } from '~/utils/browser'
import { CloudFlareEnv, CloudFlareEnvVar } from '../../custom'

/**
 * Convenience method for getting environment variables no matter
 * where you are, be it on the remix server in dev, served from cloudflare
 * or running in the browser.
 *
 * For `window.env`, please consult the render method in root.tsx for details.
 */
const getEnvVariable = (name: CloudFlareEnvVar, env: CloudFlareEnv): string => {
  return isBrowser ? window.env[name] : env ? env[name] : process.env[name]
}

export { getEnvVariable }
