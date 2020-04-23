class Mole {

  timeoutId = null
  isVisible = false
  isWhacked = false
  msDelay = 0

  constructor(x, y) {
    this.innerText = '  \n' + 'mole' + '\n\n  ';
  }

  static hideDelay() {
    return Math.floor(Math.random() * 3000) + 500;
  }

  static showDelay() {
    return Math.floor(Math.random() * 1000) + 500;
  }

  handleClick(view) {
    debugger
    if (this.isWhacked){return};

    if (!this.isVisible) {
      clearTimeout(this.timeoutId);
      view.innerText = 'WHACK';
      this.isWhacked = true;
    } else {
      this.timeoutId = setTimeout(this.timeoutCallback.bind(this, view), this.showDelay);
    };
  }

  timeoutCallback(view) {
    if (!this.isWhacked) {
      this.isVisible = !this.isVisible;
      view.innerText = this.isVisible ? '  \n  \n  ' : this.innerText;
      this.msDelay = this.constructor.hideDelay();
      this.timeoutId = setTimeout(this.timeoutCallback.bind(this, view), this.msDelay);
    }; 
  }

  render() {
    const container = document.createElement('div');
    container.style = 'height: 100%;'
      + 'width: 100%;'
      + 'display: flex;'
      + 'align-items: center;'
      + 'justify-content: center;';
    container.innerText = 'mole';
    container.onclick = this.handleClick.bind(this, container);
    this.msDelay = this.constructor.showDelay();
    this.timeoutId = setTimeout(this.timeoutCallback.bind(this, container), this.msDelay);
    return container;
  }

}
