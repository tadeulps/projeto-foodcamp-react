export default function Botao(props){
  const { todosPratos, todasBebidas, todasSobremesas } = props

    if(props.ativador){
        
        return(
       <div class="footer">
       <a href={montarMensagem()} class="fazer-pedido ativo">
         Fechar pedido
       </a>
      </div>)
      }else{
        console.log('deu else')
       return(
       <div class="footer">
         <a href="#" class="fazer-pedido">
           Selecione os 3 itens<br />para fechar o pedido 
         </a>
       </div>
       )}
       function montarMensagem(){
         let total=0
        let mensagem=`Olá, gostaria de fazer o pedido:\n -Prato:`
        todosPratos.forEach(element => {
          mensagem+="\n "+element.nome +" "+ element.contador+"x"
        });
        todosPratos.forEach(element => {
          total+=parseFloat(element.preco)*element.contador
        });
        mensagem+=`\n -Bebida:`
        todasBebidas.forEach(element => {
          mensagem+="\n "+element.nome +" "+ element.contador+"x"
        });
        todasBebidas.forEach(element => {
          total+=parseFloat(element.preco)*element.contador
        });
        mensagem+=`\n -Sobremesa:`
        todasSobremesas.forEach(element => {
          mensagem+="\n "+element.nome +" "+ element.contador+"x"
        });
        todasSobremesas.forEach(element => {
          total+=parseFloat(element.preco)*element.contador
        });
        mensagem+=`\n -Total:R$`+total
       
        const mensagemFormatada = encodeURIComponent(mensagem);
        console.log(total)
        const url = "https://wa.me/5521999998844?text=" + mensagemFormatada;
        return url
    }
    

       
}
/*const precoTotal = precoPrato + precoBebida + precoSobremesa;
        const mensagem = "Olá, gostaria de fazer o pedido:\n- Prato: " + 
        prato + "\n- Bebida: " + bebida + "\n- Sobremesa: " + sobremesa + "\nTotal: R$ " + precoTotal.toFixed(2);
        const mensagemFormatada = encodeURIComponent(mensagem);

        const url = "https://wa.me/5521999998844?text=" + mensagemFormatada;
        botao.setAttribute("href", url);
    todosPratos={props.todosPratos} 
    todasBebidas={props.todasBebidas} 
    todasSobremesas={props.todasSobremesas}
        */

