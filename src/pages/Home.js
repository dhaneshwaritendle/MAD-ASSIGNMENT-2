import React from "react";
import Layout from "./../components/Layout/Layout";
import { Link } from "react-router-dom";
import '../styles/HomeStyles.css'

const Home = () => {
  return (
    <Layout>
      <div className="home" style={{ backgroundImage: `url(http://getwallpapers.com/wallpaper/full/b/f/4/1042345-miami-skyline-wallpaper-2560x1440-for-meizu.jpg)` }}>
        <div className="headerContainer">
          <h1>Mariott</h1>
          <p>Miami , USA</p>
          <Link to="/menu">
            <button>ORDER NOW</button>
          </Link>
        </div>
      </div>
    </Layout>
  );
};

export default Home;
