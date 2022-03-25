import { Type } from "../../interfaces";
import styles from "./pokedex-right-panel.module.scss";
import { FC } from "react";
import { Text, Container, Row, Col, Card } from "@nextui-org/react";

interface RightScreenProps {
  name: string;
  height: number;
  weight: number;
  types?: Type[];
}

export const RightScreen: FC<RightScreenProps> = ({
  name,
  height,
  weight,
  types,
}) => {
  return (
    <div className={styles.screenContainer}>
      {/* <div className={styles.panel}>
        <div className={styles.bright}></div> */}

      <Card className={styles.cardPanel}>
        {types &&
          types.map((type, index) => {
            return (
              <Text key={index} className={styles.type} transform="capitalize">
                Tipos: {type.type.name}
              </Text>
            );
          })}
        <Text className={styles.name} transform="capitalize">
          Nombre: {name}
        </Text>
        <Text className={styles.height}> Altura: {height}</Text>
        <Text className={styles.weight}> Peso: {weight}</Text>
      </Card>
      {/* </div> */}
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
