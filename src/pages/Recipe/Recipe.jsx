import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMealById } from '../../api';
import { Preloader } from '../../Components/Preloader';
import './Recipe.scss';

function Recipe() {
    const [recipe, setRecipe] = useState({});
    const { id } = useParams();

    useEffect(() => {
        getMealById(id).then((data) => setRecipe(data.meals[0]));
    }, [id]);

    return (
        <>
            {!recipe.idMeal ? (
                <Preloader />
            ) : (
                <div className="recipe">
                    <div className="left-side">
                        <img src={recipe.strMealThumb} alt={recipe.strMeal} />
                    </div>
                    <div className="right-side">
                        <h1>{recipe.strMeal}</h1>
                        <h6>
                            <span>Category:</span> {recipe.strCategory}
                        </h6>
                        {recipe.strArea ? (
                            <h6>
                                <span>Area:</span> {recipe.strArea}
                            </h6>
                        ) : null}
                        <p>Instruction: {recipe.strInstructions}</p>

                        <table className="centered">
                            <thead>
                                <tr>
                                    <th>Ingridient</th>
                                    <th>Measure</th>
                                </tr>
                            </thead>
                            <tbody>
                                {Object.keys(recipe).map((key) => {
                                    if (
                                        key.includes('Ingredient') &&
                                        recipe[key]
                                    ) {
                                        return (
                                            <tr key={key}>
                                                <td>{recipe[key]}</td>
                                                <td>
                                                    {
                                                        recipe[
                                                            `strMeasure${key.slice(
                                                                13
                                                            )}`
                                                        ]
                                                    }
                                                </td>
                                            </tr>
                                        );
                                    }
                                    return null;
                                })}
                            </tbody>
                        </table>

                        {recipe.strYoutube ? (
                            <div className="row">
                                <h6>Video Recipe</h6>
                                <iframe
                                    title={id}
                                    src={`https://www.youtube.com/embed/${recipe.strYoutube.slice(
                                        -11
                                    )}`}
                                    allowfullscreen
                                />
                            </div>
                        ) : null}
                    </div>
                </div>
            )}
        </>
    );
}

export { Recipe };
