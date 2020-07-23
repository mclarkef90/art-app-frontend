const artworksURL= "http://localhost:3000/api/v1/artworks"

document.addEventListener("DOMContentLoaded", () =>{
  getArtworks()
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
