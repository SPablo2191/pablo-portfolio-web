import React, { useEffect, useState } from 'react';
import { Project } from '../../../../models/project.interface';
import { SmallCard } from '../../../../components/ui/smallCard/SmallCardComponent';

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
            {data.map((item: Project) => (
                <div key={item.id}>
                    <SmallCard title={item.title} description={item.description}></SmallCard>
                </div>
            ))}
        </div>
    );
}
export { Facts }
export { }