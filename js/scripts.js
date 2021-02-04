slider.oninput = function () {
    const value = this.value;
    manualPendulum.style.setProperty("transform", `translateX(calc(${value}vw - ${value}%))`);
  }