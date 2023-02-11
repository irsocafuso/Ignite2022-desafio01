import { useCallback } from 'react';
import Clipboard from '../../assets/clipboard.svg'
import Trash from '../../assets/trash.svg'

import styles from './TaskList.module.css'

const TaskList = () => {
  const test = false;

  const renderTaskList = useCallback(() => {
    if (test) {
      return (
        <div className={styles.empty}>
          <img src={Clipboard} alt="No Tasks" />
          <p>Você ainda não tem tarefas cadastradas <br />
            <span>Crie tarefas e organize seus itens a fazer</span></p>
        </div>
      )
    }

    return (
      <li className={styles.list}>
        <ul className={styles['task-list']}>
          <div className={styles['task-checkbox']}>
            <input type="checkbox" id='task-checkbox' />
            <label htmlFor="task-checkbox"></label>
          </div>

          <p>Teste</p>
          <img src={Trash} alt="No Tasks" />
        </ul>
        <ul className={styles['task-list']}>
          <div className={styles['task-checkbox']}>
            <input type="checkbox" id='task-checkbox' />
            <label htmlFor="task-checkbox"></label>
          </div>
          <p>Teste</p>
          <img src={Trash} alt="No Tasks" />
        </ul>
      </li>
    )

  }, [test])

  return (
    <div className={styles['task-list']}>
      <div className={styles.header}>
        <p className={styles.created}>Tarefas criadas <span className={styles.counter}>0</span></p>
        <p className={styles.done}>Concluídas <span className={styles.counter}>0</span></p>
      </div>
      <div className={styles.body}>
        {renderTaskList()}
      </div>
    </div>
  );
}

export default TaskList;