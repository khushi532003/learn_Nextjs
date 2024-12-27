"use client";

import { useEffect, useState } from "react";

const getMongoImg = () => {

    const [images, setImages] = useState([])

    useEffect(() => {
        const fetchImages = async () => {
            try {
                let response = await fetch("/api/get-mongo-image")
                let result = await response.json()

                console.log("Fetched Images : ", result);

                if (result.success) {
                    setImages(result.images)
                } else {
                    console.log("Error");
                }
            } catch (error) {
                console.log(error);
            }
        };
        fetchImages()
    }, [])

    return (
        <>
            <h2> Get Image from Mongo DB</h2>

            <div className="flex flex-wrap">
                {
                    images.map((item) => (
                        <div className="m-5" key={item._id}>
                            <img className="w-60" src={`data:${item.contentType};base64, ${Buffer.from(item.data).toString('base64')}`} alt={item.name} />

                            <p>{item.name}</p>
                        </div>
                    ))
                }
            </div>

        </>
    )
}

export default getMongoImg