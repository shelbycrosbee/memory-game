# Memory

Develop the card game "Memory" with all knowledge you have gained in React, JavaScript, HTML and CSS over the last few weeks.

To start all of the cards are laid face down on a surface and two cards are flipped face up over each turn. The goal of the game is to find all pairs of matching cards.

The images to use are provided in "/src/img" folder.

Provide a "Reset" button which enables the player restart the game at any time.

![Memory Game Gif](https://media.giphy.com/media/t32aaMe14FANW/giphy.gif)

### Bonus

- Load the images for the game through an API of your choice
- Show a loading message while the images are being loaded through the API
- Implement a CSS framework of your choice to arrange the cards within a grid and "prettify" the game

```// Create array to hold all images
  // Create array which hold tiles which are currently flipped over in current turn
  // Load images via API

  // Push images into array after they are loaded by API

  // Create "Tile" Class
  // Add "imageUrl" string property to Tile class
  // Add "flipped" boolean to Tile class

  // Create array of tile objects based on image array

  // Create a "Click" event handler for all tiles
  // Create a callback function "flipTile" for the event handler

  // In the "flipTile" function
  // check if there any tiles that are not flipped over yet (filter function on tiles array)
    // No -> Game won -> do nothing
    // Yes -> check if that tile is already image up (check if has class)
      // Yes -> do nothing
      // No -> check if already two tiles have been flipped over during this turn (check counter)
        // No -> flip over tile (set class on image); Push to flippedTiles array; check if two tiles have been flipped over
        // Yes -> Check if tiles are the same
          // No -> flip tiles back over and hide images; set counter to 0
          // Yes -> keep tiles flipped and show images; set counter to 0
```
