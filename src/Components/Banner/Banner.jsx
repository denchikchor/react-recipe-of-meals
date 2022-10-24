import './Banner.scss';
import Search from '../Search/Search';

function Banner() {
    return (
        <div className="Banner">
            <div className="left-side">
                <h1>
                    Look for a <br />
                    Best <span>Recipes</span>
                </h1>
                <Search />
            </div>
            <div className="right-side"></div>
        </div>
    );
}

export { Banner };
