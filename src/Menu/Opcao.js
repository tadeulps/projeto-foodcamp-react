export default function Opcao(props){
    return(
    <div class="opcao ">
        <img src={`img/${props.imagem}.png`} />
        <div class="titulo">{props.titulo}</div>
        <div class="descricao">{props.descricao}</div>
        <div class="preco">R$ {props.preco}</div>
        <div class="check">
            <ion-icon name="checkmark-circle"></ion-icon>
        </div>
    </div>
    )
}