import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend
} from "recharts";

const data = [
  {
    name: "1 Jun 2022",
    uv: 4000,
    amt: 2400
  },
  {
    name: "2 Jun 2022",
    uv: 3000,
    amt: 2210
  },
  {
    name: "3 Jun 2022",
    uv: 2000,
    amt: 2290
  },
  {
    name: "4 Jun 2022",
    uv: 2780,
    amt: 2000
  },
  {
    name: "5 Jun 2022",
    uv: 1890,
    amt: 2181
  },
  {
    name: "6 Jun 2022",
    uv: 2390,
    amt: 2500
  },
  {
    name: "7 Jun 2022",
    uv: 3490,
    amt: 2100
  }
];

function ChartTotalSampah(): JSX.Element {
  return (
    <LineChart
      width={1000}
      height={400}
      data={data}
      margin={{
        top: 5,
        right: 30,
        left: 20,
        bottom: 5
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
    </LineChart>
  );
}

export default ChartTotalSampah;