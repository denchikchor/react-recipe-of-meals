import './Footer.scss';

function Footer() {
    return (
        <>
            <footer className="page-footer">
                <div className="container">
                    © {new Date().getFullYear()} Copyright Text
                    <a
                        className="grey-text text-lighten-4 right"
                        href="https://github.com/denchikchor/react-recipe-of-meals"
                    >
                        Repo
                    </a>
                </div>
            </footer>
        </>
    );
}

export { Footer };
