
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import MenuIcon from '@mui/icons-material/Menu';
import NotificationsIcon from '@mui/icons-material/Notifications';
import PowerSettingsNewRoundedIcon from '@mui/icons-material/PowerSettingsNewRounded';
import { AppBar, Badge, Box, IconButton, InputBase, MenuItem, Select, Toolbar, Typography, styled } from '@mui/material';
import * as React from 'react';

const BootstrapInput = styled(InputBase)(({ theme }) => ({
    'label + &': {
        marginTop: theme.spacing(3),
    },
    '& .MuiInputBase-input': {
        position: 'relative',
        backgroundColor: 'transperent',
        border: 'none',
        fontSize: 20,
        padding: '15px 26px 10px 10px',
        color: 'white',
        width: 'auto'
    },
    '& .MuiSvgIcon-root': {
        color: 'white'
    }
}));

let HeaderComponent = ({user}) => {
    const handleChange = (event) => {
        console.log(user.groupId[event.target.value])
    };
    return (
        <>
            <AppBar position="absolute" sx={{
                flexDirection: "row"
            }}>
                <Toolbar sx={{ width: "100%" }}
                >
                    <IconButton
                        edge="start"
                        color="inherit"
                        aria-label="open drawer"
                        sx={{
                            marginRight: '10px'
                        }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography
                        component="h1"
                        variant="h6"
                        color="inherit"
                        sx={{
                            maxWidth: "60px", display: {
                                xs: "none",
                                sm: "block"
                            }
                        }}
                    >
                        Menu

                    </Typography>
                    <HomeOutlinedIcon fontSize='large' sx={{
                        verticalAlign: "middle",
                        paddingLeft: "5px",
                        display: {
                            xs: "none",
                            sm: "block"
                        }
                    }} />
                    <Typography
                        component="h1"
                        variant="h6"
                        color="inherit"
                        sx={{
                            maxWidth: "max-content", paddingLeft: "10px", paddingTop: "5px", display: {
                                xs: "none",
                                sm: "block"
                            }
                        }}
                    >
                        Straight2Bank
                    </Typography>
                    <Box 
                        component={'img'}
                        src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzrVs9CbrgLcPOpCpXIkgQwZ2TBd5IbkEf1A&usqp=CAU'
                        alt={'bank-logo'}
                        style={{
                            width: '50px',
                            mixBlendMode : 'multiply'
                        }}
                        sx={{
                            display: {
                                xs: "none",
                                sm: "block"
                            }
                        }}
                    />
                    <Typography
                        component="h1"
                        variant="h6"
                        color="inherit"

                        sx={{
                            padding: "0px 10px", marginLeft: "10px", maxWidth: "max-content", borderRadius: '50%', border: "2px solid white", display: {
                                xs: "none",
                                sm: "block"
                            }
                        }}
                    >
                        {user.username.split('')[0]}
                    </Typography>

                    <Typography
                        component="h5"
                        variant="h6"
                        color="inherit"

                        sx={{
                            padding: "0px 10px", marginLeft: "10px", maxWidth: "max-content", display: {
                                xs: "none",
                                sm: "block"
                            }
                        }}
                    >
                        <span> Welcome</span> <br />{user.username}
                    </Typography>
                    <Typography sx={{
                        display: {
                            xs: "none",
                            sm: "block"
                        }
                    }}>
                        GroupID:
                    </Typography>
                    <Select
                        labelId="demo-customized-select-label"
                        defaultValue={0}
                        id="demo-customized-select"
                        onChange={handleChange}
                        input={<BootstrapInput />}
                        sx={{
                            display: {
                                xs: "none",
                                sm: "block"
                            }
                        }}
                    >
                        {user.groupId.map((item, index) =>
                            <MenuItem value={index} key={index}>{item}</MenuItem>
                        )}
                    </Select>
                </Toolbar>
                <Toolbar edge="end" sx={{
                    display: {
                        xs: "none",
                        sm: "flex"
                    }
                }}
                >
                    <IconButton color="inherit">
                        <Badge badgeContent={user.notificationCount} color="error">
                            <NotificationsIcon />
                        </Badge>
                    </IconButton>
                    <IconButton color="inherit" sx={{ marginLeft: "10px" }}>

                        <PowerSettingsNewRoundedIcon />
                    </IconButton>
                    <Typography
                        component="h1"
                        variant="h6"
                        color="inherit"

                        sx={{ maxWidth: "max-content" }}
                    >
                        Logout

                    </Typography>
                </Toolbar>
            </AppBar>
        </>
    )

};
export default HeaderComponent;