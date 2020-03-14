import React, { useState, useEffect } from "react";
import "./App.css";
import Photo from "./Photo";

import slika1 from "./photos/kitt1.jpg";
import slika2 from "./photos/kitt2.jpg";
import slika3 from "./photos/kitt3.jpg";
import slika4 from "./photos/kitt4.jpg";
import slika5 from "./photos/kitt5.jpg";
import slika6 from "./photos/kitt6.jpg";
import slika7 from "./photos/kitt7.jpg";
import slika8 from "./photos/kitt8.jpg";
import slika9 from "./photos/kitt9.jpg";
import slika10 from "./photos/kitt10.jpg";
import slika11 from "./photos/kitt1c.jpg";
import slika12 from "./photos/kitt2c.jpg";
import slika13 from "./photos/kitt3c.jpg";
import slika14 from "./photos/kitt4c.jpg";
import slika15 from "./photos/kitt5c.jpg";
import slika16 from "./photos/kitt6c.jpg";
import slika17 from "./photos/kitt7c.jpg";
import slika18 from "./photos/kitt8c.jpg";
import slika19 from "./photos/kitt9c.jpg";
import slika20 from "./photos/kitt10c.jpg";

const App = () => {
  const [firstCard, setFirstCard] = useState("");
  const [secondCard, setSecondCard] = useState("");
  const [openCardsNum, setOpenCardsNum] = useState(0);
  const [photos, setPhotos] = useState([
    { src: slika1, name: "kitt1", isFlippable: true, isFlipped: false },
    { src: slika2, name: "kitt2", isFlippable: true, isFlipped: false },
    { src: slika3, name: "kitt3", isFlippable: true, isFlipped: false },
    { src: slika4, name: "kitt4", isFlippable: true, isFlipped: false },
    { src: slika5, name: "kitt5", isFlippable: true, isFlipped: false },
    { src: slika6, name: "kitt6", isFlippable: true, isFlipped: false },
    { src: slika7, name: "kitt7", isFlippable: true, isFlipped: false },
    { src: slika8, name: "kitt8", isFlippable: true, isFlipped: false },
    { src: slika9, name: "kitt9", isFlippable: true, isFlipped: false },
    { src: slika10, name: "kitt10", isFlippable: true, isFlipped: false },
    { src: slika11, name: "kitt1", isFlippable: true, isFlipped: false },
    { src: slika12, name: "kitt2", isFlippable: true, isFlipped: false },
    { src: slika13, name: "kitt3", isFlippable: true, isFlipped: false },
    { src: slika14, name: "kitt4", isFlippable: true, isFlipped: false },
    { src: slika15, name: "kitt5", isFlippable: true, isFlipped: false },
    { src: slika16, name: "kitt6", isFlippable: true, isFlipped: false },
    { src: slika17, name: "kitt7", isFlippable: true, isFlipped: false },
    { src: slika18, name: "kitt8", isFlippable: true, isFlipped: false },
    { src: slika19, name: "kitt9", isFlippable: true, isFlipped: false },
    { src: slika20, name: "kitt10", isFlippable: true, isFlipped: false }
  ]);

  //shuffle cat objects so on every refresh is different order
  useEffect(() => {
    let photoCopy = photos;
    photoCopy.sort(() => Math.random() - 0.5);
    setPhotos([...photoCopy]);
  }, []);

  // check if 2 cards are open if they are close all
  //flipped cards that are isFlippable=true
  const isTwoCardsOpen = () => {
    if (openCardsNum === 2) {
      setOpenCardsNum(0);
      setFirstCard("");
      setSecondCard("");
      const photosCopy = photos;
      photosCopy.map(el => {
        if (el.isFlippable === true) {
          el.isFlipped = false;
        }
      });
      setPhotos([...photosCopy]);
    } else {
      setOpenCardsNum(openCardsNum + 1);
    }
  };

  //save opened card name in variable first or second
  const saveOpenedCardsName = e => {
    const name = e.currentTarget.dataset.name;
    if (firstCard === "") {
     return setFirstCard(name);
    } else  {
      return setSecondCard(name);
    }
  };

  //check if user found 2 identical cards and make that card unflippable and open
  const didYouGuess = () => {
    if (firstCard !== "" && secondCard !== "" && firstCard === secondCard) {
      let photosCopy = photos;
      photosCopy.map(el => {
        if (el.name === firstCard || el.name === secondCard) {
          el.isFlippable = false;
        }
      });
      setPhotos([...photosCopy]);
    }
  };

  const flipCard = e => {
    const key = e.currentTarget.dataset.key;
    let photosCopy = photos;
    photosCopy.map(el => {
      if (el.src === key) {
        if (el.isFlippable === true) {
          el.isFlipped = !el.isFlipped;
        }
      }
    });
    setPhotos([...photosCopy]);
  }



  //main function
  let check = e => {
    flipCard(e)
    saveOpenedCardsName(e)
    didYouGuess()
    isTwoCardsOpen()
  };
  



  return (
    <div className="App">
      {photos.map((photo, index) => (
        <Photo
          key={index}
          isFlippable={photo.isFlippable}
          isFlipped={photo.isFlipped}
          check={check}
          name={photo.name}
          src={photo.src}
        />
      ))}
    </div>
  );
};

export default App;
