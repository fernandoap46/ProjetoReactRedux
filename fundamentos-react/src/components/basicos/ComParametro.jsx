export default function ComParametro(props){
    const status = props.nota >= 7 ? 'Aprovado' : 'Recuperação'
    return(
        <div>
            <h2>{props.titulo}</h2>
            <strong>{props.aluno} </strong>
            tem nota
            <strong> {props.nota} </strong>
            está 
            <strong> { status}</strong>
        </div>
    )
}