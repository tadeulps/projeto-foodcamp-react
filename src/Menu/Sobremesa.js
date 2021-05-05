import Opcao from "./Opcao"
export default function Sobremesa(){
    const cardapio=[
        {imagem:"pudim",titulo:"pudim",descricao:"pudim de leite",preco:"14,90"},
        {imagem:"pudim",titulo:"pave",descricao:"pave de oreo",preco:"24,90"},
        {imagem:"pudim",titulo:"brownie",descricao:"de café",preco:"34,90"},
        
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