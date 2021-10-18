import React from 'react';
import './App.css';
import { Link } from 'react-router-dom'
import { Tabs, Tab, Box, Typography } from '@mui/material';
import { PropTypes } from 'prop-types';


function Profiles(contacts) {
  const profileContacts = contacts.contacts;

  console.log('contacts from profiles', profileContacts)

  function TabPanel(props) {
    const { children, value, index, ...other } = props;

    function LinkTab(props) {
      return (
        <Tab
          component="a"
          onClick={(event) => {
            event.preventDefault();
          }}
          {...props}
        />
      );
    }

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
              <>
                <Tab  {...a11yProps(contact.id)} />
                <Link to={`/profiles/${contact.id}`}>{contact.firstName} {contact.lastName}</Link>
              </>
            ))}
          </Tabs>

          {/* {profileContacts.map(contactP => (
            <>



              <TabPanel value={value} index={contactP.id}>
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

// This didn't work out the way I intended. I wanted it to show a list on the list left and when you click it will load the profile and keep the list. I couldn't get it to work with router functions. It works just fine with normal react.



