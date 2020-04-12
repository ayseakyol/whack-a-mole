class Mole {
  timeoutId = null;
  isVisible = false;
  isWhacked = false;

  static hideDelay() {
    return Math.floor(Math.random() * 3000) + 500;
  }

  static showDelay() {
    return Math.floor(Math.random() * 1000) + 500;
  }

  handleClick(view) {
    if (this.isWhacked) {
      clearTimeout(this.timeoutId);
    } else {
      this.timeoutId = setTimeout(this.timeoutCallback.bind(this, view), 0);
    }
    this.isWhacked = !this.isWhacked;

    this.log.push({
      isWhacked: this.isWhacked,
      timeoutId: this.timeoutId,
      isVisible: this.isVisible,
    });
  }

  timeoutCallback(view) {
    if (this.isWhacked) {
      this.isVisible = !this.isVisible;
      view.innerText = this.isVisible ? "  \n  \n  " : this.innerText;
      this.timeoutId = setTimeout(this.timeoutCallback.bind(this, view), 0);
    }
  }

  render() {
    const container = document.createElement("div");
    container.style =
      "height: 100%;" +
      "width: 100%;" +
      "display: flex;" +
      "align-items: center;" +
      "justify-content: center;";
    container.innerText = this.innerText;
    container.onclick = this.handleClick.bind(this, container);
    this.timeoutId = setTimeout(this.timeoutCallback.bind(this, container), 0);
    return container;
  }
}
