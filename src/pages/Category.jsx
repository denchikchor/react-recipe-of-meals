import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getFilterByCategory } from '../api';
import { Preloader } from '../Components/Preloader';
import { MealList } from '../Components/MealList';

export default function Category() {
    const { name } = useParams();
    const [meals, setMeals] = useState([]);
    const goBack = useNavigate();

    useEffect(() => {
        getFilterByCategory(name).then((data) => {
            setMeals(data.meals);
        });
    }, [name]);
    return (
        <>
            <button className="btn" onClick={() => goBack(-1)}>
                Go back
            </button>
            <div>{!meals ? <Preloader /> : <MealList meals={meals} />}</div>
        </>
    );
}
