import { Grid } from '@mui/material';
import * as React from 'react';
import CardComponent from './CardComponent';
import TabCardComponent from './TabCardComponent';


function DashboardBody(props) {
  return (
    <Grid container direction="row"
      justifyContent="flex-start"
      alignItems="flex-start" spacing={0}>
      <div className='wrapper'>
        <CardComponent data={props?.data?.pendingPayment} />
        <hr/>
        <TabCardComponent data={props?.data?.pendingTask} value={props?.data?.pendingTask?.details[0].type} />
      </div>
      <div className='wrapper'>
        <CardComponent data={props?.data?.prioMessage} />
        <hr/>
        <TabCardComponent data={props?.data?.payments} value={props?.data?.payments?.details[0].type} />
      </div>
      <div className='wrapper'>
        <CardComponent data={props?.data?.navigation} />
      </div>
    </Grid>
  );
}


export default DashboardBody;