import Harry from './../images/harry.png';
import Kill from './../images/kill bill.png'
import Clube from './../images/Clube.png'
import Donnie from './../images/Donnie.png'
import Segurando from './../images/Segurando.png'
import Star from './../images/star wars.png'
import Got from './../images/got.png'
import './main.css';
import MegaFilmes from '../MegaFilmes/MegaFilmes';



function Main(){
    const Filmes = [
        {nome: "", imagem:"" , ano:"" }
    ]
    
    const Series = [
        {nome:"" ,imagem:"" , ano:""}
    ]
    return(
        <main>
            <MegaFilmes nome={"Harry Potter e o Cálice de Fogo"} imagem={Harry} ano={2005}/>
            <MegaFilmes nome={"Kill Bill"} imagem={Kill} ano={2003}/>
            <MegaFilmes nome={"Clube da Luta"} imagem={Clube} ano={1999}/>
            <MegaFilmes nome={"Donnie Darko"} imagem={Donnie} ano={2001}/>
            <MegaFilmes nome={"Segurando as Pontas"} imagem={Segurando} ano={2008}/>
            <MegaFilmes nome={"Star Wars"} imagem={Star} ano={2019}/>
        </main>
    )





}

export default Main;