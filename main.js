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
let newLinks;
document.querySelector("#check").addEventListener("click", () => {
  const arrLinks = text.split("\n");
    newLinks = arrLinks.map((item) => {
    const idGif = item.split("-").reverse();
    const url = `https://i.giphy.com/media/${idGif[0]}/giphy.gif`;
    const gifImg = document.createElement("img");
    gifImg.className = "gif"
    gifImg.src = url;
    gifImg.style.height = "150px";
    document.querySelector("#gif-check").appendChild(gifImg);
  });

 


  isClicked("#check");
});

document.querySelector("#download").addEventListener("click", () => {
  let a = document.createElement("a");
  a.href = "data:application/octet-stream," + encodeURIComponent(newLinks);
  a.download = "nordvpnaccount.zip";
  a.click();
});



function isClicked(id) {
  document.querySelector(id).disabled = true;
}
