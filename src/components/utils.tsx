export const genetareValues = (obj: any, all: boolean = false, id: string) => {
  let movieData = document.getElementById(id);
  console.log(obj);
  let child = document.getElementById("current-data");
  if (child !== null) {
    movieData?.removeChild(child);
  }
  let currentData = document.createElement("div");
  currentData.id = "current-data";
  let entries = Object.entries(obj);
  entries.forEach((ele) => {
    if (typeof (ele[1]) === "object") {
      if (all && ele[0] === "Ratings") {
        const boldTag = document.createElement("b");
        boldTag.appendChild(document.createTextNode(`${ele[0]}: `));
        currentData?.appendChild(boldTag);
        currentData?.appendChild(document.createElement("br"));
        genetareValues(ele[1], all, id);
      }
    } else {
      if (ele[0] === "Poster") {
        if (all) {
          const imageTag = document.createElement("img");
          imageTag.src = `${ele[1]}`;
          currentData?.appendChild(imageTag);
          currentData?.appendChild(document.createElement("br"));
        }
      } else if (ele[0] === "Title") {
        const h1Tag = document.createElement("h1");
        h1Tag.appendChild(document.createTextNode(`${ele[1]}`));
        currentData?.appendChild(h1Tag);
        currentData?.appendChild(document.createElement("br"));
      } else {
        const boldTag = document.createElement("b");
        boldTag.appendChild(document.createTextNode(`${ele[0]}: `));
        currentData?.appendChild(boldTag);
        currentData?.appendChild(document.createTextNode(`${ele[1]}`));
        currentData?.appendChild(document.createElement("br"));
      }
    }
  });
  console.log("called");
  movieData?.appendChild(currentData);
};
