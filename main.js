
let text;
document.querySelector("#show-content").addEventListener("click", function () {
  let file = document.querySelector("#file-input").files[0];
  let reader = new FileReader();
  reader.addEventListener("load", function (e) {
    text = e.target.result;

    const arrLinks = text.split("\n");
    arrLinks.map((item) => {
      const divLink = document.createElement("div");
      divLink.innerText = `${item}`;
      document.querySelector("#file-contents").appendChild(divLink);
    });
  });
  reader.readAsText(file);

  isClicked("#show-content");
});
let clicked2 = false;
let newLinks = new Array();
document.querySelector("#check").addEventListener("click", () => {
  const arrLinks = text.split("\n");
    arrLinks.map((item) => {
      
    const idGif = item.split("-").reverse();
    const url = `https://i.giphy.com/media/${idGif[0]}/giphy.gif`;
    newLinks.push(url);
    const gifImg = document.createElement("img");
    gifImg.className = "gif"
    gifImg.src = url;
    gifImg.style.height = "150px";
    document.querySelector("#gif-check").appendChild(gifImg);
  });

 


  isClicked("#check");
});

document.querySelector("#download").addEventListener("click", () => {
 
  newLinks.forEach((item, index)=> {
(async () => {
  let a = document.createElement('a');
  let response = await fetch(item);
  let file = await response.blob();
  a.download = `giphy${index}`;
  a.href = window.URL.createObjectURL(file);
  a.dataset.downloadurl = ['application/octet-stream', a.download, a.href].join(':');
  a.click();
})();
  })
});





function isClicked(id) {
  document.querySelector(id).disabled = true;
}


