import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Footer } from './Components/Footer/Footer';
import { Header } from './Components/Header/Header';

import { Home } from './pages/Home';
import { NotFound } from './pages/NotFound';
import { Recipe } from './pages/Recipe/Recipe';
import Category from './pages/Category';
import SearchMeal from './pages/SearchMeal/SearchMeal';

function App() {
    return (
        <BrowserRouter>
            <Header />
            <main className="content">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/category/:name" element={<Category />} />
                    <Route path="/searchMeal/:name" element={<SearchMeal />} />
                    <Route path="/meal/:id" element={<Recipe />} />
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </main>
            <Footer />
        </BrowserRouter>
    );
}

export default App;
