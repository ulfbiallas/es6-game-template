# es6 game template

Template for simple ECMAScript 6 games using the 2d context of the HTML5 canvas object.

## description

This template should give you an idea how to start a game project with es6 if you are new to game programming.
It contains more or less everything you will need for a real game but in a minimized way that help you to understand
the logic without having to read hundreds of lines of code:
- a facility to load images
- keyboard input handling
- a player object that can be moved on the map by pressing the arrow keys
- and of course a mainloop for updating game state and rendering


## how to use ##

#### try out the template

1. clone the repo
2. run `npm install` to download the dependencies
3. run `npm run build` to run webpack
4. open the *index.html* in a browser
5. move the player

#### create you own game

If you understood how the code in this project is working, you can start your own game from scratch
or simply extend this project.

Here are some suggestions where to start:

- extend the ImageLoader to load sound files as well
- create some enemy objects to give the player something to interact with
- add support for different levels
- build a nice menu where the player can choose the level and make some settings