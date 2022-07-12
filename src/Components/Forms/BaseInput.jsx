import React from "react";
import { BaseInputStyled, BaseInputWrapped } from "./styled";
import SearchIcon from "@mui/icons-material/Search";

const BaseInput = () => {
  return (
    <>
      <BaseInputWrapped>
        <SearchIcon className="search__icon" />
        <BaseInputStyled placeholder="Search..." />
      </BaseInputWrapped>
    </>
  );
};

export default BaseInput;
