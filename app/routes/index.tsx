import { LoaderFunction } from '@remix-run/server-runtime'
import { LoaderData } from '../../custom'
import { useLoaderData } from '@remix-run/react'

export type IndexLoadeData = {
  welcome: string
}

/**
 * Optionally expose cloudflare environtment variables from the loader
 * to be accessed in the components.
 */
export const loader: LoaderFunction = async ({ context }): Promise<LoaderData<IndexLoadeData>> => {
  const env = context?.env
  return {
    env,
    data: { welcome: 'Remix Boilerplate' },
  }
}

export default function Index() {
  const {
    data: { welcome },
  } = useLoaderData<LoaderData<IndexLoadeData>>()

  return (
    <main className="lg:prose-md prose p-4 md:p-8">
      <h1>{welcome}</h1>
      <p>
        Aliquid quae est aut. Omnis dicta totam sunt alias illum omnis officiis qui iusto. Sit dolor
        dolorum delectus ut eligendi reiciendis quis dicta. Impedit et rerum ut est culpa voluptatem
        aut. Facere repellendus quis est quasi earum reiciendis. Est voluptatum modi et minima in.
      </p>
      <p>
        Non maiores dicta voluptas est dolorum. Et labore et impedit ratione. Quas dignissimos quia
        ut.
      </p>
      <p>
        Vel officia sit dolorem voluptatem consectetur distinctio quia et. Dolor nisi in at dolorem
        et facere velit aut non. Eum maxime impedit cum iure quis. Rerum quis sed commodi. Unde
        corrupti velit voluptas voluptate incidunt blanditiis.
      </p>
      <p>
        Eos libero deserunt ut quos. Velit id est neque. Aut recusandae sit sed et quasi alias iure.
        Ex alias ea doloremque eum ut ea architecto. Voluptate voluptatem totam porro libero eum
        iusto voluptate et.
      </p>
    </main>
  )
}
