// eslint-disable-next-line no-unused-vars
import React from 'react'
import StoryIntro from '../components/Story/StoryIntro';
import PersonBehindIt from './../components/Story/PersonBehindIt';
import StroyCraft from '../components/Story/StoryCraft';
import StoryBelief from './../components/Story/Storybelief';
// import StoryClosing from '../components/Story/StoryClosing';

const Story = () => {
  return (
    <div>
      <StoryIntro />
      <PersonBehindIt />
      <StroyCraft />
      <StoryBelief />
      {/* <StoryClosing /> */}
    </div>
  )
}

export default Story
