import styles from "./pokedex.module.scss";

export const PokeScreen = () => {
  return (
    <div className={styles.mainScreen}>
      <div className={styles.smallLightContainer}>
        <div className={styles.smallLightScreen}></div>
        <div className={styles.smallLightScreen}></div>
      </div>
      <div className={styles.innerScreen}></div>
      <div className={styles.bottomScreen}>
        <div className={styles.bottomLight}>
          <div className={styles.smallLightInnerBrigth}></div>
        </div>
        <div className={styles.hamScreenContainer}>
          <div className={styles.hamScreen}></div>
          <div className={styles.hamScreen}></div>
          <div className={styles.hamScreen}></div>
          <div className={styles.hamScreen}></div>
        </div>
      </div>
    </div>
  );
};
