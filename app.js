import React from 'react'; 
import ReactDOM from 'react-dom'; 

// Componentes

class Header extends React.Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    return (
      <header>
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4V9_9gL18QKq8OVcipkbvIu1Zg63f5O84Yg&usqp=CAU"
        />
      </header>
    )
  }
}

function App() {
    return (
      <div className="container">
        <Header />
      </div>
    )
}

 ReactDOM.render( 
   <App />, 
   document.getElementById('react-app') 
 );