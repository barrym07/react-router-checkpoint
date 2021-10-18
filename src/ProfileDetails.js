//This was the alternative route to try and meet some of the requirements.

import React from 'react';


import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Avatar from '@mui/material/Avatar'

function ProfileDetails(contacts) {
  // console.log('contacts from details page', contacts)
  console.log('contacts from details', contacts)
  const profileContacts = contacts.contacts;
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (

    <div>
      {profileContacts.map(details => (
        <Accordion expanded={expanded === details.id} onChange={handleChange(details.id)}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel4bh-content"
            id="panel4bh-header"
          >
            <Typography sx={{ width: '33%', flexShrink: 0 }}>{details.firstName} {details.lastName}</Typography>
            <Avatar alt={details.firstName} src="src/blank-profile-picture-640.png" />
          </AccordionSummary>
          <AccordionDetails>
            <img
              src="/blank-profile-picture-640.png"

              alt={details.firstName}

            />
            <Typography>
              Birthday: {details.birthday}
            </Typography>

          </AccordionDetails>
        </Accordion>
      ))}


    </div>

  )
}

export default ProfileDetails;



