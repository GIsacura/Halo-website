const moreOptions = document.querySelector("#bmore");
const bShowMobileLinks = document.querySelector("#bmenu");
const mobileMenu = document.querySelector(".links");
const moreMenu = document.querySelector(".more .menu")

bShowMobileLinks.addEventListener("click", (e) => {
  e.preventDefault();
  mobileMenu.classList.toggle("show"); // En esta linea con el toggle hacemos que si mobileMenu tiene la clase show se la quita y si no la tiene se la coloca
});

moreOptions.addEventListener("click", (e) => {
  e.preventDefault();
  moreMenu.classList.toggle("show");
});

const videos = [
  {
    id:'PyMlV5_HRWk',
  },
  {
    id:'XCbMVbeKlCg',
  },
  {
    id:'Fmdb-KmlzD8',
  },
  {
    id:'lOthvD1rMbQ',
  },
  {
    id:'nXDk86lQhto',
  }
]

const sliderContainer = document.querySelector("#slider");
const currentContainer = document.querySelector("#current");
const videosContainer = document.querySelector("#videos-container");
const bNext = document.querySelector("#next");
const bPrev = document.querySelector("#prev");
let current = 0;

bNext.addEventListener('click', (e) => {
  let changed = current;
  current = current + 1 < videos.length ? current + 1 : current
  if(current !== changed){
    //Esta condicion es para que cuando ya estemos en el ultimo video y current no cambie su valor, no actualice innecesariamente la pagina
    renderCurrentVideo(videos[current].id);
  }
})

bPrev.addEventListener('click', (e) => {
  let changed = current;
  current = current - 1 >= 0 ? current - 1 : current

  if(current !== changed){
    //Esta condicion es para que cuando ya estemos en el primer video y current no cambie su valor, no actualice innecesariamente la pagina
    renderCurrentVideo(videos[current].id);
  }
})

const renderCurrentVideo = (id) => {
  currentContainer.innerHTML = `<iframe width="100%" height="713" src="https://www.youtube.com/embed/${id}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;
}

const renderVideos = () =>{
  const html = videos.map(video => {
    return `
      <div class="item">
        <a href="#">
          <img src="https://img.youtube.com/vi/${video.id}/mqdefault.jpg"/>
        </a>
      </div>
    `
  })

  videosContainer.innerHTML = html.join("")
}

renderCurrentVideo(videos[current].id);
renderVideos()

