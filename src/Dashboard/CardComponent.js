import { Box, Divider, Link } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import Typography from '@mui/material/Typography';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import * as React from 'react';


export default function CardComponent(props) {
    return (
        <Card>
            <CardHeader
                title={props?.data?.label.toUpperCase()}
            />
            <CardContent>
                {
                    props?.data?.code === 'ppa' && props?.data?.details?.map((item) => <Box>
                        <Typography variant="body1" color="primary">
                            <b>{item.label}</b> | {item.message}
                        </Typography>
                        <Typography variant="h6" color="grey">
                            {item.subLabel}
                        </Typography>
                    </Box>)
                }
                {props?.data?.code === 'navigation' && props?.data?.details?.map((item) => (
                    <>
                        <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', paddingTop: '5px' }}>
                            <Box>
                                <Typography variant="body1" color="primary">
                                    <Link href="#" underline="none">{item.label}</Link>
                                </Typography>
                                <Typography paragraph color="grey" sx={{ fontSize: '10px' }}>
                                    {item.subLabel}
                                </Typography>
                            </Box>
                            <Box sx={{ alignSelf: 'center', padding: '15px' }}>
                                <Link href="#" underline="none">
                                    <InfoOutlinedIcon sx={{ fontSize: 'large', color: '#1976d2' }} />
                                </Link>
                            </Box>
                        </Box>
                        {props?.data?.details?.length > 1 && <Divider />}
                    </>
                ))}
                {props?.data?.code === 'message' && props?.data?.details?.map((item) => (
                    <>
                        <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', paddingTop: '5px' }}>
                            <Typography paragraph color="grey" sx={{ fontSize: 'large' }}>
                                {item.label}
                            </Typography>
                            <Typography paragraph sx={{ fontSize: 'large' }}>
                                <Link href="#" underline="always">
                                    {item.message}
                                </Link>
                            </Typography>
                        </Box>
                    </>
                ))}
            </CardContent>
        </Card>
    );
}