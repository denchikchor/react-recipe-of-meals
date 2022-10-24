import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getFilterByCategory } from '../api';
import { Preloader } from '../Components/Preloader';
import { MealList } from '../Components/MealList';

export default function Category() {
    const { name } = useParams();
    const [meals, setMeals] = useState([]);

    useEffect(() => {
        getFilterByCategory(name).then((data) => {
            setMeals(data.meals);
        });
    }, [name]);
    return (
        <>
            <div>{!meals ? <Preloader /> : <MealList meals={meals} />}</div>
        </>
    );
}
