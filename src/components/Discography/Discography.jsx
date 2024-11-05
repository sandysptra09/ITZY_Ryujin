import React, { useRef } from "react";
import style_discography from "./discography.module.scss";
import { motion } from "framer-motion";
import { fadeIn, textAnimation } from "../../utils/motion";
import { styles } from "../../styles";
import discographyData from "./discographyData";

function Discography() {
    const constrainRef = useRef(null);

    return (
        <div className="mb-4">
            <motion.div
                variants={fadeIn("down", "tween", 0.2, 1)}
                initial="hidden"
                animate="show"
            >
                <p className={styles.sectionSubText}>Discography.</p>
                <h2 className={styles.sectionHeadText}>Ryujin's career with ITZY</h2>
            </motion.div>

            <div className='text-white text-[17px] max-w-2xl leading-[30px]'>
                <motion.p
                    {...textAnimation(0)}
                    style={{ fontSize: '17px', fontWeight: 'normal', margin: '10px 0' }}
                >
                    As a member of the group ITZY, Ryujin has contributed to various uplifting and energizing songs, showcasing her undeniable talent in the K-Pop world.
                    uplifting and energizing songs, showcasing her undeniable talent in the K-Pop world.
                    Each song she performs showcases her strong character and mesmerizing uniqueness, making each performance special for fans.
                    performance special for fans. Here are some of his outstanding works and contributions
                    Ryujin in her musical journey with ITZY:
                </motion.p>
            </div>

            <motion.div
                className={`${style_discography.wrapper} text-gray-900`}
                ref={constrainRef}
            >
                <motion.div
                    className={style_discography.contentSliderContainer}
                    drag="x"
                    dragConstraints={constrainRef}
                >
                    {discographyData.map((album, index) => (
                        <motion.div
                            key={index}
                            className={style_discography.card}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <img
                                src={album.cover}
                                alt={`Cover ${album.title}`}
                                className={style_discography.albumImage}
                            />
                            <div className="relative px-4 -mt-16">
                                <div className="bg-white p-6 rounded-lg shadow-lg">
                                    <div className="flex items-baseline">
                                        <span className="bg-black text-white text-xs px-2 inline-block rounded-full uppercase font-semibold tracking-wide">
                                            {album.title}
                                        </span>
                                        <div className="ml-2 text-gray-600 uppercase text-xs font-semibold tracking-wider">
                                            {album.date}
                                        </div>
                                    </div>
                                    <h4 className="mt-2 text-xl font-semibold uppercase leading-tight truncate">
                                        {album.song}
                                    </h4>
                                    <p className="mt-2 text-gray-700 text-sm">{album.description}</p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </motion.div>
        </div>
    );
}

import SectionWrapper from '../../hoc/SectionWrapper';

export default SectionWrapper(Discography, "discography");
