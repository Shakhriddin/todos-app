import React, {useState} from 'react';
import Greeting from '../Greeting';
import {storage} from '../../utils/storage';
import Header from '../Header';
import TodoList from '../TodoList';
import TodoAdd from '../TodoAdd';
import TodoFilter from '../TodoFilter';
import {useFilteredTodos} from '../../hooks/useFilter';

const App = () => {
  const initialIsAuth = storage('user') ? storage('user').isAuth : false;
  const initialUserName = storage('user') ? storage('user').userName : 'User';

  const [isAuth, setIsAuth] = useState(initialIsAuth);
  const [userName, setUserName] = useState(initialUserName);
  const [todos, setTodos] = useState(storage('todos') || [{
    id: 1,
    label: 'What needs to be done',
    done: false,
  }]);
  const [filter, setFilter] = useState({status: 'all', query: ''});
  const count = {
    done: todos.filter(todo => todo.done).length,
    todo: todos.length - todos.filter(todo => todo.done).length,
  };

  const filteredTodos = useFilteredTodos(todos, filter);

  const updateStore = (array) => {
    setTodos(array);
    storage('todos', array);
  };

  const changeItemStatus = (id) => {
    updateStore(todos.map((todo) => {
      if (todo.id === id) {
        return {
          ...todo,
          done: !todo.done
        };
      }
      return todo;
    }));

  };

  const deleteTodoItem = (id) => {
    updateStore(todos.filter(todo => todo.id !== id));
  };

  const addTodoItem = (label) => {
    updateStore([
      ...todos,
      {
        id: Date.now(),
        label,
        done: false
      }
    ]);
  };

  return (
    <div className="app container">
      {!isAuth && <Greeting
        setIsAuth={setIsAuth}
        setUserName={setUserName}/>
      }
      <Header
        userName={userName}
        count={count}
        setIsAuth={setIsAuth}
        setTodos={setTodos}
      />
      <TodoFilter
        filter={filter}
        setFilter={setFilter}
      />
      <TodoList
        todos={filteredTodos}
        onChangeStatus={changeItemStatus}
        onDelete={deleteTodoItem}
      />
      <TodoAdd onAdd={addTodoItem}/>
    </div>
  );
};

export default App;
