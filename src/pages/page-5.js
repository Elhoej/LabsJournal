import React from 'react'
import { Link } from 'gatsby'

const FifthPage = () => (
  <Layout>
    <h1>Week 4</h1>
    <h2>Documentation is paramount</h2>

    <p> 
        This week it all came together for the iOS app. After a very tough week 3 it felt good to finally see our
        app's basic functionality working. One thing that really haunted us this week though, was that our documentation
        lacked essential information like what kind of data the req.body was expecting and what was returned. This lead 
        us to a lot of frustration as a lot of times as whenever a bug appeared when testing we never knew if the problem
        lied with our code or if we just didn't feed the endpoints with the right kind of data. Furthermore it wasted us
        a lot of time as we had to ask our web team for every endpoint on what data to send. We managed to get it right though 
        and on to UI we went. We tried to integrate a lot of food related pictures into our app, but nothing seemed to work out.
        We ended up using a soothing/relaxing image of a mountain instead and built our UI around that. Designing and building out
        UI and animations is something I really love. Trying to explain my ideas to my iOS partner and the rest of the team was 
        a great learning experience for me. I went on to build the login/registering, menu, alarms, settings and pdf export UI,
        meanwhile Stefano build out the whole meal/ingredient flow (which was just as big of a task). At the same time we shared the colors
        and icons we used for the iOS app so the web team could use them as well.

        Color scheme + theme: https://github.com/Lambda-School-Labs/Labs8-MealHelper/blob/master/iOS/Labs8-MealHelper/Labs8-MealHelper/Shared/Extensions/UIColor%2BTheme.swift
        Some error handling: https://github.com/Lambda-School-Labs/Labs8-MealHelper/blob/master/iOS/Labs8-MealHelper/Labs8-MealHelper/Shared/Extensions/Extensions.swift
        
    </p>

    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default FifthPage