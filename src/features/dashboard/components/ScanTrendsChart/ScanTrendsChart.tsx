import { Box, Typography } from "@mui/material";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  ResponsiveContainer,
  Tooltip,
} from "recharts";

const data = [
  { date: "1 Mar", value: 300 },
  { date: "7 Mar", value: 420 },
  { date: "14 Mar", value: 350 },
  { date: "21 Mar", value: 500 },
  { date: "28 Mar", value: 370 },
];

export const ScanTrendsChart = () => {
  return (
    <Box
      sx={{
        p: 3,
        borderRadius: "10px",
        border: "1px solid #e0e0e0",
        backgroundColor: "white",
      }}
    >
      <Typography variant="subtitle2" color="text.secondary" mb={1}>
        Daily Scan Count
      </Typography>
      <Typography variant="h6" fontWeight="bold" mb={3}>
        Avg. 350 scans/day
      </Typography>

      <ResponsiveContainer width="100%" height={200}>
        <LineChart data={data}>
          <XAxis dataKey="date" tick={{ fill: "#6b7280" }} />
          <YAxis hide />
          <Tooltip />
          <Line
            type="monotone"
            dataKey="value"
            stroke="#64748B"
            strokeWidth={2}
            dot={false}
          />
        </LineChart>
      </ResponsiveContainer>
    </Box>
  );
};
