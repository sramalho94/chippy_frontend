import Link from 'next/link'
import { AiOutlineHome } from 'react-icons/ai'
import { CgProfile } from 'react-icons/cg'
import { BsInfoCircle } from 'react-icons/bs'

const Navbar = () => {
  return (
    <div className="flex flex-row justify-center space-x-5 py-5 border-b-2">
      <Link href="/">
        <div className="flex flex-col justify-center align-middle my-auto">
          <div className="flex flex-row justify-center">
            <AiOutlineHome className="h-10 w-10" />
          </div>
          <h1 className="font-bold">Home</h1>
        </div>
      </Link>
      <Link href="/">
        <div className="flex flex-col justify-center align-middle my-auto">
          <div className="flex flex-row justify-center">
            <CgProfile className="h-10 w-10" />
          </div>
          <h1 className="font-bold">Profile</h1>
        </div>
      </Link>
      <Link href="/">
        <div className="flex flex-col justify-center align-middle my-auto">
          <div className="flex flex-row justify-center">
            <BsInfoCircle className="h-10 w-10" />
          </div>
          <h1 className="font-bold">About</h1>
        </div>
      </Link>
    </div>
  )
}

export default Navbar
