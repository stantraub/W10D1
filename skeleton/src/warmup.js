
const partyHeader = document.getElementById('party'); 
export const htmlGenerator = (string, htmlElement) => {
  let children = Array.from(htmlElement.childNodes);
  if (children.length > 0) {
    htmlElement.removeChild(children[0]);
  }

  var element = document.createElement("p"); 
  element.innerHTML = string; 
  htmlElement.append(element);
};

// htmlGenerator('Party Time.', partyHeader);