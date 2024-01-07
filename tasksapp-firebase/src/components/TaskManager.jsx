import React, { useEffect, useState } from 'react'
import { db } from '../firebase'
import { collection, addDoc, getDocs, deleteDoc, doc } from "firebase/firestore"; // importamos la funcion para agregar documentos a la base de datos
import Task from './Task.jsx';

export function TaskManager() {

    useEffect(() => {
        return () => {
          getTasks();
        }
      }, [])
      
    const originTaskData = {
        task: '',
        description: ''
    }
    const [taskData, setTaskData] = useState(originTaskData);
    const [taskList, setTaskList] = useState([]);
    const [loading, setLoading] = useState(true);

    const handleInputChange = (e) => {
        setTaskData({
            ...taskData,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        saveTask(taskData);
        setTaskData(originTaskData)
    }

    const saveTask = async (task) => {
        console.log(task)
        try {
            const docRef = await addDoc(collection(db, "tasks"), {
                task: task.task,
                description: task.description,
            });
            console.log("Document written with ID: ", docRef.id);
            alert("Task saved");
          } catch (e) {
            console.error("Error adding document: ", e);
          }
    }

    const getTasks = async () => {
        const querySnapshot = await getDocs(collection(db, "tasks"));
        querySnapshot.forEach((doc) => {
            const dataWithId = {
                id: doc.id,
                ...doc.data()
            }
            taskList.push(dataWithId);
        });
        setLoading(false)
    }

    const deleteTask = async (id) => {
        await deleteDoc(doc(db, "tasks", id));
        window.location.reload();
    }

  return (
    <div className='task-manager-container'>
        <form className='task-manager-form'>
            <h1>Task Manager</h1>
            <input type="text" name="task" id="task" placeholder='New Task' value={taskData.task} onChange={handleInputChange}/>
            <input type="text" name="description" id="description" value={taskData.description} placeholder='Description' onChange={handleInputChange}/>
            <button type="submit" onClick={handleSubmit}>Guardar</button>
        </form>
        <div>
            {loading ? (<p></p>) : taskList.map((task) => (<Task id={task.id} key={task.id} task={task.task} description={task.description} deleteTask={deleteTask}/>  ))}
        </div>
    </div>
  )
}
