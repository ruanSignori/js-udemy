import React from 'react';
import PropTypes from 'prop-types';
import { IoMdCloseCircle } from 'react-icons/io';
import { AiOutlineEdit } from 'react-icons/ai';
import './Tarefas.css';

export default function Tarefas({ tarefas, handleEdit, handleDelete }) {
  return (
    <ul className="tarefas">
      {tarefas.map((tarefa, index) => (

        <li key={tarefa}>
          <span className="ident-tarefa"></span>
          <div className="tarefa-value">
            {tarefa}
          </div>
          <div className="tarefa-items">
            <AiOutlineEdit
              className="edit buttons-tarefas"
              onClick={(e) => handleEdit(e, index)}
            />

            <IoMdCloseCircle
              className="delete buttons-tarefas"
              onClick={(e) => handleDelete(e, index)}
            />
          </div>
        </li>
      ))}
    </ul>
  );
}

Tarefas.prototype = {
  tarefas: PropTypes.array.isRequired,
  handleEdit: PropTypes.func.isRequired,
  handleDelete: PropTypes.func.isRequired,
};
