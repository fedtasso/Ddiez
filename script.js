/* *********Menu*********/
((d) => {
  const $btnMenu = d.querySelector(".menu-btn"),
    $menu = d.querySelector(".menu");

  $btnMenu.addEventListener("click", (e) => {
    $btnMenu.firstElementChild.classList.toggle("none");
    $btnMenu.lastElementChild.classList.toggle("none");
    $menu.classList.toggle("is-active");
  });

  d.addEventListener("click", (e) => {
    if (!e.target.matches(".menu a")) return false;

    $menu.classList.remove("is-active");
    $btnMenu.firstElementChild.classList.remove("none");
    $btnMenu.lastElementChild.classList.add("none");
  });
})(document);

// pasar var link como variable externa y extraer el ultimo numero.
// Luego template estring para eliminar el video container seleccionado.
// Luego if o swich para que pegue el iframe segun el valor del link

const videoContainers = {
  "video-container-1":
    "https://www.youtube-nocookie.com/embed/fqGvcD2QXDI?si=X4xzfifJCB5clMwZ&autoplay=1",
  "video-container-2":
    "https://www.youtube.com/embed/KF4Q5TxzdFc?si=QhPjB0divWS3mre6&autoplay=1",
  "video-container-3":
    "https://www.youtube-nocookie.com/embed/fqGvcD2QXDI?si=X4xzfifJCB5clMwZ&autoplay=1",
  "video-container-4":
    "https://www.youtube.com/embed/KF4Q5TxzdFc?si=QhPjB0divWS3mre6&autoplay=1",
};

function showVideo(videoContainerNumero) {
  // console.log(link);
  link = document.getElementById(videoContainerNumero);

  // Elimina la etiqueta <a>
  link.innerHTML = "";

  // Crea y añade el iframe
  let iframe = document.createElement("iframe");
  iframe.width = "560";
  iframe.height = "315";
  iframe.src = videoContainers[videoContainerNumero];
  iframe.title = "YouTube video player";
  iframe.frameBorder = "0";
  iframe.allow =
    "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share";
  iframe.allowFullscreen = true;
  document.getElementById(videoContainerNumero).appendChild(iframe);
}
