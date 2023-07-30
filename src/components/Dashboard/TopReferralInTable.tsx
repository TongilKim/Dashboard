import React from "react";
import style from "./topReferralInTable.module.css";
import { MdExpandCircleDown } from "react-icons/md";
import { PiCaretCircleRight } from "react-icons/pi";
import useOpenController from "../../hooks/useOpenController";

const TopReferralInTable = () => {
  const { isOpen, toggle } = useOpenController(false);

  return (
    <div className={style.wrapper}>
      <div className={style.title}>Top Referral</div>
      <div className={style.tableContainer}>
        <table>
          <thead>
            <th style={{ fontWeight: "bold" }}>GroupBy</th>
            <th style={{ fontWeight: "bold" }}>Metrics</th>
          </thead>
          <thead>
            <th>{`Country(IP) > Region(IP) > City(IP)`}</th>
            <th>{`Sum (Unique Event Count)`}</th>
          </thead>

          <tbody>
            <tr>
              <td onClick={toggle}>
                <span>
                  {isOpen ? <PiCaretCircleRight /> : <MdExpandCircleDown />}
                  {`jp(11)`}
                </span>
              </td>
              <td>{`13,031`}</td>
            </tr>

            <tr>
              <td onClick={toggle}>
                <span>
                  {isOpen ? <PiCaretCircleRight /> : <MdExpandCircleDown />}
                  {`us(23)`}
                </span>
              </td>
              <td>{`131`}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TopReferralInTable;
