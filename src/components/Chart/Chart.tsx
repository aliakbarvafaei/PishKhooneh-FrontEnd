import * as React from 'react';
import Paper from '@mui/material/Paper';
import {
  ArgumentAxis,
  ValueAxis,
  Chart,
  LineSeries,
} from '@devexpress/dx-react-chart-material-ui';

const data = [
  { argument: 1, value: 10 },
  { argument: 2, value: 20 },
  { argument: 3, value: 30 },
  { argument: 4, value: 0 },
  { argument: 5, value: 42 },
];

const Chart1:React.FC = () => (
  <Paper className='lg:w-[90%] lgmin:w-[45%] lg:h-[70%]'>
    <Chart
      data={data}
    >
      <ArgumentAxis />
      <ValueAxis />

      <LineSeries valueField="value" argumentField="argument" />
    </Chart>
  </Paper>
);

export default Chart1