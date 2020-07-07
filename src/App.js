import React,{Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Additem from './AddItem';

class App extends Component {
  constructor(props)
  {
    super(props);
    this.state={items:[]}
  }

  additem=(item)=>{
    this.setState({items:[item,...this.state.items]});
  };

  render()
  {
    const cartlist=this.state.items.map((each,index)=>
    <li key={index}>{each.product}  {each.amount}</li>
    );

    return (
      <div className="App">
        <Additem additem={this.additem} />
        {cartlist}
      </div>
    );
  }
  
}

export default App;
