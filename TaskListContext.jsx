import React, {createContext, useState}from 'react';
import { v1 as uuid} from 'uuid';

export const TaskListContext = createContext();

const TaskListContextProvider = props => {
  const [tasks, setTasks] = useState([
        {title:'Read the book', id:1},

    ]);

const addTask = (title) => {
  setTasks([...tasks, {title,id: uuid()}])
};

const removeTask = id => {
    setTasks(tasks.filter(task => task.id !== id))

};

const clearList = () => {
    setTasks([])
}


    return(
      <TaskListContextProvider value=
      {{tasks,
        addTask,
        removeTask,
      
      }}>
      {props.children}

      
      </TaskListContextProvider>
    )
};

export default TaskListContextProvider;
