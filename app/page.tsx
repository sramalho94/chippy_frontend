import Image from 'next/image'
import { Inter } from 'next/font/google'

import SearchBar from '@/components/SearchBar'
import FilterForm from '@/components/FilterForm'
// import Profile from '@/components/Profile'
import Registration from '@/components/Registration'

const inter = Inter({ subsets: ['latin'] })
const user = {}
export default function Home() {
  return (
    <main>
      <SearchBar />
      <FilterForm />
      {/* <Profile user={{user}}/> */}
      {/* <Registration/> */}
    </main>
  )
}
