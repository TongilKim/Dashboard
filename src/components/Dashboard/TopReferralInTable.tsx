import style from "./topReferralInTable.module.css";
import TableHeader from "../../common/Table/TableHeader";
import TableBody from "../../common/Table/TableBody";
import { useAppSelector } from "../../stores/hooks";

const TopReferralInTable = () => {
  const { referralTableData } = useAppSelector((state) => state.userEventInfo);
  console.log(referralTableData);
  return (
    <div className={style.wrapper}>
      <div className={style.title}>Top Referral</div>
      <div className={style.tableContainer}>
        <table>
          <TableHeader headerList={["GroupBy", "Metrics"]} />
          <TableHeader
            headerList={[
              `Country(IP) > Region(IP) > City(IP)`,
              `Sum (Unique Event Count)`,
            ]}
          />
          <TableBody data={referralTableData} />
        </table>
      </div>
    </div>
  );
};

export default TopReferralInTable;
