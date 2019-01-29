import React from 'react'
import { Link } from 'gatsby'

const FourthPage = () => (
  <Layout>
    <h1>Week 3</h1>
    <h2>This stuff is hard!</h2>

    <p> 
        This was a tough week. We started out good, getting a lot of functionality and basic UI done. But when
        we got to the point where we had to hook it up to our endpoints it went downhill. We realized that the way
        big chunks of our database was structured didn't make any sense. For example, to fetch a meal for a user 
        with all it's data we'd first have to fetch all the ingredients for that meal using it's ingredient ID's.
        Then for each ingredient fetched, we'd have to fetch the nutrients using a nutrient ID. Let's say a meal 
        has 5 ingredients and each ingredient has 5 nutrients, that's 30 network calls just to display a meal and it's data.
        And on top of that there also was a seperate id for a meal's weather and note. When expressing our concern to
        the web team they didn't see it as an important issue right away (they were very busy reaching their own mvp, which
        of course is understandable), but it made me realize how hard it is to push for changes in other people's hard work.
        I actually felt a bit bad myself, because I didn't feel like it was 'right' of me to say what was wrong in an area of
        the project which wasn't my 'responsibility'. This is more of a general observation and is not pointed towards
        our lovely web team, though I do wish they had stopped up and listened better at that time, because it became a problem
        for them down the road too. 

        Major features implemented:
        Alarms: https://github.com/Lambda-School-Labs/Labs8-MealHelper/tree/master/iOS/Labs8-MealHelper/Labs8-MealHelper/Alarm
        Home/Menu: https://github.com/Lambda-School-Labs/Labs8-MealHelper/tree/master/iOS/Labs8-MealHelper/Labs8-MealHelper/Home
        Meal entries: https://github.com/Lambda-School-Labs/Labs8-MealHelper/tree/master/iOS/Labs8-MealHelper/Labs8-MealHelper/MealEntry
    </p>

    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default FourthPage