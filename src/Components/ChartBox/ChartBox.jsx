import React from "react";
import { Link } from "react-router-dom";
import { ResponsiveContainer } from "recharts";
import { LineChart, Line } from "recharts";
import "./ChartBox.css";

const ChartBox = (props) => {
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
        <div className="charts--wrap">
          <ResponsiveContainer width="99%" height="100%">
            <LineChart width={300} height={100} data={props.chartData}>
              <Line
                type="monotone"
                dataKey={props.dataKey}
                stroke={props.color}
                strokeWidth={2}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
        <div className="text-wrap">
          <span
            className="percentage--wrap"
            style={{ color: props.percentage < 0 ? "limegreen" : "tomato" }}
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
