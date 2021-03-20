import React, { Component } from 'react';
import Card from './Card';
import alphabetsData from "./alphabetsJSON"
import Pagination from "react-js-pagination"
require("bootstrap-less/bootstrap/bootstrap.less");


class CardsList extends Component{

    constructor(props) {
        super(props);
        this.state = {
          activePage: 1
        };
      }

      previousScreen(){
          console.log(this.state.activePage);
          var test = this.state.activePage;
          test = test-1;
        //   alert(test);
          window.speechSynthesis.cancel();
          this.setState({activePage: test})
      }

      nextScreen(){
        console.log(this.state.activePage);
        var test = this.state.activePage;
        test = test+1;
      //   alert(test);
        window.speechSynthesis.cancel();
        this.setState({activePage: test})
    }
     
      handlePageChange(pageNumber) {
        console.log(`active page is ${pageNumber}`);
        window.speechSynthesis.cancel();
       this.setState({activePage: pageNumber});
    
      }

    
render(){
  
    console.log(alphabetsData)
    let activePageNumber = this.state.activePage;
    let previousLetter = "A";
    const aphabets = alphabetsData.map(function(aphabet){
        previousLetter = aphabet._id;
        if (aphabet._id_num == activePageNumber)
               return <Card object={aphabet} />
    })
    return(
             <div className="cards-list">
                 <table><tr><td><div className="id-class-button" onClick={this.previousScreen.bind(this)}>Previous</div></td><td>
                 {aphabets}
                 </td>
          
           <td>
           <div className="id-class-button" onClick={this.nextScreen.bind(this)}>Next</div>
           </td></tr></table>
           <Pagination
       activePage={this.state.activePage}
       itemsCountPerPage={1}
       totalItemsCount={26}
       pageRangeDisplayed={26}
       onChange={this.handlePageChange.bind(this)}
     />  
        </div>
    );
}
    
}

export default CardsList;