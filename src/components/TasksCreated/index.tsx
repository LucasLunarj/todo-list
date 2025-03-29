import { Taskstype } from "../../App";
import { EmptyTasks } from "./components/EmptyTasks";
import { TaskItem } from "./components/TaskItem";
import styles from "./styles.module.css";

type TasksCreatedProps = {
  tasks: Taskstype[];
  selectedItem: (selected: Taskstype) => void;
  removeItem: (taskId: number) => void;
};
export function TasksCreated({tasks, selectedItem, removeItem}: TasksCreatedProps) {
function handleSelection(selected: Taskstype){
  selectedItem(selected)
}

function handleRemoval(id:number){
removeItem(id)
}

const taskAmount = tasks.filter((item) => item.isCompleted === true).length 
  return (
    <main className={styles.container}>
      <div className={styles.taskbar}>
        <div>
          <p>Tarefas Criadas</p>
          <span>{tasks.length}</span>
        </div>
        <div>
          <p>Concluídas</p>
          {tasks.length === 0 && <span>{tasks.length}</span>}
         { tasks.length > 0 && <span>{taskAmount} de {tasks.length}</span>}
        </div>
      </div>
      {
        tasks.length === 0 ? <EmptyTasks /> : 

        tasks.map((item, index) => {
          return (
            <TaskItem key={index} taskInfo={item} taskSelected={handleSelection} taskRemoveId={handleRemoval} />
          );
        })
      }
    </main>
  );
}
