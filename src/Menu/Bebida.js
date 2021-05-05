import Opcao from "./Opcao"
export default function Bebida(){
    const cardapio=[
        {imagem:"coquinha_gelada",titulo:"coca",descricao:"uma coca",preco:"14,90"},
        {imagem:"coquinha_gelada",titulo:"fanta uva",descricao:"lata de fanta",preco:"24,90"},
        {imagem:"coquinha_gelada",titulo:"guarana",descricao:"guarazin",preco:"34,90"},
        
    ]
    return(
        <div class="opcoes bebidas">
        {cardapio.map(t => {
            return(
                
                <Opcao imagem={t.imagem} titulo={t.titulo} descricao={t.descricao} preco={t.preco}/>
      
              
            );
         })}
      </div>
    )
}