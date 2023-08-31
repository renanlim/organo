//O banner.js é meu componente
//o index é só o que eu estou exportando
//se tivermos um composição de componentes eu posso escolher qual deles eu vou exportar ou não 

import './Banner.css'

export const Banner = () =>{
    //JSX
    return(
        <header className="banner">
            <img src="/img/banner.png" alt="Banner principal"/>
        </header>
    )
}


//import './Banner.css'

// function Banner() {
//     //JSX
//     return(
//         <header className="banner">
//             <img src="/img/banner.png" alt="Banner principal"/>
//         </header>
//     )
// }

// export default Banner