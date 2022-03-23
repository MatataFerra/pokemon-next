import styles from "./pokedex-right-panel.module.scss";

export const RightScreen = () => {
  return (
    <div className={styles.screenContainer}>
      <div className={styles.panel}>
        <div className={styles.bright}></div>
      </div>
      <div className={styles.buttonsContainer}>
        <div className={styles.button}></div>
        <div className={styles.button}></div>
        <div className={styles.button}></div>
        <div className={styles.button}></div>
        <div className={styles.button}></div>
        <div className={styles.button}></div>
        <div className={styles.button}></div>
        <div className={styles.button}></div>
        <div className={styles.button}></div>
        <div className={styles.button}></div>
      </div>
    </div>
  );
};
