
import React, { Component } from 'react';

class App extends Component {
  constructor() {
    super()
    this.state = {
      second:0,
      show:false,
      person:{
fullName:'Kacem Hamdi',
Bio:'ddddd',
profession:'developper',
pic: <img src={require('./kacem.jpg')} alt='/' width={100} height={100}/>

      }
    }
  }
componentDidMount(){
console.log('componentDidMount')
}

componentDidUpdate(){
setInterval(() => {
 this.setState({ second:this.state.second+1}) 
},1000);
return clearInterval(this.state.second)
}

  render() {
    return (
      <div>
        <button onClick={()=>this.setState({show:!this.state.show})}>enable/disable</button>
        {this.state.show&&<div>
          <h2>Votre Nom Complet Est :{this.state.person.fullName}</h2>
          <h2>Votre Bio Est:{this.state.person.Bio}</h2>
          <h2>Votre Profession Est: {this.state.person.profession}</h2>
          <h2>Image de Profile: <br/> {this.state.person.pic}</h2>
          <h3>life cycle is {this.state.second}second</h3>
         
        </div>}
        

      </div>
    )

  }
}

export default App