import { useState } from "react";
import Button from "../Button";
import DropDown from "../DropDown";
import TextField from "../TextField";
import "./Forms.css";

export const Forms = () => {
  const times = [
    'Programação',
    'Front-End',
    'Data Science',
    'Devops',
    'Ux e Design',
    'Mobile',
    'Inovação e Gestão'
  ]

  const [nome, setNome] = useState('')
  const [cargo, setCargo] = useState('')
  const [imagem, setImagem] = useState('')
  const [time, setTime] = useState('')


  const aoSalvar = (evento) =>{
    evento.preventDefault()
    console.log('Form foi submetido', nome, cargo, imagem, time)
  }

  return (
    <section className="formulario">
      <form onSubmit={aoSalvar} >
        <h2>Preencha os dados para criar o card do colaborador</h2>
        <TextField 
          obrigatorio={true} 
          label="Nome" 
          placeholder="Digite seu nome" 
          valor={nome}
          aoAlterado={valor => setNome(valor)}
        />
        <TextField 
          obrigatorio={true} 
          label="Cargo" 
          placeholder="Digite seu cargo"
          valor={cargo}
          aoAlterado={valor => setCargo(valor)}
        />
        <TextField 
          label="Imagem" 
          placeholder="Informe o endereço da imagem" 
          valor={imagem}
          aoAlterado={valor => setImagem(valor)}
        />
        <DropDown 
          obrigatorio={true} 
          label="Time" 
          itens={times}
          valor={time}
          aoAlterado={valor => setTime(valor)}
        />
        <Button>
          Criar Card
        </Button>
      </form>
    </section>
  );
};
