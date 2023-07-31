/* eslint-disable @typescript-eslint/no-explicit-any */
import { useRef, useState } from "react";
import { useAppSelector } from "../../stores/hooks";
import style from "./TopReferrallInPieChart.module.css";
import { PieChart, Pie, Cell, ResponsiveContainer, Legend } from "recharts";
import { AiFillCaretLeft, AiFillCaretRight } from "react-icons/ai";

const COLORS = ["#4ea397", "#21c3aa", "#7bd9a5", "#f58db2", "#d0648a"];
const RADIAN = Math.PI / 180;

const CustomLegend = (props) => {
  const { payload } = props;
  const sliderRef: any = useRef(null);
  const [scrollIndex, setScrollIndex] = useState(0);

  const onClickRightButton = () => {
    const itemWidth = sliderRef.current.children[0].offsetWidth + 5;
    const maxScrollIndex = Math.ceil(payload.length / 4) - 1;
    if (scrollIndex < maxScrollIndex) {
      sliderRef.current.scrollLeft += itemWidth;
      setScrollIndex((prevScrollIndex) => prevScrollIndex + 1);
    }
  };

  const onClickLeftButton = () => {
    const itemWidth = sliderRef.current.children[0].offsetWidth + 5;
    if (scrollIndex > 0) {
      sliderRef.current.scrollLeft -= itemWidth;
      setScrollIndex((prevScrollIndex) => prevScrollIndex - 1);
    }
  };

  return (
    <div className={style.sliderContainer}>
      <ul className={style.legendList} ref={sliderRef}>
        {payload.map((legendInfo, index) => (
          <li key={index}>
            <div
              className={style.rectangle}
              style={{ backgroundColor: `${legendInfo.color}` }}
            ></div>
            {legendInfo.value}
          </li>
        ))}
      </ul>
      <div className={style.sliderButtonContainer}>
        <AiFillCaretLeft
          className={style.leftButton}
          onClick={onClickLeftButton}
          color={scrollIndex === 0 ? "grey" : ""}
          disabled={scrollIndex === 0}
        />

        <span>{`${scrollIndex + 1}/${Math.ceil(payload.length / 4)}`}</span>
        <AiFillCaretRight
          className={style.rightButton}
          onClick={onClickRightButton}
          color={scrollIndex >= Math.ceil(payload.length / 4) - 1 ? "grey" : ""}
          disabled={scrollIndex >= Math.ceil(payload.length / 4) - 1}
        />
      </div>
    </div>
  );
};

const renderCustomizedLabel = (props: any) => {
  const { cx, cy, midAngle, outerRadius, fill, name } = props;

  const sin = Math.sin(-RADIAN * midAngle);
  const cos = Math.cos(-RADIAN * midAngle);
  const sx = cx + (outerRadius + 10) * cos;
  const sy = cy + (outerRadius + 10) * sin;
  const mx = cx + (outerRadius + 30) * cos;
  const my = cy + (outerRadius + 30) * sin;
  const ex = mx + (cos >= 0 ? 1 : -1) * 22;
  const ey = my;
  const textAnchor = cos >= 0 ? "start" : "end";

  return (
    <>
      <path
        d={`M${sx},${sy}L${mx},${my}L${ex},${ey}`}
        stroke={fill}
        fill="none"
      />
      <text
        x={ex + (cos >= 0 ? 1 : -1) * 12}
        y={ey}
        textAnchor={textAnchor}
        fontSize={12}
        fill="#333"
      >
        {name}
      </text>
    </>
  );
};

const TopReferralInPieChart = () => {
  const { topFiveReferralData } = useAppSelector(
    (state) => state.userEventInfo
  );

  return (
    <div className={style.wrapper}>
      <div className={style.title}>Top Referral</div>
      <ResponsiveContainer width="100%" height="100%">
        <PieChart width={500} height={500}>
          <Pie
            data={topFiveReferralData}
            cx="50%"
            cy="50%"
            labelLine={true}
            outerRadius={80}
            fill="#8884d8"
            dataKey="value"
            label={renderCustomizedLabel}
            legendType="rect"
          >
            {topFiveReferralData.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>
          <Legend content={<CustomLegend />} />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

export default TopReferralInPieChart;
