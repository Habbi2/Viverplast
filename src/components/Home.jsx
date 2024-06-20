import "../css/Home.css"

const Home = ({ setBool }) => {
    return (
        <div>
            <div className="container">
                <header>
                    <h1>Viverplast</h1>
                    <p>Your Trusted Source for Quality Agricultural Products</p>
                </header>
                <button className="explore-button" onClick={() => setBool(1)}>Explore</button>
            </div>
        </div>
    );
};


export default Home;