import "./megafilmes.css";

function MegaFilmes({ titulo, nomeTitulo}) {
  return (
    <>
     <h1 className="nomeTitulo">{nomeTitulo}</h1>
    <div className="list">

  
        
        {titulo.map((t) => (

          <div>
            <img src={t.imagem}></img>
            
            
            
            <h4>{t.nome}</h4>
            <p>{t.ano}</p>
          </div>
        ))}
        </div>
    </>
  );
}

export default MegaFilmes;
