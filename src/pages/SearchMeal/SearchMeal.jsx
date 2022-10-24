import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMealByName } from '../../api';
import { MealList } from '../../Components/MealList';
import './SearchMeal.scss';

export default function SearchedMeal() {
    const { name } = useParams();
    const [meals, setMeals] = useState([]);

    useEffect(() => {
        getMealByName(name).then((data) => {
            setMeals(data.meals);
        });
    }, [name]);
    return (
        <div>
            {!meals ? (
                <h3>Nothing found with "{name}"</h3>
            ) : (
                <>
                    <h3>Results of searching "{name}"</h3>
                    <MealList meals={meals} />
                </>
            )}
        </div>
    );
}
