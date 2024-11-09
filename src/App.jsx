import { useState } from 'react'

import './App.css'
import Allroutes from './Routes/Allroutes'
import { Provider } from './components/ui/provider'

function App() {
  

  return (
    <>
    <Provider>
    <Allroutes/>
    </Provider>
    </>
  )
}

export default App
