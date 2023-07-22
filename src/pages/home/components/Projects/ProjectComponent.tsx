import React, { useEffect, useState } from 'react';
import { Project } from '../../../../models/project.interface';
import { SmallCard } from '../../../../components/ui/smallCard/SmallCardComponent';
import { Spinner } from '../../../../components/ui/spinner/SpinnerComponent';
import { isTemplateSpan } from 'typescript';

const apiUrl = process.env.REACT_APP_API_URL;
function Projects() {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        fetch(apiUrl + 'projects')
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
        <div
            className="bg-white m-4 dark:bg-slate-900 rounded-lg px-6 py-8 ring-1 ring-slate-900/5 shadow-xl"
        >
            {loading ? (
                <div className='flex justify-center'>
                    <Spinner></Spinner>
                </div>
            ) : (
                <div className='md:grid grid-cols-3'>
                    {data.map((item: Project) => (
                        <div key={item.id}>
                            <SmallCard title={item.title} items={item.technologies} url={item.project_url} description={item.description}></SmallCard>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}
export { Projects }
