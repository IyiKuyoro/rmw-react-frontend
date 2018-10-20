import React from 'react';

// Components
import Header from '../../components/compounds/Header';
import Button from '../../components/atoms/Button';

// Statics
import style from './style.css';

const Landing = () => (
  <div className={style.landing}>
    <Header />
    <div className={style.hero}>
      <h2>Harness the power in kindness</h2>
      <p>We will help you get from where you are to where you need to be.</p>
    </div>
    <Button className={style.btn}>
      FIND A RIDE
    </Button>
  </div>
);

export default Landing;
