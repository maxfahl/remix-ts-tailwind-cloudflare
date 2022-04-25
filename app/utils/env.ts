import { isBrowser } from '~/utils/browser'
import { CloudFlareEnv, CloudFlareEnvVar } from '../../custom'

const getEnvVariable = (name: CloudFlareEnvVar, env: CloudFlareEnv): string => {
  return isBrowser ? window.env[name] : env ? env[name] : process.env[name]
}

export { getEnvVariable }
