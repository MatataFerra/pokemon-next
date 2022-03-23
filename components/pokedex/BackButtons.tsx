import styles from "./pokedex-right-panel.module.scss";

export const BackButtons = () => {
  return (
    <div className={styles.backButtonsContainer}>
      <div className={styles.leftButtonsContainer}>
        <div className={styles.redDotsContainer}>
          <div className={styles.redDot}></div>
          <div className={styles.redDot}></div>
        </div>

        <div className={styles.whiteButtonsContainer}>
          <div className={styles.whiteButton}></div>
          <div className={styles.whiteButton}></div>
        </div>
      </div>

      <div className={styles.rightButtonsContainer}>
        <div className={styles.largeButtonsContainer}>
          <div className={styles.largeButton}></div>
          <div className={styles.largeButton}></div>
        </div>

        <div className={styles.yellowButton}>
          <div className={styles.innerBrigth}></div>
        </div>
      </div>

      <div className={styles.bottomButton}></div>
      <div className={styles.bottomButton}></div>
      {/* <div className={styles.bottomButtonsContainer}>
      </div> */}
    </div>
  );
};
