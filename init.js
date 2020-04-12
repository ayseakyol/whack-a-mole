window.onload = () => {
  const theMole = new Board(Mole, 10, 10);
  document.getElementById("root").appendChild(theMole.render());
};
