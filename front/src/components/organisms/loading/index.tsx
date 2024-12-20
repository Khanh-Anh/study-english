import styles from './styles.module.css';

function Loading() {
  return (
    <div className={styles.loader_wrapper}>
      <div className={styles.loader}></div>
    </div>
  );
}

export default Loading;
