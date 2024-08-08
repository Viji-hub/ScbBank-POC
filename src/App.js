import * as React from 'react';
import { getData, getUser, getMenuItem } from './service/_http';
import { Box, Link, ThemeProvider } from '@mui/material';
import CampaignIcon from '@mui/icons-material/Campaign';
import './App.css';
import Header from './Header/Header';
import Dashboard from './Dashboard/Dashboard';
import theme from './styles/overrides/MuiOverrides';

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
    fetchData();
  }, []);

  async function fetchData() {
    try {
      const userdetail = await getUser();
      const dashboardData = await getData(userdetail.data.groupId[0]);
      const menuData = await getMenuItem();
      setUserData(userdetail.data);
      setDashboard(dashboardData.data);
      setMenuItem(menuData.data);

    }
    catch (e) {
      console.log('Failed to fetch data');
    }
  }
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
