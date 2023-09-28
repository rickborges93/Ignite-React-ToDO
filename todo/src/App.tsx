import { Header } from "./components/Header";
import styles from "./App.module.css";
import { PlusCircle } from "phosphor-react";
import { Task } from "./components/Task";

function App() {

  return (
    <>
      <Header />
      <main className={styles.main}>
        <div className={styles.content}>
          <header>
            <input type="text" placeholder="Adicione uma nova tarefa"/>
            <button>Criar <PlusCircle width={18} height={18} /></button>
          </header>
          
          <section className={ styles.section }>
            <div className={ styles.headerSection }>
              <div className={ styles.createdTask }>Tarefas criadas <span>0</span></div>
              <div className={ styles.finishedTask }>Concluídas <span>0 de 0</span></div>
            </div>

            <Task />
            <Task />
            <Task />
            <Task />
          </section>

        </div>
      </main>
    </>
    
  )
}

export default App
