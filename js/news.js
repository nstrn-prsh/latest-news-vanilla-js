class News {
     constructor() {
          this.APIkey = 'f99f4ebf3fc747b7be6e5ecee4e4a0b9';
     }

     // send url to the api
     async queryAPI(newsName, country, category) {
          // build url

          // https://newsapi.org/v2/
          //   everything?
          // q=tesla&
          // sortBy=publishedAt&
          // apiKey=f99f4ebf3fc747b7be6e5ecee4e4a0b9
          let url = 'https://newsapi.org/v2/'

          //   everything or top-headlines?
          if (country === "" && category === "") url += "everything?";
          else url += "top-headlines?";

          if (newsName !== "") url += `q= ${newsName}&`;
          if (country !== "") url += `country= ${country}&`;
          if (category !== "") url += `category= ${category}&`;
          url += `apiKey= ${this.APIkey}`;

          //   using url
          const newsRes = await fetch(url);
          const news = await newsRes.json();
        //   console.log(news);
          return{news}
     }
}
