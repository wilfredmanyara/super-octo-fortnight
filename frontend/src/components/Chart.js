import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import { BarChart, Bar, XAxis, YAxis, Label, ResponsiveContainer } from 'recharts';
import Title from './Title';


export default function Chart(data) {
  const theme = useTheme();

  console.log("DATA IN CHART", data.data)

  return (
    <React.Fragment>
      <Title>Housing Prices</Title>
      <ResponsiveContainer>
        <BarChart
          data={data.data}
          margin={{
            top: 16,
            right: 16,
            bottom: 0,
            left: 24,
          }}
        >
          <XAxis
            dataKey="time"
            stroke={theme.palette.text.secondary}
            style={theme.typography.body2}
          >
            <Label
              position="center"
              style={{
                textAnchor: 'middle',
                fill: theme.palette.text.primary,
                ...theme.typography.body1,
              }}
            >
              Homes In Dataset
            </Label>
            </XAxis>
          <YAxis
            stroke={theme.palette.text.secondary}
            style={theme.typography.body2}
            domain={[0,4000000]}
            tickFormatter={val => val.toLocaleString()}
          >
            <Label
              angle={270}
              position="left"
              style={{
                textAnchor: 'middle',
                fill: theme.palette.text.primary,
                ...theme.typography.body1
              }}
            >
              Price 
            </Label>
          </YAxis>
          <Bar dataKey="price" fill={theme.palette.primary.dark}/>
        </BarChart>
      </ResponsiveContainer>
    </React.Fragment>
  );
}