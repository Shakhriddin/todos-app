import {useMemo} from 'react';

// export const useFilter = (todos, {query, status}) => {
//   const searchedItems = query.trim()
//     ? todos.filter(todo => todo.label.toLowerCase().includes(query.toLowerCase()))
//     : todos;
//
//   switch (status) {
//     case 'all':
//       return searchedItems;
//     case 'active':
//       return searchedItems.filter(item => !item.done);
//     case 'done':
//       return searchedItems.filter(item => item.done);
//     default:
//       return searchedItems;
//   }
// };

export const useSearchedTodos = (todos, query) => {
  return useMemo(() => {
    if (query.trim()) {
      return todos.filter(({label}) => label.toLowerCase().includes(query.toLowerCase()));
    }
    return todos;
  }, [query, todos]);
};

export const useFilteredTodos = (todos, {status, query}) => {
  const searched = useSearchedTodos(todos, query);

  return useMemo(() => {
    switch (status) {
      case 'all':
        return searched;
      case 'active':
        return searched.filter(item => !item.done);
      case 'completed':
        return searched.filter(item => item.done);
      default:
        return searched;
    }
  }, [status, searched]);
};