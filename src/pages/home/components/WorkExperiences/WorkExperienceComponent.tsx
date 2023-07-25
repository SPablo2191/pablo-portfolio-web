import React, { useEffect, useState } from 'react';
import { Spinner } from '../../../../components/ui/spinner/SpinnerComponent';
import { SmallCard } from '../../../../components/ui/smallCard/SmallCardComponent';
import { WorkExperience } from '../../../../models/work.experience.interface';
const apiUrl = process.env.REACT_APP_API_URL;
function Works() {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    function formatDate(date : Date) {
        const month = (date.getMonth() + 1).toString().padStart(2, '0');
        const year = date.getFullYear();
        return `${month}/${year}`;
      }
      
    useEffect(() => {
        fetch(apiUrl + 'works/?format=json')
            .then(response => response.json())
            .then(data => {
                setData(data);
                console.log(data);
                setLoading(false);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
                setLoading(false);
            });
    }, []);

    return (
        <div className="bg-white m-4 dark:bg-slate-900 rounded-lg px-6 py-8 ring-1 ring-slate-900/5 shadow-xl">
            {loading ? (
                <div className='bg-white m-4 dark:bg-slate-900 rounded-lg px-6 py-8 ring-1 ring-slate-900/5 shadow-xl flex justify-center'>
                    <Spinner></Spinner>
                </div>
            ) : (
                <div className='md:grid grid-cols-3'>
                    {
                        data.map((item: WorkExperience) => (
                            <div key={item.id} >
                                <SmallCard title={item.company.name} subtitle={<span><strong>Rol:</strong> {item.role.name}</span>} description={item.description} footer={<span>{formatDate(new Date(item.start_date))} - {item.end_date ? formatDate(new Date(item.end_date)) : 'Actualidad'}</span>}></SmallCard>
                            </div>
                        ))
                    }
                </div>
            )}
        </div>
    );
}

export { Works };
