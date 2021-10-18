### Issues

I couldn't figure out how to make a contact list that is persistent when you click on the profiles. I improvised and used an accordion to contain the profiles.

# React Router Checkpoint

This project will have you creating a social-networking application using create-react-app. For the purposes of this application you will develop a Minimum Viable Product (MVP) that meets the criteria outlined in the user stories below. You will create a new repository for this on Github and submit a link to your repository.

As you build this project, don't worry about pulling/persisting data, you will create an in-memory data store. The intention is to focus on both the routing and nested routing of this application.

The primary user should have the following:

A list of News Articles they care about.
A list of secondary profiles they are "connected to".
Each secondary profile should have the following:

First Name
Last Name
Birthday
A profile pic (can be relative or external url)
Your profiles and news feed data should be hard coded to look something like this:

{
    newsArticles: [
        {
            title: "Winning at Life!",
            article: "There are many ways to do so...but the best is just try, try, try again!"
        }
        //add more stories here in this array!
    ],
    contactProfiles: [
        {
            firstName: "Willie",
            lastName: "Dustice",
            birthday: "01/01/1978 00:00:00",
            profileImage: "/url-to-an-image.jpeg"
        }
    ]
}

## User Stories
Root Route: "/"
As a user, when I navigate to "/" (the root) or when I click the Home button, I am directed to "My Profile Page" with navbar at the top of the page with three buttons (Home, About, Profiles) so that I can see my own profile with my news feed showing the News Articles that I care about.
About Us Route: "/about"
As a user, when I click the About button in the navbar, I am directed to the "About Us" page with a small blurb about social-networking company so that I can learn a more about their business.
Profile View: "/profiles"
As a user, when I click the Profiles buttons in the navigation bar, I am sent to "Profiles" page so I can see a list of my contacts.
User Profile Route: "/profiles/:id"
As a user, when I click on a contacts name in the contact list, I should see their profile alongside the contact list so that I can continue to click through different contacts and see their profiles without navigating away from the contact list.
Pictures Route: "/profiles/:id/profile-image/"
As a user, I can click the profile picture link in one of my contact's profiles so that I can see an enlarged version of their profile picture.







