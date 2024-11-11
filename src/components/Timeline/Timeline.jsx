import React from 'react';
import { motion } from 'framer-motion';
import { fadeIn, textAnimation } from '../../utils/motion';
import { styles } from '../../styles';
import milestones from './milestones';

function Timeline() {
  return (
    <div className='mb-4 mt-8'>
      <motion.div
        variants={fadeIn("down", "tween", 0.2, 1)}
        initial="hidden"
        animate="show"
      >
        <p className={styles.sectionSubText2}>Timeline.</p>
        <h2 className={styles.sectionHeadText}>Iconic Milestones with ITZY</h2>
      </motion.div>

      <div className='text-white text-[17px] max-w-2xl leading-[30px] mb-8'>
        <motion.p
          {...textAnimation(0)}
          style={{ fontSize: '17px', fontWeight: 'normal', margin: '10px 0' }}
        >
          As one of the leading forces in ITZY, Ryujin has continually mesmerized fans with her powerful performances.
          Her passion and presence radiate in every performance, securing her well-earned place at the top of the K-Pop scene.
          From electrifying stages to unforgettable moments on screen, Ryujin’s influence remains undeniable, and we are here
          to celebrate the iconic moments she’s shared with ITZY. Let’s revisit some of the most remarkable milestones from her journey.
        </motion.p>
      </div>

      <motion.ul
        className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical"
        variants={fadeIn("up", "tween", 0.4, 1)}
        initial="hidden"
        animate="show"
      >
        {milestones.map((milestone, index) => (
          <motion.li
            key={index}
            variants={fadeIn("up", "tween", 0.5, 1)}
            initial="hidden"
            animate="show"
          >
            <div className="timeline-middle">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="h-5 w-5">
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                  clipRule="evenodd" />
              </svg>
            </div>
            <div className={index % 2 === 0 ? 'timeline-start mb-10 md:text-end' : 'timeline-end mb-10'}>
              <time className="italic">{milestone.date}</time>
              <motion.div
                className={"text-lg font-black text-white"}
                variants={textAnimation(index)}
                initial="initial"
                animate="animate"
              >
                {milestone.title}
              </motion.div>
              <motion.p
                variants={textAnimation(index)}
                initial="initial"
                animate="animate"
              >
                {milestone.description}
              </motion.p>
            </div>
            <hr />
          </motion.li>
        ))}
      </motion.ul>
    </div>
  );
}

import { SectionWrapper } from '../../hoc';
export default SectionWrapper(Timeline, 'timeline');
