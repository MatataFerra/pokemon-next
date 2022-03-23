import styles from "./pokedex.module.scss";

export const Lights = () => {
  return (
    <div style={{ marginBottom: "1.5rem" }}>
      <div className={styles.lights}>
        <div className={styles.borderBigLights}>
          <div className={styles.bigLightContainer}>
            <div className={styles.bigLight}>
              <div className={styles.bigLightInnerBrigth}></div>
            </div>
          </div>
        </div>
        <div className={styles.smallLight}>
          <div className={styles.smallLightInner}>
            <div className={styles.smallLightInnerBrigth}></div>
          </div>
          <div className={styles.smallLightInner}>
            <div className={styles.smallLightInnerBrigth}></div>
          </div>
          <div className={styles.smallLightInner}>
            <div className={styles.smallLightInnerBrigth}></div>
          </div>
        </div>
      </div>
    </div>
  );
};
