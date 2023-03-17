import React from "react";
import styles from "./PreviewFilter.module.scss";
import Button from "@mui/material/Button";
import { TextField } from "@mui/material";

interface IPreviewFilterProps {
  value: string;
  onChange: Function;
}

export const PreviewFilter: React.FC<IPreviewFilterProps> = ({
  value,
  onChange,
}) => {
  return (
    <div className={styles.root}>
      <TextField
        label="Имя покемона"
        variant="outlined"
        value={value}
        size={"small"}
        onChange={(event) => onChange(event.currentTarget.value)}
      />
      <Button
        onClick={() => onChange("")}
        variant="outlined"
        style={{ height: "40px" }}
      >
        Сбросить
      </Button>
    </div>
  );
};
