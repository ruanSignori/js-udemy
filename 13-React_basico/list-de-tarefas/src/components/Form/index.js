import React from 'react';
import PropTypes from 'prop-types';
import { FaPlus } from 'react-icons/fa';
import './Form.css';

export default function Form({ handleSubmit, handleInput, novaTarefa }) {
  return (
    <form onSubmit={handleSubmit}>
      <input type="text" onChange={handleInput} value={novaTarefa} />
      <button type="submit">
        <FaPlus style={{
          width: '15px',
          height: '15px',
        }} />
      </button>
    </form>
  );
}
/*

  Quando algum campo não é obrigatório, é assim que se declara o seu valor padrão

Form.defaultProps = {
  novaTarefa: '',
};

 */

Form.prototype = {
  handleInput: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  novaTarefa: PropTypes.string.isRequired,
};
