let jsMenu = document.getElementById('js')

let toggleNav = document.getElementById('js-navbar')

toggleNav.addEventListener('click', function () {
  jsMenu.classList.toggle('active')
})



topURL = "https://api.jikan.moe/v3/top/anime/1/airing"

const topAnime = (animes) => {
  animes.forEach((anime) => {
    let carousel = document.createElement('div')
    let poster = document.createElement('img')
    carousel.classList.add('carousel')
    poster.src = anime.image_url
    poster.classList.add('carousel__photo')
    carousel.appendChild(poster)
    let button = document.createElement('button')
    button.classList.add('trigger')
    button.addEventListener('click', () => userAnime(anime))
    button.appendChild(poster)
    document.querySelector('.carousel-wrapper').append(button)
  })
}

const userAnime = (anime) => {
  let usersDiv = document.createElement('div')
  let favePoster = document.createElement('img')
  favePoster.src = anime.image_url
  let url = favePoster.src 
  localStorage.setItem('url', url)
  favePoster.src = localStorage.getItem('url')
  usersDiv.appendChild(favePoster)
  document.querySelector('.userselected').append(usersDiv)
}


let toggle = () => {
  modal.classList.toggle('show-modal')
}

let windowOnClick = (e) => {
  if (e.target === modal) {
    toggle
  }
}

// // trigger.addEventListener('click', toggleModal);
// closeButton.addEventListener('click', toggleModal)
// window.addEventListener('click', windowOnClick)

const getTop = async () => {
  const topFifty = topURL
  try {
    const response = await axios.get(topFifty)
    topAnime(response.data.top)
    console.log(response)
  } catch (error) {
    console.error(`This is my ${error}`)
  }
}

getTop();

const randomAnime = (anime) => {
  let randomDiv = document.createElement('div')
  randomDiv.classList.add('randomresults')
  let randomPoster = document.createElement('img')
  randomPoster.src = anime.image_url 
  randomDiv.appendChild(randomPoster)
  document.querySelector('.randomlygenerated').append(randomDiv)
}

let animeMin = 1;
let animeMax = 43016;
let result = Math.floor(Math.random() * (animeMax - animeMin + 1) + animeMin)
let malId = result 

randomUrl = `https://api.jikan.moe/v3/anime/${malId}`





const randomAnimu = async () => {
  const randomAnimu = randomUrl;
  try {
    const randomResponse = await axios.get(randomUrl)
    console.log(randomResponse)
    randomAnime(randomResponse.data)

  } catch (error) {
    console.error(`Omae wa mo shinderu. The app is dead thanks to ${error}`)
  }
}

const randomSelect = document.querySelector('#random')
random.addEventListener('click', randomAnime)

randomAnimu()