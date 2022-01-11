import React, {createContext, useState}from 'react';
import { v1 as uuid} from 'uuid';

export const TaskListContext = createContext();

const TaskListContextProvider = props => {
  const [tasks, setTasks] = useState([
        {title:'Read the book', id:1},

    ]);

   const [editItem,setEditItem] = useState(null)

const addTask = (title) => {
  setTasks([...tasks, {title,id: uuid()}])
};

const removeTask = id => {
    setTasks(tasks.filter(task => task.id !== id))

};

const clearList = () => {
    setTasks([])
};

const findItem = id => {
  const item = tasks.find(task => task.id === id)

  setEditItem(item)
}
const editTask = (title,id) => {
  const newTasks = tasks.map(task => (task.id === id? {title,id}: task));

  setTasks(newTasks);
}


    return(
      <TaskListContext.Provider value=
      {{tasks,
        addTask,
        removeTask,
        clearList,
        findItem,
        editItem,
      
      }}>
      {props.children}

      
      </TaskListContext.Provider>
    )
};

export default TaskListContextProvider;
