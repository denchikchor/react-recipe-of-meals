function Footer() {
    return (
        <>
            <footer className="page-footer indigo darken-2">
                <div className="footer-copyright indigo darken-3">
                    <div className="container">
                        © {new Date().getFullYear()} Copyright Text
                        <a
                            className="grey-text text-lighten-4 right"
                            href="https://github.com/denchikchor/simple-react-shop"
                        >
                            Repo
                        </a>
                    </div>
                </div>
            </footer>
        </>
    );
}

export { Footer };
