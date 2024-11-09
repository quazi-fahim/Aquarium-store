import React from 'react'
import BigSlider from '../Component/BigSlider'
import Multibox from '../Component/Multibox'
import Plantfish from '../Component/Plantfish'
import { Box } from '@chakra-ui/react'

const Home = () => {
  return (
    <Box p={2} m={3}>
      <BigSlider/>
      <Multibox/>
      <Plantfish/>

    </Box>
  )
}

export default Home