import React from "react";
import "./App.css";

function App() {
  // Create array to hold all images
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
  return (
    <div>
      <h1>Memory Game</h1>
      <p>
        For instructions check out the corresponding GitHub's repository{" "}
        <a
          href="https://github.com/Montana-Code-School/memory-game"
          target="_blank"
          rel="noopener noreferrer"
        >
          README.md
        </a>
      </p>
      <p>Happy Problem Solving :)</p>
    </div>
  );
}

export default App;
