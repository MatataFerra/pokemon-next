import { FC } from "react";
import styles from "./pokedex.module.scss";
import { Image } from "@nextui-org/react";

interface PokeScreenProps {
  img: any;
}

export const PokeScreen: FC<PokeScreenProps> = ({ img }) => {
  return (
    <div className={styles.mainScreen}>
      <div className={styles.smallLightContainer}>
        <div className={styles.smallLightScreen}></div>
        <div className={styles.smallLightScreen}></div>
      </div>
      <div className={styles.innerScreen}>
        <Image
          src={img}
          alt="Pokemon"
          width={150}
          height={150}
          objectFit="contain"
          className={styles.pokemonImage}
        />
      </div>
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
