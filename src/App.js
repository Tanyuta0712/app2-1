import React from 'react'
import {MyAbout,MyImage,MyData} from './func-mydata'
import {Navbar,Header,Footer} from './func-components'
import MsgBox from './func-props'


function App() {

return [<MyAbout />,<MyImage />,<MyData />]
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