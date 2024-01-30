import React from "react";
import classes from './Home.module.css'
const Home = () => {
  return (
    <section className={classes.home} id="home">
      <div className={classes.home_content}>
        <h2>accelerating agribusiness & markets</h2>
        <h4>
          we facilitate market linkages across different levels of the value
          chain to enhance agriculture trade.
        </h4>
        <a href="#" className="btn home_btn">
          learn more
        </a>
      </div>
    </section>
  );
};

export default Home;
