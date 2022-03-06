import React, {useContext} from 'react';
import {TaskListContext} from '../context/TaskListContext';
import Task from './Task';

const TaskList = ({task}) => {
    const {tasks} = useContext(TaskListContext);
    return (
        <div>
        {tasks.length ? (
            <ul className= "list"> {tasks.map(task => 
                {return <Task task= {task}  key={task.id} />;
            } )}
            
            </ul>
        ) :(
            <div className = "no-tasks">
            <h2>No Tasks</h2>
            </div>
        )}
    

        </div>
        
        
    );
};

export default TaskList


