import styles from './styles.module.css';

function Spinner() {
  return (
    <div className={styles.loader_wrapper}>
      <div className={styles.loader}></div>
    </div>
  );
}

export default Spinner;
