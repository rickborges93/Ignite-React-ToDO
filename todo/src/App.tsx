import { useState, FormEvent } from 'react';
import { v4 as uuidv4 } from 'uuid';

import { Header } from "./components/Header";
import styles from "./App.module.css";
import { PlusCircle } from "phosphor-react";
import { Task } from "./components/Task";
import { EmptyList } from './components/EmptyList';

interface TaskProps {
  id: string;
  content: string;
  checked: boolean;
}

function App() {

  const [inputTask, setInputTask] = useState('');
  const [tasks, setTasks] = useState<TaskProps[]>([]);

  function feedInputTask (event: React.ChangeEvent<HTMLInputElement>) {
    setInputTask(event.target.value);
  }

  function handleAddNewTask (event: FormEvent) {
    event.preventDefault()

    setTasks([...tasks, {
      id: uuidv4(),
      content: inputTask,
      checked: false
    }]);

    setInputTask('');
  }

  function handleRemoveTask (id: string) {
    const newArrayOfTasks = tasks.filter(task => task.id !== id);
    setTasks(newArrayOfTasks);
  }

  function handleCheckTask (id: string) {
    const newArrayOfTasks: TaskProps[] = [];
    tasks.map(task => {
      newArrayOfTasks.push({
        id: task.id,
        content: task.content,
        checked: task.id === id ? !task.checked : task.checked
      })
    });
    setTasks(newArrayOfTasks);
  }

  const amountTasks = tasks.length;

  const amountSelectedTasks = tasks.reduce((sum, task) => {
    if (task.checked)
      return sum + 1
    return sum;
  }, 0);

  const isNewTaskInputEmpty = inputTask.length === 0; 

  return (
    <>
      <Header />
      <main className={styles.main}>
        <div className={styles.content}>
          <form className={styles.newTaskForm} onSubmit={handleAddNewTask}>
            <input type="text" placeholder="Adicione uma nova tarefa" value={inputTask} onChange={feedInputTask} required />
            <button type='submit'disabled={isNewTaskInputEmpty}>Criar <PlusCircle width={18} height={18} /></button>
          </form>
          
          <section className={ styles.section }>
            <div className={ styles.headerSection }>
              <div className={ styles.createdTask }>Tarefas criadas <span>{amountTasks}</span></div>
              <div className={ styles.finishedTask }>Concluídas <span>{amountSelectedTasks} de {amountTasks}</span></div>
            </div>

            {
              tasks.length === 0 ?
              <EmptyList />
              :
              <>
                {tasks.map((task) => {
                  return (
                    <Task 
                      key={ task.id } 
                      id={ task.id } 
                      content={task.content} 
                      isChecked={task.checked} 
                      handleRemoveTask={handleRemoveTask} 
                      handleCheckTask={handleCheckTask} 
                    />)
                })}
              </>
              
            }
          </section>

        </div>
      </main>
    </>
    
  )
}

export default App
