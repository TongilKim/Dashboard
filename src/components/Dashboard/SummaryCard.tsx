import React, { LegacyRef } from "react";
import style from "./SummaryCard.module.css";
import { TbArrowBigDownFilled, TbArrowBigUpFilled } from "react-icons/tb";

type Props = {
  // key: number;
  title: string;
  sumTitle: string;
  totalNumber: number;
  increaseNumber: string;
};
const SummaryCard = (props: Props) => {
  const { title, sumTitle, totalNumber, increaseNumber } = props;

  const isDownTrend = increaseNumber.includes("-");

  return (
    <div className={style.wrapper}>
      <div className={style.title}>{title}</div>
      <div className={style.sumContainer}>
        <div className={style.sumChip}>SUM</div>
        <div>{sumTitle}</div>
      </div>
      <div className={style.totalNumber}>
        {totalNumber.toLocaleString("ko-KR")}
      </div>
      <div className={isDownTrend ? style.decreased : style.increased}>
        {isDownTrend ? <TbArrowBigDownFilled /> : <TbArrowBigUpFilled />}
        {Number(increaseNumber).toLocaleString("ko-KR")}
      </div>
    </div>
  );
};
export default SummaryCard;
