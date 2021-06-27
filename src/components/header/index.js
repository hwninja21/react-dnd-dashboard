import React from 'react';
// import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Toolbar from '@material-ui/core/Toolbar';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import SettingsIcon from '@material-ui/icons/Settings';
const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
        width: '100%',
        backgroundColor: theme.palette.background.paper,
    }
}));

function TabBar() {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);
    function handleChange(event, newValue) {
        setValue(newValue);
    }
    return (
        <div className={classes.root}>
            <AppBar position="static" color="default" style={{ padding: '5px' }}>
                <Toolbar>
                    <Typography variant="h4" style={{ flexGrow: '1' }}>
                        DATAQ
                    </Typography>
                    <Tabs
                        value={value}
                        onChange={handleChange}
                        indicatorColor="primary"
                        textColor="primary"
                        variant="scrollable"
                        scrollButtons="auto"
                        style={{ flexGrow: '2.5' }}
                    >
                        <Tab label="Dashboard" style={{ fontSize: '16px', flexGrow: '1' }} />
                        <Tab label="Flows" style={{ fontSize: '16px', flexGrow: '1' }} />
                        <Tab label="Executions" style={{ fontSize: '16px', flexGrow: '1' }} />
                        <Tab label="Users" style={{ fontSize: '16px', flexGrow: '1' }} />

                    </Tabs>
                    <IconButton edge="end" color="inherit" style={{ marginRight: '10px' }}>
                        <SettingsIcon style={{ fontSize: '40px' }} />
                    </IconButton>
                    <Avatar alt="Remy Sharp" src="avatar.jpg" style={{ marginRight: '85px' }} />
                </Toolbar>
            </AppBar>
        </div>
    );

}
export default TabBar;