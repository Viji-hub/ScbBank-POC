import FilterAltOutlinedIcon from '@mui/icons-material/FilterAltOutlined';
import OpenInFullOutlinedIcon from '@mui/icons-material/OpenInFullOutlined';
import SyncIcon from '@mui/icons-material/Sync';
import { Box, Card, CardContent, CardHeader, Tab, Tabs, Typography } from '@mui/material';
import { BarChart } from '@mui/x-charts/BarChart';
import * as React from 'react';
import Carousel from 'react-material-ui-carousel';
import CustomTabPanel from './CustomTabPanel';

export default function TabCardComponent(props) {
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <Card>
            <CardHeader
                title={props?.data?.value ? props?.data?.value + " " + props?.data?.label.toUpperCase() : props?.data?.label.toUpperCase()}
                avatar={
                    props.data.code === 'payments' && <><FilterAltOutlinedIcon />
                        <OpenInFullOutlinedIcon /></>
                }
            />
            <CardContent>
                <Tabs
                    value={value}
                    onChange={handleChange}
                    textColor="secondary"
                    indicatorColor="secondary"
                    aria-label="wrapped label tabs example"
                >
                    {props?.data?.details?.map((item, index) => (
                        <Tab
                            value={index}
                            label={item.label}
                            wrapped
                        />
                    ))}
                </Tabs>
                {props.data.code === 'pendingTask' && <Carousel>
                    {props?.data?.details?.map((item, index) => (
                        item.details.length > 0 && <CustomTabPanel value={value} index={index}>
                            {
                                item.details && item.details.map((subItem, i) => (
                                    <Box sx={{ padding: '10px' }}>
                                        <Typography variant="h6" color="grey">
                                            <b>{subItem.value}  </b>
                                        </Typography>
                                        <Typography variant="subtitle2" color="grey">
                                            <b>{subItem.type}  </b>
                                        </Typography>
                                        {subItem?.details?.length > 0 && subItem.details.map((val) => (
                                            <Typography variant="subtitle1" color="primary">
                                                {val.value}  {val.code}
                                            </Typography>
                                        ))}
                                    </Box>
                                ))
                            }
                            <Typography variant="body2" color="grey" sx={{ position: 'absolute', bottom: '0' }}>
                                <SyncIcon sx={{ verticalAlign: 'middle' }} />Last updated at {item.lastUpdated}
                            </Typography>
                        </CustomTabPanel>
                    ))}
                </Carousel>}
                {props.data.code === 'payments' &&
                    props?.data?.details?.map((item, index) => (<CustomTabPanel value={value} index={index}>
                        {item.details.length > 0 ?
                            <Box sx={{ padding: '10px' }}>
                                <BarChart
                                    xAxis={[{ scaleType: 'band', colorMap: { type: 'ordinal', colors: ['#3de98d', '#21adfe'] }, data: ['Processed by Bank', 'Rejected by Bank'] }]}
                                    series={[{ data: [25, 14] }]}
                                    width={350}
                                    height={300}
                                    barLabel="value"
                                />
                                <Typography variant="body2" color="grey" sx={{
                                    textAlign: 'left'
                                }} >
                                    <SyncIcon sx={{ verticalAlign: 'middle' }} />Last updated at {item.lastUpdated}
                                </Typography>
                            </Box>

                            : <Box sx={{width: '100%', display: 'flex', justifyContent: 'center'}}>
                                <Typography variant="h6" >
                                    No Data
                                </Typography>

                            </Box>
                        }
                    </CustomTabPanel>))}
            </CardContent>
        </Card>
    );
}