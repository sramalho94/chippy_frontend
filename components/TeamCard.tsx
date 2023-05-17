import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai'
import { motion } from 'framer-motion'
type Props = { name: string; pic: string; linkedIn: string; gitHub: string }

const TeamCard = ({ name, pic, linkedIn, gitHub }: Props) => {
  return (
    <div
      className="flex flex-col py-2 px-1 justify-center align-middle w-1/4"
      key={name}
    >
      <header className="font-bold text-center text-sm">{name}</header>

      <Image src={pic} alt="pic" height={40} width={40} className="h-32 w-32" />
      <div className="flex flex-row justify-center p-1">
        <Link href={gitHub}>
          <AiFillGithub className="h-8 w-8 animate-pulse" />
        </Link>
        <Link href={linkedIn}>
          <AiFillLinkedin className="h-8 w-8 animate-pulse" />
        </Link>
      </div>
    </div>
  )
}

export default TeamCard
