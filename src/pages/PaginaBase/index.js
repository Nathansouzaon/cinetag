import Cabecalho from "components/Cabecalho";
import FavoritosProvider from "components/Contextos/Favoritos";
import { VideosProvider } from "../../components/Contextos/videos";
import Rodape from "components/Rodape";
import { Outlet } from "react-router-dom";
import Container from "../../components/Container";

function PaginaBase(){
    return(
 <main>
    <Cabecalho/> 
        <Container>
         <VideosProvider>
            <FavoritosProvider>
                <Outlet/>
           </FavoritosProvider>
         </VideosProvider>
        </Container>
    <Rodape/>
 </main>
    )   
}

export default PaginaBase;


/*
<Outlet/> cria uma rota pai e o outlet vai ser todas as rotas filhas que vai ser encaixada dentro dessa rota pai 

criamos uma rota pai que tem tudo aquilo que vai ser compartilhado entre suas rotas filhas e cada rota filha que está sendo renderizada e o outlet

*/