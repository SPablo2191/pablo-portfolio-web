import React, { useEffect, useState } from 'react';
import { Spinner } from '../../../../components/ui/spinner/SpinnerComponent';
import { SkillCard } from '../../../../components/skillCard/SkillCardComponent';
import { Skill } from '../../../../models/skill.interface';
const apiUrl = process.env.REACT_APP_API_URL;
function Skills() {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch(apiUrl + 'skills/?format=json')
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
                data.map((item: Skill) => (
                    <div key={item.id}>
                        <SkillCard name={item.name} items={item.technologies}></SkillCard>
                    </div>
                ))
            )}
        </div>
    );
}

export { Skills };
