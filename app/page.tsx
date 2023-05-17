import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from './page.module.css'
import Profile from '@/components/Profile'

const inter = Inter({ subsets: ['latin'] })
const user={}
export default function Home() {
  return <main className={styles.main}>
    <Profile user={{user}}/>
  </main>
}
