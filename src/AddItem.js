import React,{Component} from 'react';
import Skylight from 'react-skylight';
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";


class AddItem extends Component{

    constructor(props)
    {
        super(props)
        this.state={product:'',amount:''}
    }

    additem=()=>{
        const item={product:this.state.product,amount:this.state.amount};
        this.props.additem(item);
        this.setState({product:'',amount:''});
        this.addform.hide();
    };

    change=(e)=>{
        this.setState({[e.target.name]:e.target.value});
    };

    render(){
        return (
        <div>
            <Button variant="contained" color="primary" onClick={()=>this.addform.show()}>Add</Button>
        <Skylight
            hideOnOverlayClicked
            ref={ref=>this.addform=ref}
            title="add item" 
        >
        
            <TextField type='text' onChange={this.change} value={this.state.product} name='product' placeholder='product' />
            <br />
            <TextField type='text' onChange={this.change} value={this.state.amount} name='amount' placeholder='amount' />
            <br />
            <Button variant='contained' onClick={this.additem}>Add to cart</Button>
        
        </Skylight>
        </div>
        );
    }
}


export default AddItem;