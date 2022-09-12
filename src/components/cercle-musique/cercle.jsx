import { Link } from 'react-router-dom';
import style from './cercle.module.css'

const Cercle = () => {
    return (

        <article className={style.cercleGlobal} >

            <Link to={'/Musique'}>
                <div className={style.cercle}>
                <p>Musique</p>
            </div>
            </Link>

            <Link to={'/Playlist'}>
            <div className={style.cercle}>
                <p>Playlist</p>
            </div>
            </Link>
            <Link to={'/Favoris'}>
            <div className={style.cercle}>
                <p>Favoris</p>
            </div>
            </Link>
            <Link to={'/Parametres'}>
            <div className={style.cercle}>
                <p>Parametres</p>
            </div>
            </Link>
            <Link to={'/A-propos'}>
            <div className={style.cercle}>
                <p>A propos</p>
            </div>
            </Link>


        </article>

    );
};

export default Cercle;