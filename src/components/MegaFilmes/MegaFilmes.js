import Harry from '../../components/images/kill bill.png'



function MegaFilmes({nome, imagem, ano}){
    return(
        <>
        <h1>Filmes</h1>
        <div className='div-exibe'>
            












            <img className='exibe.img' src={imagem} alt={nome} year={ano}/>
            <h1> {nome}</h1>
            <p> {ano}</p>
        </div>    
        </>
    )

}



export default MegaFilmes;
