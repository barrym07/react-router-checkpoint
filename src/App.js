import { Switch, Route } from 'react-router-dom';
import './App.css';
import Nav from './Nav.js';
import Home from './Home.js';
import About from './About.js';
import Profiles from './Profiles.js'
import { useEffect, useState } from 'react';

function App() {
  const data = {
    newsArticles: [
      {
        title: "Winning at Life!",
        article: "There are many ways to do so...but the best is just try, try, try again!"
      },
      {
        title: "Failing at Life!",
        article: "There are many ways to do so...but sometimes you just can't"
      },
      {
        title: "Russia suspends its mission at NATO, shuts alliance's office",
        article: "lorem isn't working"
      },
      {
        title: "Colin Powell, exemplary general stained by Iraq claims, dies",
        article: "Poor one out for Gen Powell, o7"
      },
      {
        title: "ESPN report leaving over COVID vaccine",
        article: "Allison Williams Leaving network because of something"
      },
      {
        title: "More stories",
        article: "My copying skills are thinning"
      }

    ],
    contactProfiles: [
      {
        firstName: "Willie",
        lastName: "Dustice",
        birthday: "01/01/1978 00:00:00",
        profileImage: "/url-to-an-image.jpeg"
      },
      {
        firstName: "Woody",
        lastName: "Bowser",
        birthday: "01/10/1979 00:00:00",
        profileImage: "/url-to-an-image.jpeg"
      },
      {
        firstName: "Bill",
        lastName: "NeedToPayThose",
        birthday: "01/01/1978 00:00:00",
        profileImage: "/url-to-an-image.jpeg"
      },
      {
        firstName: "John",
        lastName: "Someone",
        birthday: "03/08/1988 00:00:00",
        profileImage: "/url-to-an-image.jpeg"
      },
      {
        firstName: "Faker",
        lastName: "ShouldHaveUsed",
        birthday: "05/06/1998 00:00:00",
        profileImage: "/url-to-an-image.jpeg"
      },
    ]
  };

  const [news, setNews] = useState([data.newsArticles])
  useEffect(() => {
    setNews(data.newsArticles);


  }, [data.newsArticles]
  );
  console.log("news from app", news)



  return (
    <div className="App">

      <Nav />
      <Switch>
        <Route path="/" exact render={() => <Home news={news} />} />
        <Route path="/about" component={About} />
        <Route path="/profiles" exact component={Profiles} />
        {/* <Route path="/profiles/:name" component={ProfileDetails} /> */}

      </Switch>



    </div>
  );
}

export default App;
