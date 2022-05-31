import { v4 as uuid } from 'uuid';

export const tasksReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TASK':
      return [
        ...state,
        { category: 'All', title: action.newTask.title, id: uuid() },
      ];
    case 'REMOVE_TASK':
      return state.filter((item) => item.id !== action.id);
    default:
      return state;
  }
};
