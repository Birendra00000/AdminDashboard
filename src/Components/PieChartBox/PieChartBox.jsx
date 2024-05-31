import React, { PureComponent } from "react";
import { PieChart, Pie, Sector, Cell, ResponsiveContainer } from "recharts";
import "./PieChartBox.css";
const data = [
  { title: "Mobile", value: 400, color: "#0088FE" },
  { title: "Desktop", value: 300, color: "#00C49F" },
  { title: "Laptop", value: 300, color: "#FFBB28" },
  { title: "Tablet", value: 200, color: "#FF8042" },
];

const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({
  cx,
  cy,
  midAngle,
  innerRadius,
  outerRadius,
  percent,
  index,
}) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text
      x={x}
      y={y}
      fill="white"
      textAnchor={x > cx ? "start" : "end"}
      dominantBaseline="central"
    >
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};

const PieChartBox = () => {
  return (
    <>
      <div className="pie-wrapper">
        <h3>Leads By Source</h3>
        <ResponsiveContainer width="100%" height="100%">
          <PieChart width={600} height={600}>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              labelLine={false}
              label={renderCustomizedLabel}
              outerRadius={80}
              fill="#8884d8"
              dataKey="value"
            >
              {data.map((entry, index) => (
                <Cell key={index} fill={entry.color} />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
        <div>
          {data.map((item, index) => (
            <div key={index} className="container">
              <div
                className="dot"
                style={{ backgroundColor: item.color }}
              ></div>
              <div className="title">
                <p>{item.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default PieChartBox;
