import React, { Fragment } from "react";
import SummaryCard from "../../components/Dashboard/SummaryCard";
import style from "./index.module.css";

const index = () => {
  return (
    <div className={style.wrapper}>
      <SummaryCard
        title="접속유저"
        sumTitle="Unique Event Count"
        totalNumber={18204}
        increaseNumber="-931"
      />
      <SummaryCard
        title="접속횟수"
        sumTitle="Total Event Count"
        totalNumber={796543}
        increaseNumber="1234"
      />
    </div>
  );
};

export default index;
