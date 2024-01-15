import { useDispatch } from 'react-redux';
import {removeTodo,toggleComplete} from '../redux/todoSlice'

const TodoItem = ({ id, text, completed }) => {
  const dispatch = useDispatch();

  return (
    <li className='list-group-item d-flex justify-content-between'>
      <div >
      <input
        type='checkbox'
        checked={completed}
        onChange={() => dispatch(toggleComplete({ id }))}
      />
      <span className='ms-2 text-dark fs-5'>{text}</span>
      </div>
      <button className='btn btn-danger' onClick={() => dispatch(removeTodo({id}))}>Delete</button>
    </li>
  );
};

export default TodoItem;
