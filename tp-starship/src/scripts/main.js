
// importation de la classe Game.js
import Game from './game.js';

const canvas = document.getElementById("stars");

// mise en place de l'action des clics sur les boutons + les gestionnaires du clavier pour contrôler le starship
const init = () => {
    const game=new Game(canvas);
    game.moveAndDraw();

    document.getElementById("nouvelleSoucoupe").addEventListener("click", () => game.addSoucoupe());
    document.getElementById("flotteSoucoupes").addEventListener("click", () => game.startAndStop());
   
  window.addEventListener('keyup', game.keyUpActionHandler.bind(game)); 
  window.addEventListener('keydown', game.keyDownActionHandler.bind(game));

}
window.addEventListener("load",init);

console.log('le bundle a été généré');
