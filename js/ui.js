class UI {
     // show any msg in html
     printMessage(message, className) {
          // create div tag
          const div = document.createElement("div");
          // append msg to div
          div.appendChild(document.createTextNode(message));
          // add classes
          div.className = className;
          // show the message in html
          document.querySelector("#message").appendChild(div);

          // remove msg after showing in html after 3sec
          setTimeout(() => {
              this.removeMessage()
          }, 3000);
     }

     removeMessage() {
          const alert = document.querySelector(".alert");
          //tagi ke class alert dare ro peyda kon va age bood hazfesh kon
          if (alert) {
               alert.remove();
          }
     }
}
