import React from 'react'
import Calendar from './class-components'
import {Navbar,Header,Footer} from './func-components'
import MsgBox from './func-props'


function App() {

return [<Navbar />,<Calendar />,<Header />,<Footer />]
/*return(
  <MsgBox 
  text="Useing props in function component"
  colr="red"
  bgColor="#ccc"
  fontSize="16pt"
  border="dotted 1px black"
  />
)*/
}

export default App;