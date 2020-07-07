import React,{Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Additem from './AddItem';
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";

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
    <ListItem key={index}><ListItemText primary={each.product}  secondary={each.amount}/></ListItem>
    );

    return (
      <div className="App" style={{margin:"auto"}}>
        <Additem additem={this.additem} />
        <List style={{margin:"auto"}}>{cartlist}</List>
      </div>
    );
  }
  
}

export default App;
