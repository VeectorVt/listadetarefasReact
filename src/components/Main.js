import React, { Component } from "react";

// Form
import { FaPlus } from 'react-icons/fa'

// Tarefas
import { FaEdit, FaWindowClose } from 'react-icons/fa'


import "./Main.css"


export default class Main extends Component {
  // constructor(props){
  //   super(props)

  //   this.state = {
  //     novaTarefa: '',
  //   }

  //   this.inputMudou = this.inputMudou.bind(this)
  // }


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
    } else {
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
  }

  render() {
    const { novaTarefa, tarefas } = this.state


    return (
      <div className="main">
        <h1>Lista de Tarefas</h1>

        <form onSubmit={this.handleSubmit} className="form">
          <input onChange={this.handleChange} value={novaTarefa} type="text" />
          <button type="submit"><FaPlus /></button>

        </form>

        <ul className="tarefas">
          {tarefas.map((tarefa, index) => (
            <li key={index}>
              {tarefa.tarefa}

              <div>
                <FaEdit
                  onClick={(e) => this.handleEdit(e, index)} className="edit" />
                <FaWindowClose
                  onClick={(e) => this.handleDelete(e, index)} className="delete" />
              </div>

            </li>
          ))}

        </ul>

      </div>
    )
  }
}
