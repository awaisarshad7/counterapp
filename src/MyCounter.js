import React from "react";

class MYCounter extends React.Component{
  
    state = {number: 0};

     counter = () => {

          this.setState({number: this.state.number + 1});
  
};


    render(){
        return(
            <div>
                <button type="submit" onClick = {this.counter} >
                    Counter App
                </button>
                <h1>{this.state.number}</h1>
            </div>
        ); 
    }
}

export default MYCounter;