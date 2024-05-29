import React from "react";
import "./ChartBox.css";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { Link } from "react-router-dom";

const ChartBox = (props) => {
  const data = [
    {
      name: "Page A",
      uv: 4000,
      pv: 2400,
      amt: 2400,
    },
    {
      name: "Page B",
      uv: 3000,
      pv: 1398,
      amt: 2210,
    },
    {
      name: "Page C",
      uv: 2000,
      pv: 9800,
      amt: 2290,
    },
    {
      name: "Page D",
      uv: 2780,
      pv: 3908,
      amt: 2000,
    },
    {
      name: "Page E",
      uv: 1890,
      pv: 4800,
      amt: 2181,
    },
    {
      name: "Page F",
      uv: 2390,
      pv: 3800,
      amt: 2500,
    },
    {
      name: "Page G",
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
  ];

  return (
    <div className="chart--box">
      <div className="chart--container">
        <div className="container--wrap">
          <img src={props.icon} alt="Icon" />
          <span className="box--wrap">{props.title}</span>
        </div>

        <h1>{props.number}</h1>
        <Link to="/" className="viewAll-wrap">
          View All
        </Link>
      </div>
      <div className="chart--Info">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart width={300} height={100} data={data}>
            <Line
              type="monotone"
              dataKey="pv"
              stroke={props.percentage > 0 ? "#7FFFD4" : " #FF5733 "}
              strokeWidth={2}
            />
          </LineChart>
        </ResponsiveContainer>

        <div className="text-wrap">
          <span
            className="percentage--wrap"
            style={{ color: props.percentage > 0 ? "#7FFFD4" : "#FF5733 " }}
          >
            {props.percentage}%
          </span>
          <span className="duration--wrap">last month</span>
        </div>
      </div>
    </div>
  );
};

export default ChartBox;
