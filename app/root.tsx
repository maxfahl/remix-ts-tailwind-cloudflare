import { LinksFunction, LoaderFunction, MetaFunction } from '@remix-run/node'
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useCatch,
  useLoaderData,
} from '@remix-run/react'
import { useIsomorphicLayoutEffect } from 'react-use'
import { getEnvVariable } from '~/utils/env'
import { CatchBoundaryComponent } from '@remix-run/server-runtime/routeModules'
import { ErrorBoundaryComponent } from '@remix-run/react/routeModules'
import { LoaderData } from '../custom'

import appStyles from './styles/app.css'

export type RootLoaderData = {
  url: string
}

export const loader: LoaderFunction = async ({
  request,
  context,
}: any): Promise<LoaderData<RootLoaderData>> => {
  return {
    data: {
      url: request.url,
    },
    // Pass environment variables you need to access in front-end code here.
    env: {
      ENV_VAR_1: getEnvVariable('ENV_VAR_1', context),
      ENV_VAR_2: getEnvVariable('ENV_VAR_2', context),
    },
  }
}

const metaTitle = 'Remix Builerplate'
const metaDescription = '...'

export const meta: MetaFunction = ({ data }) => ({
  charset: 'utf-8',
  viewport: 'width=device-width,initial-scale=1',
  title: metaTitle,
  description: metaDescription,
  'og:type': 'website',
  'og:url': data.data.url,
  'og:title': metaTitle,
  'og:description': metaDescription,
  'og:image': `${data.data.url}images/ogimage.jpg`,
  'fb:app_id': '1200894900738721',
})

export const links: LinksFunction = () => {
  return [
    { rel: 'icon', href: '/favicon.png', type: 'image/png' },
    { rel: 'stylesheet', href: appStyles },
  ]
}

export default function App() {
  const { env } = useLoaderData<LoaderData<RootLoaderData>>()

  /**
   * Set --app-height to window.innerHeight.
   * Useful for websites that wants to display content
   * on the entire screen, since 100vh does not calculate for
   * additional toolbars in mobile safari/chrome etc.
   *
   * Use in css with `height: var(--app-height)`
   */
  useIsomorphicLayoutEffect(function () {
    const setViewportHeight = () => {
      document.documentElement.style.setProperty('--app-height', `${window.innerHeight}px`)
    }
    window.addEventListener('resize', setViewportHeight)
    setViewportHeight()
  }, [])

  return (
    <html lang="en" className="min-h-full">
      <head>
        <Meta />
        <Links />
      </head>
      <body>
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
        {/**
         * Expose environment variables on window, get them by
         * calling getEnvVariable(VARIABLE_NAME) defined in
         * app/utils/env.ts
         */}
        <script
          dangerouslySetInnerHTML={{
            __html: `window.env = ${JSON.stringify(env)}`,
          }}
        />
      </body>
    </html>
  )
}

export const ErrorBoundary: ErrorBoundaryComponent = ({ error }) => {
  console.error(error)

  return (
    <html>
      <head>
        <title>Oh no!</title>
        <Meta />
        <Links />
      </head>
      <body>
        <h2>Oh no!</h2>
        <h4 className="mt-8">Error: {error.message}</h4>
        <pre className="font-mono mt-8 text-xs">{error.stack}</pre>
        <Scripts />
      </body>
    </html>
  )
}

export const CatchBoundary: CatchBoundaryComponent = () => {
  const caught: any = useCatch()

  return (
    <html>
      <head>
        <title>Oops!</title>
        <Meta />
        <Links />
      </head>
      <body className="p-8">
        <h2>Oops!</h2>
        <h4 className="mt-8">
          Error: {caught.status}: {caught.statusText}
        </h4>
        <pre className="font-mono mt-8 text-xs">
          {caught.data?.message ?? JSON.stringify(caught.data)}
        </pre>
        <Scripts />
      </body>
    </html>
  )
}
