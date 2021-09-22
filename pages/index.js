import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>This is me playing around and learning Next.js</p>
        <p>
          (This blog is a very simple sample. You can build your own {' '}
          <a href="https://nextjs.org/learn">Here</a>.)
        </p>
      </section>
    </Layout>
  )
}