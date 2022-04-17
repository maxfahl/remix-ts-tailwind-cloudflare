import { LinksFunction, MetaFunction } from '@remix-run/node'
import { Links, LiveReload, Meta, Outlet, Scripts, ScrollRestoration } from '@remix-run/react'
import appStyles from './styles/app.css'

export const meta: MetaFunction = () => ({
  charset: 'utf-8',
  title: 'Remix Builerplate',
  viewport: 'width=device-width,initial-scale=1',
})

export const links: LinksFunction = () => {
  return [
    { rel: 'icon', href: '/favicon.png', type: 'image/png' },
    { rel: 'stylesheet', href: appStyles },
  ]
}

export default function App() {
  return (
    <html lang="se" className="min-h-full">
      <head>
        <Meta />
        <Links />
      </head>
      <body className="min-h-full">
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  )
}

// export function ErrorBoundary({ error }: any) {
//   console.error(error)
//   return (
//     <html>
//       <head>
//         <title>Oh no!</title>
//         <Meta />
//         <Links />
//       </head>
//       <body>
//         {error}
//         {/* add the UI you want your users to see */}
//         <Scripts />
//       </body>
//     </html>
//   )
// }
