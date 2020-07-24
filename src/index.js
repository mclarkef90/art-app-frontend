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

      let newArtwork= new Artwork(artwork, artwork.attributes)

      document.querySelector('#artwork-container').innerHTML += newArtwork.renderArtworkCard()
    });
  })
}

function getArtists(){
  fetch(artistsURL)
  .then(response => response.json())
  .then(artists => {
    artists.data.forEach(artist => {

      let newArtist= new Artist(artist, artist.attributes)

    document.querySelector('#artist-container').innerHTML += newArtist.renderArtistCard()
  });
  })
}

function createFormHandler(e){
  e.preventDefault();
  const artistName= document.querySelector("#input-name").value
  const artistBio= document.querySelector("#input-biography").value
  postFetch(artistName, artistBio)
}

function postFetch(name, biography) {
  const bodyData= {name, biography}
  fetch(artistsURL, {
     method: "POST",
     headers: {'Content-Type': 'application/json'},
     body: JSON.stringify(bodyData)
   })
   .then(response => response.json())
   .then(artist => {

     // const artistName= artist.name
     // const artistBio= artist.biography
     // const artistId= artist.id

     const artistDisplay= `
      <div data-id=${artist.Id}>
      <h2>${artist.name}</h2>
      <p>${artist.biography}</p>
      </div>`

   document.querySelector('#artist-container').innerHTML += artistDisplay
  })
}
