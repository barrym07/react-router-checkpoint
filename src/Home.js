import { React, useState, useEffect } from 'react';
import './App.css';

import { Card, CardContent, Typography, } from '@mui/material';

function Home(news) {
  console.log('news from home', news)
  const homeNews = news.news;
  console.log('homeNews', homeNews)

  return (
    < div >
      {/* <p>cards for each news article need to be rendered here</p> */}
      {
        homeNews.map(art => (
          <Card sx={{ minWidth: 275 }}>
            <CardContent>
              <Typography variant="h5" component="div">
                {art.title}
              </Typography>
              <Typography sx={{ mb: 1.5 }} color="text.secondary">
                {art.article}
              </Typography>

            </CardContent>

          </Card>
        ))
      }
    </div >





  )
}

export default Home;

