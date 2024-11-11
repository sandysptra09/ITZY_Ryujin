import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { fadeIn, textAnimation } from '../../utils/motion';
import { styles } from '../../styles';

// import from nextui
import { Tabs, Tab } from '@nextui-org/react';
import { HiOutlinePaintBrush } from "react-icons/hi2";
import Photos from './Collections/Photos';
import FanArts from './Collections/FanArts';

function GalleryFilters() {
    // initiate
    const [activeTab, setActiveTab] = useState("photos"); // Track active tab

    // Function to handle tab change
    const handleTabChange = (key) => {
        setActiveTab(key);
    };

    return (
        <div className='mb-4'>
            <motion.div
                variants={fadeIn("down", "tween", 0.2, 1)}
                initial="hidden"
                animate="show"
            >
                <p className={styles.sectionSubText2}>Moments Captured.</p>
                <h2 className={styles.sectionHeadText}>Memorable Moments with ITZY</h2>
            </motion.div>

            <div className='text-white text-[17px] max-w-2xl leading-[30px] mb-8'>
                <motion.p
                    {...textAnimation(0)}
                    style={{ fontSize: '17px', fontWeight: 'normal', margin: '10px 0' }}
                >
                    Ryujin, as a powerful force within ITZY, has consistently amazed fans with her captivating performances.
                    Her energy and passion shine through in every song, proving her undeniable place in the K-Pop industry.
                    From stage to screen, Ryujin’s presence continues to leave an unforgettable mark, and we can’t help but celebrate
                    the iconic moments she’s shared with ITZY. Here’s a look at some of the most memorable moments from her journey.
                </motion.p>
            </div>

            <div className="flex w-full flex-col">
                <Tabs
                    aria-label="Options"
                    color="#FFB8EB"
                    variant="bordered"
                    selectedKey={activeTab} // Bind active tab
                    onSelectionChange={handleTabChange} // Set tab change handler
                >
                    <Tab
                        key="photos"
                        title={
                            <div className="flex items-center space-x-2">
                                <div>
                                    <svg
                                        aria-hidden="true"
                                        focusable="false"
                                        height="24"
                                        role="presentation"
                                        viewBox="0 0 24 24"
                                        width="24"
                                        fill="none"
                                    >
                                        <path d="M2.58078 19.0112L2.56078 19.0312C2.29078 18.4413 2.12078 17.7713 2.05078 17.0312C2.12078 17.7613 2.31078 18.4212 2.58078 19.0112Z" fill="currentColor" />
                                        <path d="M9.00109 10.3811C10.3155 10.3811 11.3811 9.31553 11.3811 8.00109C11.3811 6.68666 10.3155 5.62109 9.00109 5.62109C7.68666 5.62109 6.62109 6.68666 6.62109 8.00109C6.62109 9.31553 7.68666 10.3811 9.00109 10.3811Z" fill="currentColor" />
                                        <path d="M16.19 2H7.81C4.17 2 2 4.17 2 7.81V16.19C2 17.28 2.19 18.23 2.56 19.03C3.42 20.93 5.26 22 7.81 22H16.19C19.83 22 22 19.83 22 16.19V13.9V7.81C22 4.17 19.83 2 16.19 2ZM20.37 12.5C19.59 11.83 18.33 11.83 17.55 12.5L13.39 16.07C12.61 16.74 11.35 16.74 10.57 16.07L10.23 15.79C9.52 15.17 8.39 15.11 7.59 15.65L3.85 18.16C3.63 17.6 3.5 16.95 3.5 16.19V7.81C3.5 4.99 4.99 3.5 7.81 3.5H16.19C19.01 3.5 20.5 4.99 20.5 7.81V12.61L20.37 12.5Z" fill="currentColor" />
                                    </svg>
                                </div>
                                <span>Photos</span>
                            </div>
                        }
                    />
                    <Tab
                        key="fanart"
                        title={
                            <div className="flex items-center space-x-2">
                                <HiOutlinePaintBrush fontSize={20} />
                                <span>Fan Art</span>
                            </div>
                        }
                    />
                    <Tab
                        key="videos"
                        title={
                            <div className="flex items-center space-x-2">
                                <svg
                                    aria-hidden="true"
                                    focusable="false"
                                    height="24"
                                    role="presentation"
                                    viewBox="0 0 24 24"
                                    width="24"
                                    fill="none"
                                >
                                    <path d="M14.7295 2H9.26953V6.36H14.7295V2Z" fill="currentColor" />
                                    <path d="M16.2305 2V6.36H21.8705C21.3605 3.61 19.3305 2.01 16.2305 2Z" fill="currentColor" />
                                    <path d="M2 7.85938V16.1894C2 19.8294 4.17 21.9994 7.81 21.9994H16.19C19.83 21.9994 22 19.8294 22 16.1894V7.85938H2ZM14.44 16.1794L12.36 17.3794C11.92 17.6294 11.49 17.7594 11.09 17.7594C10.79 17.7594 10.52 17.6894 10.27 17.5494C9.69 17.2194 9.37 16.5394 9.37 15.6594V13.2594C9.37 12.3794 9.69 11.6994 10.27 11.3694C10.85 11.0294 11.59 11.0894 12.36 11.5394L14.44 12.7394C15.21 13.1794 15.63 13.7994 15.63 14.4694C15.63 15.1394 15.2 15.7294 14.44 16.1794Z" fill="currentColor" />
                                    <path d="M7.76891 2C4.66891 2.01 2.63891 3.61 2.12891 6.36H7.76891V2Z" fill="currentColor" />
                                </svg>
                                <span>Videos</span>
                            </div>
                        }
                    />
                </Tabs>
            </div>

            <div className="mt-4">
                {activeTab === "photos" && <Photos />}
                {activeTab === "fanart" && <FanArts />}
                {activeTab === "videos" && <div>Content for Videos Tab</div>}
            </div>
        </div>
    );
}

import { SectionWrapper } from '../../hoc';
export default SectionWrapper(GalleryFilters, 'gallery_filters');
