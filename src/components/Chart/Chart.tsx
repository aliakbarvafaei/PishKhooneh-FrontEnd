import * as React from 'react';
import Paper from '@mui/material/Paper';
import {
  ArgumentAxis,
  ValueAxis,
  Chart,
  LineSeries,
} from '@devexpress/dx-react-chart-material-ui';

const data = [
  { argument: "1", value: 1000000000 },
  { argument: "2", value: 500000000 },
  { argument: "3", value: 10000000000 },
  { argument: "4", value: 8500000000 },
  { argument: "5", value: 4250000000 },
];

const Chart1:React.FC = () => (
  <Paper className='lg:w-[100%] lgmin:w-[60%]'>
    <Chart
      data={data}
      height={300}
    >
      <ArgumentAxis />
      <ValueAxis position='right'/>

      <LineSeries valueField="value" argumentField="argument" />
    </Chart>
  </Paper>
);

export default Chart1