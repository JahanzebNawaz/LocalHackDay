import React from 'react';
import Display from './display'
import { H1} from './h1';
import { H2 } from './h2';
import 'bootstrap/dist/css/bootstrap.min.css';

import { Button } from 'react-bootstrap';

// import { Icon4ThofjulyGrey6 } from '@react-pakistan/react-icons-collection/icons/4thofjuly-grey';

class App extends React.Component{
  // state = {
  //   name: 'Local Hack Day',
  // };

 
  constructor(){
    super();
    this.state = {
      name: 'Local Hack Day',
    }
  }

  handleButton = () => {
    console.log('Button Clicked')
  }

  render(){
    const { name } = this.state

    return(
      <div>
        <Display day={name} />
        <H1 text="Oct 12, 2019" />
        <H1 text="Sir Syed College of Computer Science" />
        <H2 >Heading H2 </H2>
        <Button onClick={ () => this.handleButton('text') } variant="primary" >Click</Button>

        {/* <Icon4ThofjulyGrey6
          fontSize="32px"
          fill="#2E2E2E"
        /> */}

      </div>

      
    )
  }
}


export default App;