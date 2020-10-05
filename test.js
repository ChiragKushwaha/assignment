let obj = {
  Title: "Iron Man",
  Year: "2008",
  Rated: "PG-13",
  Released: "02 May 2008",
  Runtime: "126 min",
  Genre: "Action, Adventure, Sci-Fi",
  Director: "Jon Favreau",
  Writer:
    "Mark Fergus (screenplay), Hawk Ostby (screenplay), Art Marcum (screenplay), Matt Holloway (screenplay), Stan Lee (characters), Don Heck (characters), Larry Lieber (characters), Jack Kirby (characters)",
  Actors: "Robert Downey Jr., Terrence Howard, Jeff Bridges, Gwyneth Paltrow",
  Plot:
    "Tony Stark. Genius, billionaire, playboy, philanthropist. Son of legendary inventor and weapons contractor Howard Stark. When Tony Stark is assigned to give a weapons presentation to an Iraqi unit led by Lt. Col. James Rhodes, he's given a ride on enemy lines. That ride ends badly when Stark's Humvee that he's riding in is attacked by enemy combatants. He survives - barely - with a chest full of shrapnel and a car battery attached to his heart. In order to survive he comes up with a way to miniaturize the battery and figures out that the battery can power something else. Thus Iron Man is born. He uses the primitive device to escape from the cave in Iraq. Once back home, he then begins work on perfecting the Iron Man suit. But the man who was put in charge of Stark Industries has plans of his own to take over Tony's technology for other matters.",
  Language: "English, Persian, Urdu, Arabic, Kurdish, Hindi, Hungarian",
  Country: "USA, Canada",
  Awards: "Nominated for 2 Oscars. Another 21 wins & 65 nominations.",
  Poster:
    "https://m.media-amazon.com/images/M/MV5BMTczNTI2ODUwOF5BMl5BanBnXkFtZTcwMTU0NTIzMw@@._V1_SX300.jpg",
  Ratings: [
    {
      Source: "Internet Movie Database",
      Value: "7.9/10",
    },
    {
      Source: "Rotten Tomatoes",
      Value: "94%",
    },
    {
      Source: "Metacritic",
      Value: "79/100",
    },
  ],
  Metascore: "79",
  imdbRating: "7.9",
  imdbVotes: "923,673",
  imdbID: "tt0371746",
  Type: "movie",
  DVD: "N/A",
  BoxOffice: "N/A",
  Production: "Marvel Enterprises, Paramount",
  Website: "N/A",
  Response: "True",
};

// let keys = Object.keys(obj);
// console.log(keys);
// let values = Object.values(obj);
// console.log(values);
// let entries = Object.entries(obj);
// console.log(typeof( entries[14][1]));
const genetareValues = (obj, all = false) => {
  let entries = Object.entries(obj);
  entries.forEach((ele) => {
    if (typeof( ele[1] )=== "object" && all) {
      if(ele[0] === "Ratings"){
        console.log(`${ele[0]}`);
      }
        genetareValues(ele[1], true);
    
    } else {
     
        if (ele[0] === "Poster" && all) {
          console.log(
            "'''''''''''''''''''''''''''\n Image encountered \n '''''''''''''''''''"
          );
        } else if(ele[0] === "Title"){
          console.log(
            "'''''''''''''''''''''''''''\n Title encountered \n '''''''''''''''''''"
          );
        } else if(ele[0] === "Ratings"){
          console.log("++++++++++++++++++++++++++++++++++++");
        }
       else {
        console.log(`${ele[0]} : ${ele[1]}`);
      }
    }
  });
};
genetareValues(obj, false);