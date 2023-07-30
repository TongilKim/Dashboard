import React from "react";
import "./TableHeader.module.css";

type Props = {
  headerList: Array<string>;
};
const TableHeader = (props: Props) => {
  const { headerList } = props;

  return (
    <thead>
      <tr>
        {headerList.map((header, idx) => (
          <th key={idx}>{header}</th>
        ))}
      </tr>
    </thead>
  );
};

export default TableHeader;
