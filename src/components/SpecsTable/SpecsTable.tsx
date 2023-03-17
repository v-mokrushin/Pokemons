import classNames from "classnames";
import React from "react";
import { IPokemonInfo } from "../../interfaces/pokemons";
import { translateStats } from "../../utils/common";
import Text from "../Wording/Text/Text";
import styles from "./SpecsTable.module.scss";

interface ISpecsTableProps {
  info: IPokemonInfo;
  className?: string;
}

export const SpecsTable: React.FC<ISpecsTableProps> = ({ info, className }) => {
  return (
    <div className={classNames(styles.root, className)}>
      <table className={styles.table}>
        <thead>
          <tr>
            <th>
              <Text noMargin bold>
                Характеристика
              </Text>
            </th>
            <th>
              <Text noMargin bold>
                Значение
              </Text>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <Text size="small" noMargin>
                Вид
              </Text>
            </td>
            <td>
              <Text size="small" noMargin>{`${info.types.join(", ")}`}</Text>
            </td>
          </tr>
          <tr>
            <td>
              <Text size="small" noMargin>
                Способности
              </Text>
            </td>
            <td>
              <Text size="small" noMargin>{`${info.abilities.join(
                ", "
              )}`}</Text>
            </td>
          </tr>
          <tr>
            <td>
              <Text size="small" noMargin>
                Базовый опыт
              </Text>
            </td>
            <td>
              <Text size="small" noMargin>{`${info.base_experience} exp`}</Text>
            </td>
          </tr>
          <tr>
            <td>
              <Text size="small" noMargin>
                Вес
              </Text>
            </td>
            <td>
              <Text size="small" noMargin>{`${info.weight} кг`}</Text>
            </td>
          </tr>
          <tr>
            <td>
              <Text size="small" noMargin>
                Высота
              </Text>
            </td>
            <td>
              <Text size="small" noMargin>{`${info.height / 10} м`}</Text>
            </td>
          </tr>
          {info.stats.map((stat) => (
            <tr key={stat.stat.name}>
              <td>
                <Text size="small" color="gold" noMargin>
                  {translateStats(stat.stat.name)}
                </Text>
              </td>
              <td>
                <Text size="small" noMargin>
                  {stat.base_stat}
                </Text>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
