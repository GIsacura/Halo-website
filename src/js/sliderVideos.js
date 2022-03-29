const sliderContainer = document.querySelector("#slider");
const currentContainer = document.querySelector("#current");
const videosContainer = document.querySelector("#videos-container");
const bNext = document.querySelector("#next");
const bPrev = document.querySelector("#prev");
let current = 0;

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

const renderCurrentVideo = (id) => {
  currentContainer.innerHTML = `<iframe width="100%" height="713" src="https://www.youtube.com/embed/${id}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;
}

const renderVideos = () =>{
  const html = videos.map((video, index) => {
    return `
      <div class="item">
        <a href="#" data-id="${index}">
          <img src="https://img.youtube.com/vi/${video.id}/mqdefault.jpg"/>
        </a>
      </div>
    `
  })

  videosContainer.innerHTML = html.join("")
}


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

renderCurrentVideo(videos[current].id);
renderVideos()

document.querySelectorAll(".item a").forEach((item) => {
  item.addEventListener("click", (e) => {
    e.preventDefault();
    const id = parseInt(item.getAttribute("data-id"));
    current = id;
    renderCurrentVideo(videos[current].id)
  })
})
