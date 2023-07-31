/* eslint-disable @typescript-eslint/no-explicit-any */
import { formatNumber } from "../../utils/Format";
import { useAppSelector } from "../../stores/hooks";
import style from "./DauChart.module.css";
import {
  ComposedChart,
  Line,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  Brush,
} from "recharts";

const renderCustomLegend = (value: string, entry: any) => {
  const { color } = entry;

  return (
    <span style={{ color }}>
      {value === "pageView" ? "Total Event Count" : "Unique Event Count"}
    </span>
  );
};

const DauChart = () => {
  const { dauChartData } = useAppSelector((state) => state.userEventInfo);

  return (
    <div className={style.wrapper}>
      <div className={style.title}>DAU</div>
      <ResponsiveContainer width="100%" height="100%">
        <ComposedChart
          width={500}
          height={500}
          data={dauChartData}
          margin={{
            top: 100,
            right: 20,
            bottom: 60,
            left: 20,
          }}
        >
          <CartesianGrid stroke="#f5f5f5" />
          <XAxis dataKey="date" scale="band" />
          <YAxis
            dataKey="pageView"
            tickFormatter={(value) => formatNumber(value)}
          />

          <Tooltip />
          <Legend iconSize={20} formatter={renderCustomLegend} />
          <Line
            type="monotone"
            dataKey="uniqView"
            stroke="#58a89d"
            yAxisId="uniqView"
            strokeWidth={2}
          />
          <YAxis yAxisId="uniqView" dataKey="uniqView" orientation="right" />
          <Bar dataKey="pageView" fill="#21c3aa" />
          <Brush dataKey="pageView" y={10} stroke="#0288d1" />
        </ComposedChart>
      </ResponsiveContainer>
    </div>
  );
};

export default DauChart;
