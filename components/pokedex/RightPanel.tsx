import styles from "./pokedex-right-panel.module.scss";

export const RightPanel = () => {
  return (
    <div style={{ marginBottom: "1.5rem" }}>
      <div className={styles.container}>
        <div className={styles.first}></div>
        <div className={styles.middle}></div>
        <div className={styles.last}></div>
      </div>
    </div>
  );
};
