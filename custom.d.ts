/**
 * Adjust below for relevant environment variables.
 */
export type CloudFlareEnvVar = 'ENV_VAR_1' | 'ENV_VAR_2'

export type CloudFlareEnv = {
  [key in CloudFlareEnvVar]: string
}

/**
 * A base for data returned by a loader.
 */
export type LoaderData<T = undefined> = {
  data: T
  env?: CloudFlareEnv
}
