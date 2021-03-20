import React, { Component } from 'react';
import CardItem from './CardItem';




class Card extends Component{

    readOutLoud(message) {
        window.speechSynthesis.cancel();
        var speech = new SpeechSynthesisUtterance();
      
        // // Set the text and voice attributes.
        speech.text = message;
        speech.volume = 1;
        speech.rate = 1;
        speech.pitch = 1;
      
        window.speechSynthesis.speak(speech);
      }


      componentDidUpdate(){
          console.log('chanigng')
      }
  
     render(){

        var aplhabet_test=this.props.object._id;
        var cardItems = this.props.object.list.map(function(aphabet1){

            return <CardItem id={aplhabet_test} name={aphabet1.name_upper_case} imageUrl={aphabet1.imageUrl} hei={aphabet1.hei} wid={aphabet1.wid} />
        
         })
    return(
        <div className="card">
            <table border="1">
                <tr>
        
                    <td className="id-class" onClick={this.readOutLoud.bind(this, this.props.object._id)}>{this.props.object._id} </td>
                    <td>{cardItems}</td>
      
                </tr>
            </table>
            
              </div>
    );
     }

}

export default Card;