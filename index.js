const artworksURL= "http://localhost:3000/api/v1/artworks"
const artistsURL= "http://localhost:3000/api/v1/artists"

document.addEventListener("DOMContentLoaded", () =>{
  getArtworks()
  getArtists()

  const createArtistForm= document.querySelector("#create-artist-form")

  createArtistForm.addEventListener("submit", (e) => createFormHandler(e))
})

function getArtworks() {
  fetch(artworksURL)
  .then(response => response.json())
  .then(artworks => {
    artworks.data.forEach(artwork => {
      //data to get to array
      const artworkDisplay = `
      <div data-id=${artwork.id}>
      <img src=${artwork.attributes.image_url} height="800" width="800">
      <h2>${artwork.attributes.title}</h2>
      <h3>${artwork.attributes.artist.name}</h3>
      <h3>${artwork.attributes.year}</h3>
      <h3>Likes: ${artwork.attributes.likes}</h3>
      <p>${artwork.attributes.description}</p>
      <button data-id=${artwork.id}>Edit</button>
      </div>`

      document.querySelector('#artwork-container').innerHTML += artworkDisplay
    });
  })
}

function getArtists(){
  fetch(artistsURL)
  .then(response => response.json())
  .then(artists => {
    artists.data.forEach(artist => {
      const artistDisplay= `
      <div data-id=${artist.id}>
      <h2>${artist.attributes.name}</h2>
      <p>${artist.attributes.biography}</p>
      </div>`

    document.querySelector('#artist-container').innerHTML += artistDisplay


  });
  })
}

function createFormHandler(e){
  e.preventDefault();
  const artistName= document.querySelector("#input-name").value
  const artistBio= document.querySelector("#input-biography").value
  postFetch(artistName, artistBio)
}

function postFetch(artistName, artistBio) {
  fetch(artistsURL, {
     method: "POST",
     headers: {'Content-Type': 'application/json'},
     body: JSON.stringify({
       name: artistName,
       biography: artistBio,
     })
   })
   .then(response => response.json())
   .then(artist => {console.log(artist)})

      // const artistData= artist.data.attributes
      // const artistDisplay= `
      // <div data-id=${artist.id}>
      // <h2>${artistData.name}</h2>
      // <p>${artistData.biography}</p>
      // </div>`
   //
   // document.querySelector('#artist-container').innerHTML += artistDisplay;

   }
