import React from "react";
import styles from "./CustomPagination.module.scss";
import TextField from "@mui/material/TextField";
import classNames from "classnames";
import Pagination from "@mui/material/Pagination";

interface ICustomPaginationProps {
  onChangePage: Function;
  onChangeItemsPerPage: Function;
  currentPage: number;
  paginationCount: number;
  numberPerPage: number;
  className?: string;
}

export const CustomPagination: React.FC<ICustomPaginationProps> = ({
  onChangePage,
  onChangeItemsPerPage,
  paginationCount,
  currentPage,
  numberPerPage,
  className,
}) => {
  return (
    <div className={classNames(styles.root, className)}>
      <Pagination
        page={currentPage}
        count={paginationCount}
        variant="outlined"
        color="primary"
        onChange={(event, number) => {
          window.scrollTo({ top: 0, behavior: "smooth" });
          onChangePage(number);
        }}
      />
      <TextField
        size="small"
        select
        name="type"
        value={numberPerPage}
        onChange={(event) => {
          onChangeItemsPerPage(+event.currentTarget.value);
        }}
        SelectProps={{
          native: true,
        }}
      >
        <option value={12}>12</option>
        <option value={24}>24</option>
        <option value={48}>48</option>
        <option value={96}>96</option>
      </TextField>
    </div>
  );
};
