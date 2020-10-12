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
    document.querySelector('.carousel-wrapper').append(carousel)
  })
}

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