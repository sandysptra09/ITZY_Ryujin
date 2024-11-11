import React from "react";

export default function Videos() {
    const videoLinks = [
        "xW95ui6xDNM?si=mAXiX_86ZANj4vIJ",
        "9TrHW8zZd7M?si=P3LrQsWOkaPXdvBo",
        "ra27BWdRpm4?si=NdHI0FlGr_QiMQyF",
        "CQS7wiO90zU?si=zPTksbRGX31cLlwF",
        "I6v1jhaZ8OA?si=vgkgTZUXOzC-l2QK",
        "29Qi9f5cZW4?si=xEDcwPcO7Krd0f0V"
    ];

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
            {videoLinks.map((link, index) => (
                <div className="video-item shadow-lg rounded-lg overflow-hidden" key={index}>
                    <iframe
                        width="100%" // Membuat lebar video responsif
                        height="315"
                        src={`https://www.youtube.com/embed/${link}`}
                        title={`YouTube video player ${index + 1}`}
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerPolicy="strict-origin-when-cross-origin"
                        allowFullScreen
                    ></iframe>
                </div>
            ))}
        </div>
    );
}
