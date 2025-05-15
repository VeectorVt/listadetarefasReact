import React, { Component } from "react";

import Form from "./Form";
import Tarefas from "./Tarefas";




import "./Main.css"


export default class Main extends Component {

  //   this.state = {
  //     novaTarefa: '',
  //   }

  //   this.inputMudou = this.inputMudou.bind(this)
  // }


  componentDidMount() {
    const tarefas = JSON.parse(localStorage.getItem('tarefas'))
    if (tarefas) {
      this.setState({ tarefas })
    }
  }

  componentDidUpdate(prevProps, prevState) {
    const { tarefas } = this.state

    // if (prevState.tarefas !== tarefas) {
      localStorage.setItem('tarefas', JSON.stringify(tarefas));

      // this.setState({ tarefas })
    // }
  }



  state = {
    isEdit: null,
    novaTarefa: '',
    tarefas: [
      {
        tarefa: 'Estudar React',
        // concluida: false,
      },
      {
        tarefa: 'Estudar Javascript',
        // concluida: false,
      },
      {
        tarefa: 'Estudar CSS',
        // concluida: false,
      },
    ],
  }


  handleChange = (e) => {
    this.setState({ novaTarefa: e.target.value })
  }
  handleSubmit = (e) => {
    e.preventDefault()
    const { isEdit } = this.state
    const { tarefas } = this.state
    let { novaTarefa } = this.state

    novaTarefa = novaTarefa.trim()
    const verify = tarefas.filter(tarefa => tarefa.tarefa === novaTarefa)

    if (isEdit === null) {
      if (verify.length !== 0) return
      if (!novaTarefa) return
      const novaTarefaObj = {
        tarefa: novaTarefa
      }

      const novasTarefas = [...tarefas]

      this.setState({
        tarefas: [...novasTarefas, novaTarefaObj],
        novaTarefa: ''
      })

      // localStorage.setItem('tarefas', JSON.stringify([...novasTarefas, novaTarefaObj]))
    } else {
      // Minha lógica de Editar
      const updatedTarefas = [...tarefas];
      updatedTarefas[isEdit].tarefa = novaTarefa;

      if (!novaTarefa && verify.length !== 0 && verify[0].tarefa !== tarefas[isEdit].tarefa) {
        this.setState({
          novaTarefa: '',
          isEdit: null
        });
        return;
      }

      this.setState({
        tarefas: updatedTarefas,
        novaTarefa: '',
        isEdit: null
      });

      // localStorage.setItem('tarefas', JSON.stringify(updatedTarefas));

    }

  }

  handleEdit = (e, index) => {
    this.state.isEdit = index
    const { tarefas } = this.state
    this.setState({ novaTarefa: tarefas[index].tarefa })

  }

  handleDelete = (e, index) => {
    e.preventDefault()
    const { tarefas } = this.state
    tarefas.splice(index, 1)
    this.setState({ tarefas })

    // localStorage.setItem('tarefas', JSON.stringify(tarefas))
  }

  render() {
    const { novaTarefa, tarefas } = this.state
    // useEffect(() => {
    //   const tarefas = JSON.parse(localStorage.getItem('tarefas'))
    //   if (tarefas) {
    //     this.setState({ tarefas })
    //   }
    // }, [])

    return (
      <div className="main">
        <h1>Lista de Tarefas</h1>

        <Form

          handleSubmit={this.handleSubmit}
          handleChange={this.handleChange}
          tarefa={novaTarefa} />


      <Tarefas 
        tarefas={tarefas}
        handleEdit={this.handleEdit}
        handleDelete={this.handleDelete}
      />
      </div>
    )
  }
}
