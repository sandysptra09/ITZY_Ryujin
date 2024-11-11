import React from 'react';
import { motion } from 'framer-motion';
import { textVariant, textAnimation, fadeIn, staggerContainer } from '../../utils/motion';
import { SectionWrapper } from '../../hoc';
import { styles } from '../../styles';
import about_ryujin from '../../assets/images/about_ryujin.jpeg';

const AboutSection = () => {
    return (
        <>
            <motion.div
                variants={fadeIn("down", "tween", 0.2, 1)}
                initial="hidden"
                animate="show"
            >
                <p className={styles.sectionSubText2}>Introduction.</p>
                <h2 className={styles.sectionHeadText}>Shin Ryu-jin? Who is she?</h2>
            </motion.div>

            <motion.div
                initial="hidden"
                animate="show"
                variants={staggerContainer(0.3, 0.1)}
                className='mt-4 flex flex-col md:flex-row justify-between items-start'
            >
                <div className='text-white text-[17px] max-w-2xl leading-[30px]'>
                    <motion.p
                        {...textAnimation(0)}
                        style={{ fontSize: '17px', fontWeight: 'normal', margin: '10px 0' }}
                    >
                        Ryujin, whose real name is Shin Ryujin, is a South Korean singer and dancer,
                        best known as a member of the popular girl group ITZY, which debuted under JYP Entertainment in 2019.
                        Born on April 17, 2001, in South Korea, Ryujin quickly gained attention for her charismatic stage presence and powerful performances.
                        She serves as the group's leader and is recognized for her exceptional rap skills, strong vocals, and unique dance abilities.
                    </motion.p>

                    <motion.p
                        {...textAnimation(1)}
                        style={{ fontSize: '17px', fontWeight: 'normal', margin: '10px 0' }}
                    >
                        Ryujin's journey to fame began when she participated in the reality survival show "Mixnine" in 2017,
                        where she showcased her talent and caught the eye of industry professionals. After training for several years,
                        she debuted with ITZY, which quickly rose to prominence with hit songs like "DALLA DALLA," "WANNABE," and "LOCO."
                    </motion.p>

                    <motion.p
                        {...textAnimation(2)}
                        style={{ fontSize: '17px', fontWeight: 'normal', margin: '10px 0' }}
                    >
                        Beyond her musical achievements, Ryujin is admired for her fashion sense, visuals, and engaging personality,
                        making her a beloved figure among fans known as MIDZY. As a member of ITZY, she continues to inspire many with her
                        dedication and passion for music and performance.
                    </motion.p>
                </div>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1, transition: { duration: 0.5, delay: 0.6 } }} // Memunculkan gambar setelah 0.6 detik
                >
                    <img className='rounded-lg object-cover w-[400px] h-[400px]' src={about_ryujin} alt="Tentang Ryujin" />
                </motion.div>
            </motion.div>
        </>
    );
};

export default SectionWrapper(AboutSection, "about");
