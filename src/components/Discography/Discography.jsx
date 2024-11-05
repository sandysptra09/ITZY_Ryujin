import React, { useRef, useState, useEffect } from "react";
import style_discography from "./discography.module.scss";
import { motion } from "framer-motion";
import { fadeIn, textAnimation } from "../../utils/motion";
import { styles } from "../../styles";
import discographyData from "./discographyData";
import { FaPlay, FaPause } from "react-icons/fa"; // Mengimpor ikon

function Discography() {
    const constrainRef = useRef(null);
    const [currentAudio, setCurrentAudio] = useState(null);
    const [audioStates, setAudioStates] = useState(
        discographyData.map(() => ({ isPlaying: false, currentTime: 0 }))
    );
    const audioRefs = useRef([]);

    const handlePlayPause = (index) => {
        const audio = audioRefs.current[index];

        if (currentAudio && currentAudio !== audio) {
            currentAudio.pause();
            setAudioStates((prev) =>
                prev.map((state, i) => (i === index ? { ...state, isPlaying: false } : state))
            );
            setCurrentAudio(null);
        }

        if (audio.paused) {
            audio.play();
            setCurrentAudio(audio);
            setAudioStates((prev) =>
                prev.map((state, i) => (i === index ? { ...state, isPlaying: true } : state))
            );
        } else {
            audio.pause();
            setAudioStates((prev) =>
                prev.map((state, i) => (i === index ? { ...state, isPlaying: false } : state))
            );
        }
    };

    const updateTime = (index) => {
        const audio = audioRefs.current[index];
        setAudioStates((prev) =>
            prev.map((state, i) => (i === index ? { ...state, currentTime: audio.currentTime } : state))
        );
    };

    const handleProgressChange = (event, index) => {
        const audio = audioRefs.current[index];
        const { value } = event.target;
        audio.currentTime = value;

        setAudioStates((prev) =>
            prev.map((state, i) => (i === index ? { ...state, currentTime: value } : state))
        );
    };

    useEffect(() => {
        if (currentAudio) {
            const interval = setInterval(() => {
                updateTime(discographyData.findIndex(album => album.music === currentAudio.src));
            }, 1000);

            return () => clearInterval(interval);
        }
    }, [currentAudio]);

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
                    Sebagai anggota grup ITZY, Ryujin telah berkontribusi pada berbagai lagu yang mengangkat semangat dan energi, menunjukkan bakatnya yang tak terbantahkan di dunia K-Pop.
                    Setiap lagu yang dibawakannya menunjukkan karakter yang kuat dan keunikan yang memukau, menjadikan setiap penampilan spesial bagi para penggemar.
                    Berikut adalah beberapa karya dan kontribusinya yang menonjol dalam perjalanan musiknya bersama ITZY:
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

                                    <audio
                                        ref={(el) => (audioRefs.current[index] = el)}
                                        src={album.music}
                                        preload="auto"
                                        onTimeUpdate={() => updateTime(index)}
                                    />
                                    <div className="flex items-center mt-4">
                                        <div onClick={() => handlePlayPause(index)} className="cursor-pointer">
                                            {audioStates[index].isPlaying ? (
                                                <FaPause className="text-black" size={24} />
                                            ) : (
                                                <FaPlay className="text-black" size={24} />
                                            )}
                                        </div>
                                        <input
                                            type="range"
                                            min="0"
                                            max={audioRefs.current[index]?.duration || 0}
                                            value={audioStates[index].currentTime}
                                            onChange={(event) => handleProgressChange(event, index)}
                                            className="mx-4"
                                        />
                                    </div>
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
