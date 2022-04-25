import { CloudFlareEnv, CloudFlareEnvVar } from './custom'

export {}

declare global {
  interface Window {
    env: {
      [key in CloudFlareEnvVar]: string
    }
  }

  namespace NodeJS {
    interface ProcessEnv extends CloudFlareEnv {
      NODE_ENV: 'development' | 'production' | 'test'
      PORT: string
    }
  }
}
