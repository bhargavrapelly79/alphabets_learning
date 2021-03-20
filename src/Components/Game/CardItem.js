import React, { Component } from 'react';

class CardItem extends Component{

    playAudio() {
        const audioEl = document.getElementsByClassName("audio-element")[0]
        audioEl.play()
      } 

         
      readOutLoud(message) {
        // window.speechSynthesis.cancel();
        var speech = new SpeechSynthesisUtterance();
      
        // // Set the text and voice attributes.
        speech.text = message;
        speech.volume = 1;
        speech.rate = 1;
        speech.pitch = 1;

      
        window.speechSynthesis.speak(speech);
      }

      readOutLoudFresh(message) {
        window.speechSynthesis.cancel();
        var speech = new SpeechSynthesisUtterance();
      
        // // Set the text and voice attributes.
        speech.text = message;
        speech.volume = 1;
        speech.rate = 1;
        speech.pitch = 1;

      
        window.speechSynthesis.speak(speech);
      }
    

    render() {
    return(
        <div className="card-item" onLoad={this.readOutLoud(this.props.id+" for "+this.props.name)}>
<span className="card-item-name" onClick={this.readOutLoudFresh.bind(this, this.props.name)} >{this.props.name}</span>
<span  className="card-item-img"><img src={this.props.imageUrl} height={this.props.hei} width={this.props.wid} /></span>

        </div>
        
    );
    }
}

export default CardItem;

