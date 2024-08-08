import { Grid } from '@mui/material';
import * as React from 'react';
import CardComponent from './CardComponent';
import TabCardComponent from './TabCardComponent';


function DashboardBody(props) {
  return (
    <Grid container direction="row"
      justifyContent="flex-start"
      alignItems="flex-start" spacing={0}>
      <Grid item xs={4}>
        <CardComponent data={props?.data?.pendingPayment} />
        <TabCardComponent data={props?.data?.pendingTask} value={props?.data?.pendingTask?.details[0].type} />
      </Grid>
      <Grid item xs={4}>
        <CardComponent data={props?.data?.prioMessage} />
        <TabCardComponent data={props?.data?.payments} value={props?.data?.payments?.details[0].type} />
      </Grid>
      <Grid item xs={4}>
        <CardComponent data={props?.data?.navigation} />
      </Grid>
    </Grid>
  );
}


export default DashboardBody;