import { useState } from "react";
import { Header } from "./components/Header";
import { TaskAddInputArea } from "./components/TaskAddInputArea";
import { TasksCreated } from "./components/TasksCreated";
export type Taskstype = {
  id: number;
  task: string;
  isCompleted: boolean;
};
export function App() {
  const [taskList, setTaskList] = useState<Taskstype[]>([]);
  function HandleAddTask(task: string) {
    setTaskList((prevState) => [
      ...prevState,
      { id: Math.random() * 6, task: task, isCompleted: false },
    ]);
  }

  function HandleTaskSelection(item: Taskstype) {
    setTaskList((prevState) => prevState.map(element => item.id === element.id ? {...element, isCompleted: !element.isCompleted} : element))
  }

  function handleRemoveTask(taskId: number) {
    setTaskList((prevState) => prevState.filter( element => element.id !== taskId) )
  }
  return (
    <div>
      <Header />
      <TaskAddInputArea addTask={HandleAddTask} />
      <TasksCreated tasks={taskList} selectedItem={HandleTaskSelection} removeItem={handleRemoveTask} />
    </div>
  );
}
