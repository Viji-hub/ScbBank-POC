import * as React from 'react';
import { Box, Link, ThemeProvider } from '@mui/material';
import CampaignIcon from '@mui/icons-material/Campaign';
import './App.css';
import Header from './Header/Header';
import Dashboard from './Dashboard/Dashboard';
import theme from './styles/overrides/MuiOverrides';
import { mockData } from './model/staticData';

const defaultUser = {
  "username": "",
  "groupId": [],
  "notificationCount": 0
}

function App() {
  const [userData, setUserData] = React.useState(defaultUser);
  const [menuItem, setMenuItem] = React.useState([]);
  const [dashboard, setDashboard] = React.useState();
  React.useEffect(() => {
    setUserData(mockData.user);
    setDashboard(mockData.dashboard);
    setMenuItem(mockData.menuItem);
  }, []);

  return (
    <div className="app">
      <ThemeProvider theme={theme}>
        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
          <Header user={userData} />
          {menuItem && dashboard && <Dashboard menu={menuItem} dashboard={dashboard} />}
          <Link href="#" underline="none">
            <button className='fb-btn'>
              <CampaignIcon className='fb-icon' /> <span>Give Feedback</span>
            </button>
          </Link>
        </Box>
      </ThemeProvider>
    </div >
  );
}

export default App;
