/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import TableRow from "./TableRow";

type Props = {
  data: any[];
};

const TableBody = (props: Props) => {
  const { data } = props;

  return (
    <tbody>
      {data.map((row, idx) => (
        <TableRow key={idx} rowInfo={row} />
      ))}
    </tbody>
  );
};

export default TableBody;
