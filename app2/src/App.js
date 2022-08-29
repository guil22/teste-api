import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      img: [],
      
    }
  }
  componentDidMount(){
    const url = 'https://dog.ceo/api/breeds/image/random/12'

    fetch(url)
    .then(res => res.json())
    .then(res => this.setState({ img: res.message}))
  }

  render() {
    const { img } = this.state;
    //const dogs = img.map((dog) => <img className="card-img-top" key={dog} src={dog} alt='...'/>)
    return(
      <div className='container'>
        <div className="jumbotron">
          <h1 className="display-4">Fotos de Doguinhos</h1>
        </div>
        
        <div className= 'dgs'>
        {img.map((dog) => (
          <div className="card" >
          <img className="card-img" key={dog} src={dog} alt='...'/>
          
        </div>
        ))}
        </div>
      </div>
    )
  }
}
  

export default App;
