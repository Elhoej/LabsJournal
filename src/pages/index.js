import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import Image from '../components/image'

const IndexPage = () => (
  <Layout>
    <h1>Week 1 Journal</h1>

    <h2>Accomplishments</h2>
    <a href="https://github.com/Lambda-School-Labs/Labs8-MealHelper/pulse">GitHub Contribution Graph</a> 
    <p>I started out the week by creating a custom UI object, which we will be using to navigate from the Home View to the rest of the app.
      It's basically an expandable button, if you click the main button it will expand to an additional 4 buttons.
      I then refactored it into it's own framework and made it customizable so we can easily reuse and change it throughout the project.
      When the framework was done I started to work on our HomeView, which will be the first screen the user will see when using the app (if they are logged in).
      I then found out about the MVP being login/register this week, so I shifted my work to creating an APIClient which will communicate with the backend.
      I finished the functionality to register after a lot of debugging with help from the fullstack guys. Functionality for login is 90% done.
    </p>

    <h2>Tasks Pulled</h2>
    <p>Task 1 - Expandable Button Framework</p>
    <a href="https://github.com/Lambda-School-Labs/Labs8-MealHelper/pull/12">Pull request</a> 
    <br/>
    <a href="https://trello.com/c/YmcS2Af0/33-ios-expandable-button">Trello Card</a> 
    <br/>
    <br/>
    <p>Task 2 - APIClient, register and login</p>
    <a href="https://github.com/Lambda-School-Labs/Labs8-MealHelper/pull/18">Pull request</a> 
    <br/>
    <a href="https://trello.com/c/T0w3Ha3g/19-create-user-accounts-ios">Trello Card</a> 
    <br/>
    <br/>
    <p>I only have 2 pull requests this week as the framework was quite a big task, and I need to get into the right flow with commits/PR's. I will do my best to improve on this</p>

    <Link to="/page-2/">Go to Detailed Analysis -></Link>
  </Layout>
)

export default IndexPage
