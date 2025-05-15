import React from "react";
import PropTypes from "prop-types";

import "./form.css"
// Form
import { FaPlus } from 'react-icons/fa'

// Componente sem estado é função , apesar que eu acho que não se usa mais classes. e interessante observar a passagem de props em react que é por parâmetros
// props -> props.tarefa , props.handleChange e etc.
export default function Form({ handleSubmit, handleChange, tarefa }) {
  return (
    <form onSubmit={handleSubmit} className="form">
      <input onChange={handleChange} value={tarefa} type="text" />
      <button type="submit"><FaPlus /></button>

    </form>
  )
}
// Quando a props não é required, é interessante colocar um valor padrão para evitar erro
// Form.defaultProps = {
// novaTarefa: '',
// }

Form.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  handleChange: PropTypes.func.isRequired,
  tarefa: PropTypes.string.isRequired,
}
