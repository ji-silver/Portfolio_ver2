import styles from './page.module.scss'
import Hero from '../components/hero/Hero'
import Layout from '@/components/layout/Layout'

export default function Home() {
  return (
    <main>
      <Layout />
      <Hero />
    </main>
  )
}
