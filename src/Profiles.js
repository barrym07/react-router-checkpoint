import React, { useState, useEffect } from 'react';
import './App.css';
import { Link } from 'react-router-dom'
import { Tabs, Tab, Box, Typography } from '@mui/material';
import { PropTypes } from 'prop-types';

function Profiles(contacts) {
  const profileContacts = contacts.contacts;

  console.log('contacts from profiles', profileContacts)

  function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`vertical-tabpanel-${index}`}
        aria-labelledby={`vertical-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box sx={{ p: 3 }}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  }

  TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
  };

  function a11yProps(index) {
    return {
      id: `vertical-tab-${index}`,
      'aria-controls': `vertical-tabpanel-${index}`,
    };
  }
  function VerticalTabs() {
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
      setValue(newValue);
    };
    return (
      <div>
        <Box
          sx={{ flexGrow: 1, bgcolor: 'background.paper', display: 'flex', height: 224 }}
        >
          <Tabs
            orientation="vertical"
            variant="scrollable"
            value={value}
            onChange={handleChange}
            aria-label="Vertical tabs example"
            sx={{ borderRight: 1, borderColor: 'divider' }}
          >
            {profileContacts.map(contact => (


              <Tab label={contact.firstName} {...a11yProps(0)} />



            ))}
          </Tabs>
          {/* {profileContacts.map(contactP => (
            <>



              <TabPanel value={value} index={0}>
                {contactP.firstName} {contactP.lastName}
              </TabPanel>
            </>
          ))} */}
        </Box>
      </div >
    );
  }
  return (VerticalTabs())
}

export default Profiles;

// As a user, when I click the Profiles buttons in the navigation bar, I am sent to "Profiles" page so I can see a list of my contacts.


{/* <Tabs
orientation="vertical"
variant="scrollable"
value={value}
onChange={handleChange}
aria-label="Vertical tabs example"
sx={{ borderRight: 1, borderColor: 'divider' }}
>
<Tab label="Item One" {...a11yProps(0)} />
<Tab label="Item Two" {...a11yProps(1)} />
<Tab label="Item Three" {...a11yProps(2)} />
<Tab label="Item Four" {...a11yProps(3)} />
<Tab label="Item Five" {...a11yProps(4)} />
<Tab label="Item Six" {...a11yProps(5)} />
<Tab label="Item Seven" {...a11yProps(6)} />
</Tabs>
<TabPanel value={value} index={0}>
Item One
</TabPanel>
<TabPanel value={value} index={1}>
Item Two
</TabPanel>
<TabPanel value={value} index={2}>
Item Three
</TabPanel>
<TabPanel value={value} index={3}>
Item Four
</TabPanel>
<TabPanel value={value} index={4}>
Item Five
</TabPanel>
<TabPanel value={value} index={5}>
Item Six
</TabPanel>
<TabPanel value={value} index={6}>
Item Seven
</TabPanel> */}
