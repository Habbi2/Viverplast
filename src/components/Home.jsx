import "../css/Home.css"

const Home = ({ setBool }) => {
    return (
        <div>
            <div className="container">
                <header>
                    <h1>Viverplast</h1>
                    <p>Su fuente confiable de Agroinsumos de alta calidad</p>
                </header>
                <button className="explore-button" onClick={() => setBool(1)}>Explorar</button>
            </div>
        </div>
    );
};


export default Home;