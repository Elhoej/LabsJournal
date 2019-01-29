import React from 'react'
import { Link } from 'gatsby'

const ThirdPage = () => (
  <Layout>
    <h1>Week 2</h1>
    <h2>Working with API's</h2>

    <p> This week we integrated two different API's as well as hooked our login/register up to the backend
    which our web team worked had worked on last week. Implementing the weather API from OpenWeatherMap was
    straight forward, we did have to have to discuss how we wanted the temperature to me measured though.
    The temperature returned for the API was in Kelvin, but for the iOS app we decided to convert it to either
    celcius or fahrenheit depending on which which country the iPhone was registered in. Implementing the nutrients
    API USDA was a bit more complicated though. We had difficulties to agree on which nutrients to save to our own
    database, and if it should be dynamic depending on what food was searched for or static. We ended up agreeing on
    5 static macro nutrients which we would display for all foods. Stefano did a great job implementing several different
    measurements to choose from in the iOS app. Connecting the the app to our backend's login and register revealed
    that there were some bugs on the backend (which was to be expected). To lift some weight of their shoulders, and
    to get a better understanding of how they built the backend, Stefano and I began to dig into the backend code.
    It was fun to try and decipher a language which we weren't very familiar with (the comments in the code helped us
    a long way, good job web guys!!). We ended up locating a password encryption bug when registering a new user and shared
    our sharings with the rest of the team. All in all I think we had a pretty successful week.

    login: https://github.com/Lambda-School-Labs/Labs8-MealHelper/tree/master/iOS/Labs8-MealHelper/Labs8-MealHelper/Login
    API's/Backend-hookedup: https://github.com/Lambda-School-Labs/Labs8-MealHelper/tree/master/iOS/Labs8-MealHelper/Labs8-MealHelper/Networking
    </p>

    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default ThirdPage