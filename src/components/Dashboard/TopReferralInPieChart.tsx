import style from "./TopReferrallInPieChart.module.css";
import { PieChart, Pie, Cell, ResponsiveContainer, Legend } from "recharts";

const data = [
  { name: "Group A", value: 500 },
  { name: "Group B", value: 400 },
  { name: "Group C", value: 200 },
  { name: "Group D", value: 120 },
  { name: "Group F", value: 60 },
];

const COLORS = ["#4ea397", "#21c3aa", "#7bd9a5", "#f58db2", "#d0648a"];

const TopReferralInPieChart = () => {
  return (
    <div className={style.wrapper}>
      <div className={style.title}>Top Referral</div>
      <ResponsiveContainer width="100%" height="100%">
        <PieChart width={500} height={500}>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            labelLine={true}
            outerRadius={80}
            fill="#8884d8"
            dataKey="value"
            label={true}
            legendType="rect"
          >
            {data.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>
          <Legend />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

export default TopReferralInPieChart;
