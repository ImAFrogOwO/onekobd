/**
 * @name oneko
 * @description cat follow mouse (real)
 * @author Ven, adryd
 * @version 1.0.0
 */


class NekoAnimation {
    start() {
      fetch("https://raw.githubusercontent.com/adryd325/oneko.js/5977144dce83e4d71af1de005d16e38eebeb7b72/oneko.js")
        .then((x) => x.text())
        .then((s) =>
          s.replace(
            "./oneko.gif",
            "https://raw.githubusercontent.com/adryd325/oneko.js/14bab15a755d0e35cd4ae19c931d96d306f99f42/oneko.gif"
          )
        )
        .then(eval);
    }
  
    stop() {
      clearInterval(window.onekoInterval);
      delete window.onekoInterval;
      const element = document.getElementById("oneko");
      if (element) {
        element.remove();
      }
    }
  }
  
  module.exports = NekoAnimation;  
