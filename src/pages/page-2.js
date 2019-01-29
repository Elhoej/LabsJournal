import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import Image from '../components/image'
// import Implementation from '../components/image'
import Collapsed from '../components/image'
import Expanded from '../components/image'

const SecondPage = () => (
  <Layout>
    <h1>Detailed Analysis</h1>
    <h2>Expandable Button Framework</h2>

    <p>I started by creating a new class ExpandableButton and subclassed UIView. I chose to subclass UIView instead of UIButton as
      I needed to have a container view which could hold the additional 4 buttons as subviews. I then added a a main button and centered
      it to the ExpandableButton view. This button will always be visible, and will be used to expand and collapse the rest of the buttons.
      I then added another 4 buttons, also centered but beneath the main button and hidden as long as the view is in the collapsed state.
      To be able to animate those subbuttons to their intended position I needed to make a reference to their centerX anchors.
      After creating the expand and collapse animations I noticed they were very similar, so I refactored them into one function using the ternary operator
      , successfully reducing the code substantially. I then used the same approach to refactor the clockwise and counter clockwise rotation animation to reduce
      repetition. After testing it thoroughly within it's own project I refactored the whole thing into a framework and added a lot of customization to the object,
      and adding a protocol to easily handle which subbutton was pressed.
    </p>

    <h3>Collapsed:</h3>
    <div style={{ maxWidth: '300px', marginBottom: '1.45rem' }}>
      <Collapsed />
    </div>

    <h3>Expanded</h3>
    <div style={{ maxWidth: '300px', marginBottom: '1.45rem' }}>
      <Expanded />
    </div>

    {/* <h3>Implementation</h3>
    <div style={{ maxWidth: '300px', marginBottom: '1.45rem' }}>
      <Implementation />
    </div> */}


    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default SecondPage
