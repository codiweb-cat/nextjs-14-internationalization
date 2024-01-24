import { getLanguages } from '@/languages'
import Link from 'next/link'

export default async function Home({ params: {lang} }) {
  const language = await getLanguages(lang)

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <section className='my-12'>
      LANGUAGE: <Link href='/en'>EN</Link> <Link href='/es'>ES</Link>
      <p>Current locale: {lang}</p>
      <p>{language.home.title}</p>
      <div className='mt-12'>
        <Link href='/page-test'>Counter</Link>
      </div>
      </section>
    </main>
  )
}