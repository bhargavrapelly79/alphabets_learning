import ContactCard from './ContactCard'
import imagesData from "./images"
export default function Header(){

    const date = new Date();
let firstName="Bhargav";
  const hours = date.getHours();

  const styles={
      fontSize:"30"
  }
  let timeOfDay;

  if(hours <12){
    timeOfDay="morning";
    styles.color="Green";
  }
  else if(hours >=12 && hours <17){
    timeOfDay="afternoon"
    styles.color="Red";
  }
  else{
    timeOfDay="night"
    styles.color="black";
  }

  const imagesComponent = imagesData.map(function(image){
    return <ContactCard contact={{imgUrl:image.url, displayName:image.displayName}}/>
  })
 
    return(<div><header className="navbar">
     
     {imagesComponent}

    </header>
            <p>Hi {firstName}, <greet style={styles}> Good {timeOfDay}</greet></p>
    </div>)
}