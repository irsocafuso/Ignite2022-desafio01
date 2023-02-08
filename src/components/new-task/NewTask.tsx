import Plus from '../../assets/plus.svg'

import styles from './NewTask.module.css'

const NewTask = () => {
  return (
    <div className={styles['new-task']}>
      <input type="text" placeholder='Adicione uma nova tarefa' name="" id="" />
      <button type="button" className={styles['create-button']}>Criar <img src={Plus} alt="plus" /></button>
    </div>
  );
}

export default NewTask;