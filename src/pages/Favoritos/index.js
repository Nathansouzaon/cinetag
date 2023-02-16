import { useFavoritoContext } from '../../components/Contextos/Favoritos';
import Banner from '../../components/Banner';
import Card from '../../components/Card';
import Titulo from '../../components/Titulo';
import styles from './Favoritos.module.css';

function Favoritos(){
    const { favorito } = useFavoritoContext();

    return(
        <>
            <Banner imagem="favoritos"/>
            <Titulo>
               <h1> Meus favoritos </h1>
            </Titulo>

            <section className={styles.container}>
                {favorito.map((fav) => {
                    return <Card {...fav} key={fav.id}/>
                })}
            </section>
        </>
    )
}


export default Favoritos;