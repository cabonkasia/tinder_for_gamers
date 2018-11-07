import React, { Component } from 'react'
import NavBar from './components/NavBar'
import SwipeGalleryContainer from './components/SwipeGalleryContainer'
import Footer from './components/Footer'
  

class App extends Component {

  state = {
    gamerholics: [
      {
        "id": 1,
        "name": "Stella",
        "age": 22,
        images: [],
        "gender": "female",
        "console": ["PlayStation"],
        "favGames": [],
        "bio": "",
        "isMatch": true
      },
      {
        "id": 2,
        "name": "Dario",
        "age": 18,
        images: [],
        "gender": "male",
        "console": ["PlayStation", "Nintendo"],
        "favGames": [],
        "bio": "",
        "isMatch": true
      },
      {
        "id": 3,
        "name": "Karel",
        "age": 64,
        images: [],
        "gender": "male",
        "console": ["Nintendo", "PC", "Retro"],
        "favGames": [],
        "bio": "",
        "isMatch": true
      },
      {
        "id": 4,
        "name": "Melissa",
        "age": 25,
        images: [],
        "gender": "female",
        "console": ["Retro", "Xbox"],
        "favGames": [],
        "bio": "",
        "isMatch": true
      },
      {
        "id": 5,
        "name": "Kasia",
        "age": 30,
        images: [],
        "gender": "female",
        "console": ["Retro", "Xbox", "PC"],
        "favGames": [],
        "bio": "",
        "isMatch": false
      }
     
    ]
  }

//   getRandomImage(imgAr, path) {
//     path = path || 'images/'; // default path here
//     var num = Math.floor( Math.random() * imgAr.length );
//     var img = imgAr[ num ];
//     var imgStr = '<img src="' + path + img + '" alt = "">';
//     document.write(imgStr); document.close();
// }

  allImagesArr = state.gamerholics.map(gamerholic => gamerholic.images[0])
  //currentIndex = //use indexOf

  getNewImage(images, currentIndex) {
  if(!currentIndex) {
  images[0]
  } else if(currentIndex < images.length-1) {
    images[currentIndex++]
  } else {
    console.log("No more gamers images to display")
  }

  getNewImage(allImagesArr, currentIndex)

  render() {
    return (
      <div>
        <NavBar />
        <SwipeGalleryContainer/>
        <Footer />
      </div>
    )
  }
}

export default App;
