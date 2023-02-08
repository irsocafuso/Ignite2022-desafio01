import Clipboard from '../../assets/clipboard.svg'

import styles from './TaskList.module.css'

const TaskList = () => {

  return (
    <div className={styles['task-list']}>
      <div className={styles.header}>
        <p className={styles.created}>Tarefas criadas <span className={styles.counter}>0</span></p>
        <p className={styles.done}>Concluídas <span className={styles.counter}>0</span></p>
      </div>
      <div className={styles.body}>
        <div className={styles.empty}>
          <img src={Clipboard} alt="No Tasks" />
          <p>Você ainda não tem tarefas cadastradas <br />
            <span>Crie tarefas e organize seus itens a fazer</span></p>
        </div>
      </div>
    </div>
  );
}

export default TaskList;