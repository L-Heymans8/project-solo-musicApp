

import Cercle from '../../components/cercle-musique/cercle';
import Navbar from '../../components/navbar/navbar';
// import style from './home.module.css';
import style from './home.module.css'

const Home = () => {
  return (
    <div className={style.homeGlobal}>
      <Navbar />
      <Cercle />
     
      </div>
  );
};

export default Home;