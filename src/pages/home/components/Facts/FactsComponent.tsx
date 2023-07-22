import React, { useEffect, useState } from 'react';
import { BigCard } from '../../../../components/ui/bigCard/bigCardComponent';
import aboutMePicture from '../../../../assets/images/about-me-picture.jpeg'
const apiUrl = process.env.REACT_APP_API_URL;
function Facts() {
    const [data, setData] = useState([]);
    useEffect(() => {
        fetch(apiUrl + 'facts')
            .then(response => response.json())
            .then(data => setData(data))
            .catch(error => console.error('Error fetching data:', error));
    }, []);
    return (
        <div
            className="bg-white m-4 dark:bg-slate-900 rounded-lg px-6 py-8 ring-1 ring-slate-900/5 shadow-xl"
        >
            {data.map((item: any) => (
                <div className="">
                    <BigCard title={item.title} imageUrl={aboutMePicture} description={item.description} ></BigCard>
                </div>
            ))}
        </div>
    );
}
export { Facts }