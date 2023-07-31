/* eslint-disable @typescript-eslint/no-explicit-any */
import TableRow from "./TableRow";
import { useAppSelector } from "../../stores/hooks";

const TableBody = () => {
  const { referralTableData } = useAppSelector((state) => state.userEventInfo);

  return (
    <tbody>
      {referralTableData.map((row, idx) => (
        <TableRow key={idx} rowInfo={row} />
      ))}
    </tbody>
  );
};

export default TableBody;
