class UI {
     // new: to constructor neveshtim ke hameja behesh dastresi dashte bashim
     constructor() {
          this.result = document.querySelector("#result");
     }
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
               this.removeMessage();
          }, 3000);
     }

     removeMessage() {
          const alert = document.querySelector(".alert");
          //tagi ke class alert dare ro peyda kon va age bood hazfesh kon
          if (alert) {
               alert.remove();
          }
     }

     //  show news result into html
     showNews(news) {
         news.forEach(newsInfo=>{
          this.result.innerHTML += `
             <div class="col-md-4 mb-4">
                 <div class="card">
                      <div class='card-body'>
                         <h2 class='card-title text-center'>
                             ${newsInfo.title.split('-',1)}
                         </h2>
                         <p class='card-text lead textto-info'>
                              news information:
                             </p>
                         <span class='badge badge-primary'>
                             source: ${newsInfo.source.name}
                         </span>
                         <span class='badge badge-primary'>
                            date and time: ${newsInfo.publishedAt}
                         </span>
                         <br/>
                         <a href='${newsInfo.url}' target='_blank' class='btn btn-primary btn-block'>
                             complete news   
                         </a>
                     </div>
                 </div>
             </div>
             `;
        })
     }
}
