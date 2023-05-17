import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from './page.module.css'
import FilterForm from '@/components/FilterForm'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return <main className={styles.main}>
    <FilterForm/>
  </main>
}
