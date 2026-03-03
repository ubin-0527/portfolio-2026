import "./Home.css";
import cube from "../assets/home/cube.png";

function Home() {
  return (
    <div className="home">
      <img src={cube} alt="cube" className="home__cube" />
    </div>
  );
}

export default Home;
