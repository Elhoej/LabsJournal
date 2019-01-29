import React from 'react'
import { Link } from 'gatsby'

const SixthPage = () => (
  <Layout>
    <h1>Week 5</h1>
    <h2>The final countdown</h2>

    <p> 
        I think this week taught me one thing the most; there is ALWAYS something left to do in software development.
        I think Stefano and I met up several times this week saying something like "alright, now we just need to do this
        and this, and then we are done!" but it was never the case. I think what bugged us the most this week was that we 
        never could decide on how the meal/ingredient work flow should look like. We ended up doing several different iterations
        and we never got fully satisfied (this is definitely one of the things we'll work on in the extra Labs weeks). I also ended up
        doing a last minute implementation of an 'export PDF' feature, which barely made it in to the final app.
        We did have an easier time though than the web team, as they basically had to redo their entire UI. So we tried our best
        this week to help them with what we could, and give them what they needed to make it in time. All in all I believe we ended up
        with two good apps which users can use cross-platform seamlessly.

        Link to readme: https://github.com/Lambda-School-Labs/Labs8-MealHelper/blob/master/README.md
        Tech stack: React, Express, Node, PostgreSQL
        Description: “EatWell is a lightweight application designed to enable the user to track and analyze how meals affect their well being. 
        It is available both as a desktop and iOS application.”
    </p>

    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default SixthPage