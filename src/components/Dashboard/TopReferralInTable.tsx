import style from "./topReferralInTable.module.css";
import TableHeader from "../../common/Table/TableHeader";
import TableBody from "../../common/Table/TableBody";
import { useAppDispatch, useAppSelector } from "../../stores/hooks";
import { LiaSortAmountUpSolid, LiaSortAmountDownSolid } from "react-icons/lia";
import { HiArrowNarrowDown, HiArrowNarrowUp } from "react-icons/hi";
import { useState } from "react";
import {
  sortReferralTableDataByGroups,
  sortReferralTableDataByMetrics,
} from "../../stores/slice/UserEventInfoSlice";

const TopReferralInTable = () => {
  const dispatch = useAppDispatch();
  const [sortGroups, setSortGroups] = useState(false);
  const [sortMetrics, setSortMetrics] = useState(false);

  const onClickSortGroups = () => {
    dispatch(sortReferralTableDataByGroups(sortGroups ? "asc" : "desc"));
    setSortGroups(!sortGroups);
  };

  const onClickSortMetrics = () => {
    dispatch(sortReferralTableDataByMetrics(sortMetrics ? "asc" : "desc"));
    setSortMetrics(!sortMetrics);
  };

  return (
    <div className={style.wrapper}>
      <div className={style.title}>Top Referral</div>
      <div className={style.tableContainer}>
        <table>
          <thead>
            <tr>
              <TableHeader header="GroupBy" />
              <TableHeader header="Metrics" />
            </tr>
          </thead>
          <thead>
            <tr>
              <TableHeader
                header={`Country(IP) > Region(IP) > City(IP)`}
                sortIcon={
                  sortGroups ? (
                    <LiaSortAmountUpSolid
                      size={14}
                      onClick={onClickSortGroups}
                    />
                  ) : (
                    <LiaSortAmountDownSolid
                      size={14}
                      onClick={onClickSortGroups}
                    />
                  )
                }
              />
              <TableHeader
                header={`Sum (Unique Event Count)`}
                sortIcon={
                  sortMetrics ? (
                    <HiArrowNarrowUp onClick={onClickSortMetrics} />
                  ) : (
                    <HiArrowNarrowDown onClick={onClickSortMetrics} />
                  )
                }
              />
            </tr>
          </thead>

          <TableBody />
        </table>
      </div>
    </div>
  );
};

export default TopReferralInTable;
