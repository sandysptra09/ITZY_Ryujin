import React from 'react'
import { motion } from 'framer-motion'
import about_ryujin from '../../assets/images/about_ryujin.jpeg'

export default function Overview() {
  return (
    <>
        <motion.div >
                <p>Introduction</p>
                <h2>Ryujin? Who is she?</h2>
        </motion.div>

        <div className='mt-4 flex flex-col md:flex-row justify-start items-start'>
            <motion.div>
                <p>

                </p>

                <p>

                </p>
            </motion.div>

            <motion.div>
                <img className='rounded-lg object-cover w-[400px] h-[400px]' src={about_ryujin} alt="" />
            </motion.div>
        </div>
    </>
  )
}
