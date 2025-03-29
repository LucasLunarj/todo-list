import { useState } from "react";
import styles from "./styles.module.css";

import plus from "../../assets/add-sign.svg"

type TaskAddInputAreaProps = React.ComponentProps<'button'> & {
    addTask: (task: string) => void;
}

export function TaskAddInputArea({addTask}: TaskAddInputAreaProps) {
    const [task, setTask] = useState("");
    function handleClick(){
        if(task.length === 0) return;
        addTask(task)
        setTask('')
    }
    return(
        <div className={styles.container}>
            <input type="text" placeholder="Adicione uma nova tarefa" value={task} onChange={(e) => setTask(e.target.value)}/>
            <button onClick={handleClick }>Criar <img src={plus} alt="sinal de adicionar"  /> </button>
        </div>
    )
}   