import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from './page.module.css'
import FilterForm from '@/components/FilterForm'
import Profile from '@/components/Profile'

const inter = Inter({ subsets: ['latin'] })
const user={}
export default function Home() {
  return <main className={styles.main}>
    <FilterForm/>
    <Profile user={{user}}/>
  </main>
}
