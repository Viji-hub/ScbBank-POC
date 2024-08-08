import { Box } from '@mui/material';
import PropTypes from 'prop-types';
import * as React from 'react';


CustomTabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};


function CustomTabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && <Box sx={{  display: 'flex', pt:2, pb:5 }}>{children}</Box>}
        </div>
    );
}


export default CustomTabPanel;