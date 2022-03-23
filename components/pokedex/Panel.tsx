import styles from "./pokedex.module.scss";

export const Panel = () => {
  return (
    <div>
      <div className={styles.firstPanelContainer}>
        <div className={styles.firstPanelButton}></div>
        <div className={styles.firstPanelLights}>
          <div className={styles.firstPanelInnerLight1}></div>
          <div className={styles.firstPanelInnerLight2}></div>
        </div>
      </div>

      <div className={styles.secondPanelContainer}>
        <div className={styles.smallDotsContainer}>
          <div className={styles.smallDots}></div>
          <div className={styles.smallDots}></div>
        </div>
        <div className={styles.bigPanel}></div>
        <div className={styles.crossKeyboard}>
          <div className={styles.crossButtonWhite}></div>
          <div className={styles.crossButton}></div>
          <div className={styles.crossButtonWhite}></div>
          <div className={styles.crossButtonMidle}></div>
          <div className={styles.crossButton}></div>
          <div className={styles.crossButton}></div>
          <div className={styles.crossButton}></div>
          <div className={styles.crossButtonWhite}></div>
          <div className={styles.crossButton}></div>
          <div className={styles.crossButtonWhite}></div>
        </div>
      </div>
    </div>
  );
};
