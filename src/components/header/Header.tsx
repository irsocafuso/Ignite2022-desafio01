import Rocket from '../../assets/rocket.svg'

import styles from './Header.module.css'

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles['header-container']}>
        <img src={Rocket} alt="todo" />
        <p className={styles.title}>
          to
          <span>do</span>
        </p>
      </div>
    </header>
  );
}

export default Header;