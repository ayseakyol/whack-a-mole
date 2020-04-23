
window.onload = () => {
    // debugger
    const theWorm = new Board(Mole, 3, 3);
    document.getElementById('root').appendChild(theWorm.render());
};
