import Logo from "../Logo";


const AppHeader = () => {
    return (
        <header>
            <div className="header">
                <h1 className="app-title">Etch-a-Sketch</h1>
                <Logo />
            </div>
        </header>
    );
};

export default AppHeader;