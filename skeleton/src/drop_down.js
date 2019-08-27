
const dogs = {
  "Corgi": "https://www.akc.org/dog-breeds/cardigan-welsh-corgi/",
  "Australian Shepherd": "https://www.akc.org/dog-breeds/australian-shepherd/",
  "Affenpinscher": "https://www.akc.org/dog-breeds/affenpinscher/",
  "American Staffordshire Terrier": "https://www.akc.org/dog-breeds/american-staffordshire-terrier/",
  "Tosa": "https://www.akc.org/dog-breeds/tosa/",
  "Labrador Retriever": "https://www.akc.org/dog-breeds/labrador-retriever/",
  "French Bulldog": "https://www.akc.org/dog-breeds/french-bulldog/" 
};

function dogLinkCreator() {
  let dogLi = [];
  for(let dogName in dogs) {
    let aTag = document.createElement("a");
    aTag.innerHTML = dogName;
    aTag.href = dogs[dogName];
    let liTag = document.createElement("li");
    liTag.setAttribute("class", "dog-link");
    liTag.appendChild(aTag);
    dogLi.push(liTag);
  }
  return dogLi;
}

function attachDogLinks() {
  let dogLinks = dogLinkCreator();
  let ul = document.querySelector(".drop-down-dog-list");
  for(let liLink of dogLinks) {
    ul.appendChild(liLink);
  }
}

function handleEnter() {
  let h3 = document.getElementsByTagName("h3");
  h3[0].addEventListener("mouseover", (e) => {
    
  });
}

attachDogLinks();
// handleEnter();
