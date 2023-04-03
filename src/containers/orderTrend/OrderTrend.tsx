import React from 'react';
import Statistics from '../../components/Statistics';
import Compare from '../../components/Compare';
import '../../shared/css/NavBar.css';
import {Box,Tab,Tabs,Typography} from '@mui/material';
import { ORDER_TREND_BOX } from '../../shared/styledComponents/orderTrendComponents';


const OrderTrend = () => {

    interface TabPanelProps {
        children?: React.ReactNode;
        index: number;
        value: number;
    }

    function TabPanel(props: TabPanelProps) {
        const { children, value, index, ...other } = props;
        return (
            <div
                role="tabpanel"
                hidden={value !== index}
                id={`simple-tabpanel-${index}`}
                aria-labelledby={`simple-tab-${index}`}
                {...other}
                style={{ width: '100%', alignItems: 'center' }}
            >
                {value === index && (
                    <Box sx={{ p: 3 }}>
                        <Typography>{children}</Typography>
                    </Box>
                )}
            </div>
        );
    }

    const [value, setValue] = React.useState(0);

    function a11yProps(index: number) {
        return {
            id: `simple-tab-${index}`,
            'aria-controls': `simple-tabpanel-${index}`,
        };
    }

    const handleChange = (event: React.SyntheticEvent, newValue: number) => setValue(newValue);


    return (
        <ORDER_TREND_BOX>
             <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                <Tabs value={value} onChange={handleChange}>
                    <Tab label="Statistics" {...a11yProps(0)} />
                    <Tab label="Compare" {...a11yProps(1)} />
                </Tabs>
            </Box>
            <TabPanel value={value} index={0} >
                <Statistics />
            </TabPanel>
            <TabPanel value={value} index={1}>
                <Compare />
            </TabPanel>
        </ORDER_TREND_BOX>
    )
}

export default OrderTrend;

