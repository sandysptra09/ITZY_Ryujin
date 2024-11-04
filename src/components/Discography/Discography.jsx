import React, { useRef } from "react";
import style_discography from "./discography.module.scss";
import { motion } from "framer-motion";
import discographyData from "./discographyData";
import { styles } from "../../styles";

export default function Discography() {
    // initialize ref
    const constrainRef = useRef(null);

    return (
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
    );
}
