// class
const ui = new UI();
const newsApi = new News();

// listeners
listeners();
function listeners() {
     document.querySelector("#submitBtn").addEventListener("click", search);
}

// functions
function search(e) {
     e.preventDefault();
     const newsName = document.querySelector("#news-name").value;
     const country = document.querySelector("#country").value;
     const category = document.querySelector("#category").value;

     if (newsName !== "" || country !== "" || category !== "") {
          newsApi.queryAPI(newsName, country, category).then((news) => {
               const newsArray = news.news.articles;
               if (newsArray.length > 0) {
                   ui.showNews(newsArray)
               } else {
                    ui.printMessage(
                         "no result! change filters",
                         "text-center alert alert-danger mt-4"
                    );
               }
          });
     } else {
          // methode printMessage ro toye class UI dorost kardim va inja azash estefade mikonim
          ui.printMessage(
               "pls enter one parameter",
               "text-center alert alert-danger mt-4"
          );
     }
}
