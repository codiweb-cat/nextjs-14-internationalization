import { getLanguages } from '@/languages'
import Counter from '../components/counter'

export default async function Home({ params: {lang} }) {
  const language = await getLanguages(lang)

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <section className='my-12'>
        <p>Page with client component</p>
        <p>Current locale: {lang}</p>
        <p>{language.products.cart}</p>
        <Counter/>
      </section>
    </main>
  )
}