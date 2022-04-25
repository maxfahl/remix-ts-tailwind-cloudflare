export type CloudFlareEnvVar = 'ENV_VAR_1' | 'ENV_VAR_2'

export type CloudFlareEnv = {
  [key in CloudFlareEnvVar]: string
}

export type LoaderData<T = undefined> = {
  data: T
  env?: CloudFlareEnv
}
