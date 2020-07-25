const artworksURL= "http://localhost:3000/api/v1/artworks"
const artistsURL= "http://localhost:3000/api/v1/artists"

document.addEventListener("DOMContentLoaded", () =>{
  getArtworks()

  const artistIndexPage= document.querySelector("#artist-index")
  artistIndexPage.addEventListener("click", () => getArtists())

  const newArtistPage= document.querySelector("#new-artist")
  newArtistPage.addEventListener("click", () => showArtistForm())

  const createArtistForm= document.querySelector("#new-artist-form-container")

  createArtistForm.addEventListener("submit", (e) => createFormHandler(e))

  const artworkContainer= document.querySelector("#artwork-container")

  artworkContainer.addEventListener("click", (e) =>{
    const id = e.target.dataset.id;
    const artwork = Artwork.findById(id);
    likes(e, artwork)
  })


});

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

function showArtistForm() {

    const newForm = `
    <form id="create-artist-form" style="">
    <h2>Add an Artist</h2>
    <label for="name">Name:</label>
    <input id="input-name" type="text" name="name" value="" class="input-text">
    <br><br>
    <label for="biography">Biography:</label>
    <textarea id="input-biography" name="Biography:" value=""></textarea>
    <br><br>
    <input id="create-button" type="submit" name="submit" value="Add Artist" class="submit">
    </form>
    `

    document.getElementById("new-artist-form-container").innerHTML += newForm

  }

  function likes(e, artwork){
    e.preventDefault()
    let updateLikes = parseInt(artwork.likes + 1)

    fetch(`http://localhost:3000/api/v1/artworks/${artwork.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"

      },
      body: JSON.stringify({
        likes: updateLikes
      })
    })
    .then(res => res.json())
    .then(updatedArtwork => updatedArtwork.remove(updateArtwork.likes))

    document.getElementById("Likes").innerHTML = updateLikes
  }
