import { useState, useEffect } from 'react';
import { getAllCategories } from '../api';
import { Preloader } from '../Components/Preloader';
import { CategoryList } from '../Components/CategoryList';
import { Banner } from '../Components/Banner/Banner';

function Home() {
    const [catalog, setCatalog] = useState([]);
    // eslint-disable-next-line
    const [filteredCatalog, setFilteredCatalog] = useState([]);

    useEffect(() => {
        getAllCategories().then((data) => {
            setCatalog(data.categories);
            setFilteredCatalog(data.categories);
        });
    }, []);

    return (
        <>
            <Banner />
            {!catalog.length ? (
                <Preloader />
            ) : (
                <CategoryList catalog={catalog} />
            )}
        </>
    );
}

export { Home };
