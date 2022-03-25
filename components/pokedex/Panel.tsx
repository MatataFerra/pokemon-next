import ArrowSvg from "./ArrowSvg";
import styles from "./pokedex.module.scss";
import { Text } from "@nextui-org/react";
import { FC } from "react";

interface PanelProps {
  handleFav: () => void;
  isInFav: boolean;
}

export const Panel: FC<PanelProps> = ({ handleFav, isInFav }) => {
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
        <div className={styles.bigPanel} onClick={handleFav}>
          <Text className={styles.aFav}>{isInFav ? "Rmv Fav" : "To Fav"}</Text>
        </div>
        <div className={styles.crossKeyboard}>
          <div className={styles.crossButtonWhite}></div>
          <div className={styles.crossButton}>
            <ArrowSvg />
          </div>
          <div className={styles.crossButtonWhite}></div>
          <div className={styles.crossButtonMidle}></div>
          <div className={styles.crossButton}>
            <ArrowSvg style={{ transform: "rotate(270deg)" }} />
          </div>
          <div className={styles.crossButton}></div>
          <div className={styles.crossButton}>
            <ArrowSvg style={{ transform: "rotate(90deg)" }} />
          </div>
          <div className={styles.crossButtonWhite}></div>
          <div className={styles.crossButton}>
            <ArrowSvg style={{ transform: "rotate(180deg)" }} />
          </div>
          <div className={styles.crossButtonWhite}></div>
        </div>
      </div>
    </div>
  );
};
