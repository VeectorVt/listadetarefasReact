import React from "react";
import "./tarefas.css"

import { FaEdit, FaWindowClose } from 'react-icons/fa'

import PropTypes from "prop-types";

export default function Tarefas({ tarefas, handleEdit, handleDelete }) {

  return (

    <ul className="tarefas">
      {tarefas.map((tarefa, index) => (
        <li key={index}>
          {tarefa.tarefa}

          <div>
            <FaEdit
              onClick={(e) => handleEdit(e, index)} className="edit" />
            <FaWindowClose
              onClick={(e) => handleDelete(e, index)} className="delete" />
          </div>

        </li>
      ))}

    </ul>
  )
}

Tarefas.PropTypes = {
  tarefas: PropTypes.arrayOf(
    PropTypes.shape({
      tarefa: PropTypes.string.isRequired,
    })
  ).isRequired,
  handleEdit: PropTypes.func.isRequired,
  handleDelete: PropTypes.func.isRequired,
}
