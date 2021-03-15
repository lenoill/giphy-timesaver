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
document.querySelector("#check").addEventListener("click", () => {
  const arrLinks = text.split("\n");
  arrLinks.map((item) => {
    const idGif = item.split("-").reverse();
    const url = `https://i.giphy.com/media/${idGif[0]}/giphy.gif`;
    const gifImg = document.createElement("img");
    gifImg.src = url;
    document.querySelector("#gif-check").appendChild(gifImg);
  });
  isClicked("#check");
});

function isClicked(id) {
  document.querySelector(id).disabled = true;
}
