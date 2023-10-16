import Harry from "./../images/harry.png";
import Kill from "./../images/kill bill.png";
import Clube from "./../images/Clube.png";
import Donnie from "./../images/Donnie.png";
import Segurando from "./../images/Segurando.png";
import Star from "./../images/star wars.png";
import Got from "./../images/got.png";
import "./main.css";
import MegaFilmes from "../MegaFilmes/MegaFilmes";
import Dexter from "./../images/dexter.png";
import House from "./../images/House.png";
import Motel from "./../images/motel.png";
import Last from "./../images/last.png";
import Walking from "./../images/waking.png";




function Main() {
  const Filmes = [
    { imagem: Harry, nome: "Harry Potter e o Cálice de Fogo", ano: 2005 },
    { imagem: Kill, nome: "Kill Bill", ano: 2003 },
    { imagem: Clube, nome: "Clube da Luta", ano: 1999 },
    { imagem: Donnie, nome: "Donnie Darko", ano: 2005 },
    { imagem: Segurando, nome: "Segurando as Pontas", ano: 2008 },
    { imagem: Star, nome: "Star Wars", ano: 2019 },
  ];

  const Series = [
    { imagem: Dexter, nome: "Dexter", ano: 2006 },
    { imagem: Got, nome: "Game Of Thrones", ano: 2019 },
    { imagem: House, nome: "House of Dragon", ano: 2022 },
    { imagem: Motel, nome: "Motel Bates", ano: 2013 },
    { imagem: Last, nome: "The Last Of Us", ano: 2023 },
    { imagem: Walking, nome: "The Walking Dead", ano: 2010 },
  ];
  return (
    <main>
        <MegaFilmes titulo={Filmes} nomeTitulo="Filmes do Momento" />
        <MegaFilmes titulo={Series} nomeTitulo="Séries do Momento" />
        
    </main>
  );
}

export default Main;
