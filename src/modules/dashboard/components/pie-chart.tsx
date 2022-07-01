import { PieChart, Pie, Tooltip } from "recharts";

const data01 = [
  { name: "Group A", value: 400 },
  { name: "Group B", value: 300 },
  { name: "Group C", value: 300 },
  { name: "Group D", value: 200 },
  { name: "Group E", value: 278 },
  { name: "Group F", value: 189 }
];
function ChartSampahOlahan(): JSX.Element {
  return (
    <PieChart 
    width={1000} 
    height={400} 
    margin={{
      top: 5,
      right: 30,
      left: 20,
      bottom: 5
    }}>
      <Pie
        dataKey="value"
        isAnimationActive={false}
        data={data01}
        cx={200}
        cy={200}
        outerRadius={80}
        fill="#8884d8"
        label
      />
      <Tooltip />
    </PieChart>
  );
}

export default ChartSampahOlahan;