'use client'

import React from 'react'
import { motion } from 'framer-motion'
import TeamCard from '@/components/teamCard'

const page = () => {
  const Members = [
    {
      pic: 'chippyprof.jpeg',
      name: 'Stephan D Ramalho',
      linkedIn: 'http://www.linkedin.com/in/stephan-ramalho/',
      gitHub: 'https://github.com/sramalho94'
    },
    {
      pic: 'jeremy.jpeg',
      name: 'Jeremy Harrel',
      linkedIn: 'http://www.linkedin.com/in/jeremy-harrell-softwareengineer/',
      gitHub: 'https://github.com/wolfy1313'
    },
    {
      pic: 'kalen.jpeg',
      name: 'Kalen Luciano',
      linkedIn: 'http://www.linkedin.com/in/kalenluciano/',
      gitHub: 'https://github.com/kalenluciano'
    },
    {
      pic: 'shondriane.jpeg',
      name: 'Shondriane M Wise',
      linkedIn: 'http://www.linkedin.com/in/shondriane-mesa-wise/',
      gitHub: 'https://github.com/shondriane'
    }
  ]
  return (
    <div className="flex flex-col p-2  min-h-screen bg-yellow-200 bg-gradient-to-r from-red-200 ">
      <div className="flex flex-row justify-center mb-2">
        <p className="font-extrabold text-2xl">About Us</p>
      </div>

      <motion.div
        className="flex flex-col text-black align-middle text-left border border-gray-300 rounded-lg shadow-lg bg-white/40 mb-3"
        initial={{ y: -100, opacity: 0 }}
        transition={{ duration: 1.2 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <p className="font-bold text-xl text-center">The Project</p>
        <div className="space-y-2">
          <p>
            Chippy is a groundbreaking full-stack application designed to bridge
            the gap between chip enthusiasts and their craving for unique,
            hard-to-find chips. This platform was inspired by the challenges
            faced by our founder, Jeremy, during his years of touring. As chip
            connoisseurs ourselves, we realized the need for an easier way to
            connect people with regional chip brands, and we decided to leverage
            our technical prowess to build this revolutionary solution.
          </p>{' '}
          <p>
            Chippy goes beyond a typical product locator. It's a vibrant
            community for chip aficionados to share and discover rare and
            exciting chips from around the world. Users can post about their
            unique finds, share their personal reviews, and even guide others to
            these regional delicacies using our intuitive map feature, making
            the hunt for new flavors as easy as a Google Maps search.
          </p>
          <p>
            Behind the scenes, our team is constantly honing our skills and
            exploring cutting-edge technologies like NextJS, TypeScript, and AWS
            to improve and enhance Chippy. By bringing together chip lovers and
            unique chips in one place, we're not just creating an app - we're
            building a global community of flavor explorers.
          </p>
        </div>
      </motion.div>

      <motion.div
        className="flex flex-col text-black align-middle text-left border border-gray-300 rounded-lg shadow-lg bg-white/40"
        initial={{ x: -100, opacity: 0 }}
        transition={{ duration: 1.2 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
      >
        <p className="font-bold text-xl text-center">The Team</p>
        <div className="flex flex-row mx-1 justify-evenly bg-white/40 rounded-lg mb-1">
          {Members.map((member) => (
            <TeamCard
              name={member.name}
              pic={`/${member.pic}`}
              linkedIn={member.linkedIn}
              gitHub={member.gitHub}
              key={member.name}
            />
          ))}
        </div>
      </motion.div>
    </div>
  )
}

export default page
