import React, { ReactNode } from "react";

import "./TableHeader.module.css";

type Props = {
  header: string;
  sortIcon?: ReactNode;
};
const TableHeader = (props: Props) => {
  const { header, sortIcon } = props;

  return (
    <th>
      <div>
        <span>{header}</span>
        <span>{sortIcon}</span>
      </div>
    </th>
  );
};

export default TableHeader;
