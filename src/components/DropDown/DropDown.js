import './DropDown.css'

export const DropDown = (props) => {

    
    return (
        //para cada item retorna uma option (item => <option>) 
        // 
        // {props.itens.map(item => <option>{item}</option>)} 
        // ou
        // {props.itens.map(item => {
        //     return <option>{item}</option>
        // })}
        <div className="drop-down">
            <label>{props.label}</label>
            <select 
                onChange={evento => props.aoAlterado(evento.target.value)} 
            >
                {props.itens.map(item => {
                    return <option key={item}>{item}</option>
                })}
            </select>
        </div>
    )
}