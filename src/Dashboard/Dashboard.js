import React from 'react';
import { Box, Button } from '@mui/material';
import DashboardBody from './DashboardBody';


function Dashboard({ menu, dashboard }) {
    return (
        <Box
            component="main"
            sx={{
                flexGrow: 1,
                height: '100vh',
                overflow: 'auto',
                paddingTop: '80px',
                paddingLeft: '20px',
                display: 'flex',
                flexDirection: 'column'
            }}
        >
            {menu.length > 0 && menu.map((item) => {
                return <Button variant="contained" size="large" key={item} sx={{
                    width: 'fit-content'
                }}>{item}</Button>
            })}
            <DashboardBody data={dashboard}/>
        </Box>
    )
}

export default Dashboard;