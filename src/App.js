import React from 'react'
import styled from 'styled-components'

import { FluidProvider, Text, TextLink } from './fluid-type'
import fluidTheme from './theme'

const FancyText = styled(Text)`
  color: mediumslateblue;
`

const App = () => (
  <FluidProvider theme={fluidTheme}>
    <Text as='h1' size='xxl'>
      A Visual Type Scale
    </Text>

    <Text as='h2' size='xl'>
      A Visual Type Scale
    </Text>

    <Text as='h3' size='lg'>
      A Visual Type Scale
    </Text>

    <Text as='h4' size='md'>
      A Visual Type Scale
    </Text>

    <Text as='h5' size='sm'>
      A Visual Type Scale
    </Text>

    <Text as='h6' size='xs'>
      A Visual Type Scale
    </Text>

    <FancyText>A Visual Type Scale with Custom Styling</FancyText>

    <Text font='secondary'>A Visual Type Scale With Secondary Font</Text>

    <Text font='tertiary'>A Visual Type Scale With Tertiary Font</Text>

    <Text>
      A Visual Type Scale <small>With Small Text</small> Inside
    </Text>

    <Text>
      A Visual Type Scale <strong>With Bold Text</strong> Inside
    </Text>

    <Text weight='medium'>A Visual Type Scale With Custom Weight</Text>

    <Text>
      Kitty pounce, trip, faceplant you didn't see that no you didn't definitely didn't lick, lick, lick, and preen away
      the embarrassment scoot butt on the rug scratch at fleas, meow until belly rubs, hide behind curtain when vacuum
      cleaner is on scratch strangers and poo on owners food and lick the curtain just to be annoying so knock over
      christmas tree. Ptracy sleep everywhere, but not in my bed, and crash against wall but walk away like nothing
      happened or flee in terror at cucumber discovered on floor or be superior chew iPad power cord.
    </Text>

    <TextLink>A Visual Type Scale Link</TextLink>

    <TextLink highlighted>A Visual Type Scale Link</TextLink>
  </FluidProvider>
)

export default App
