import React, { useEffect, useState } from 'react';
import { BigCard } from '../../../../components/ui/bigCard/bigCardComponent';
import { Spinner } from '../../../../components/ui/spinner/SpinnerComponent';
import aboutMePicture from '../../../../assets/images/about-me-picture.jpeg'
import { Fact } from '../../../../models/fact.interface';
const apiUrl = process.env.REACT_APP_API_URL;
function Facts() {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch(apiUrl + 'facts/?format=json')
            .then(response => response.json())
            .then(data => {
                setData(data);
                setLoading(false);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
                setLoading(false);
            });
    }, []);

    return (
        <div >
            {loading ? (
                <div className='bg-white m-4 dark:bg-slate-900 rounded-lg px-6 py-8 ring-1 ring-slate-900/5 shadow-xl flex justify-center'>
                    <Spinner></Spinner>
                </div>
            ) : (
                data.map((item: Fact) => (
                    <div key={item.id}>
                        <BigCard title={item.title} imageUrl={aboutMePicture} description={item.description} />
                    </div>
                ))
            )}
        </div>
    );
}

export { Facts };
