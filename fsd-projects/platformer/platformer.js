$(function () {
  // initialize canvas and context when able to
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  window.addEventListener("load", loadJson);

  function setup() {
    if (firstTimeSetup) {
      halleImage = document.getElementById("player");
      projectileImage = document.getElementById("projectile");
      cannonImage = document.getElementById("cannon");
      $(document).on("keydown", handleKeyDown);
      $(document).on("keyup", handleKeyUp);
      firstTimeSetup = false;
      //start game
      setInterval(main, 1000 / frameRate);
    }

    // Create walls - do not delete or modify this code
    createPlatform(-50, -50, canvas.width + 100, 50); // top wall
    createPlatform(-50, canvas.height - 10, canvas.width + 100, 200, "navy"); // bottom wall
    createPlatform(-50, -50, 50, canvas.height + 500); // left wall
    createPlatform(canvas.width, -50, 50, canvas.height + 100); // right wall

    //////////////////////////////////
    // ONLY CHANGE BELOW THIS POINT //
    //////////////////////////////////

    // TODO 1 - Enable the Grid
    //toggleGrid();


    // TODO 2 - Create Platforms
createPlatform(200, 700, 200, 50, "black");
createPlatform(500, 600, 200, 250, "black");
createPlatform(750, 500, 200, 10, "black");
createPlatform(1020, 620, 200, 10, "black");
createPlatform(1300, 490, 200, 500, "black");
    // TODO 3 - Create Collectables
createCollectable("database", 1350, 460);
createCollectable("database", 825, 600);
createCollectable("database", 825, 700);
createCollectable("database", 1100, 585);    
    // TODO 4 - Create Cannons
createCannon("left", 400, 2000);
createCannon("top", 500, 1000);
createCannon("top", 1080, 1000);    
    
    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  }

  registerSetup(setup);
});
