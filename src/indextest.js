const artworksURL= "http://localhost:3000/api/v1/artworks"
const artistsURL= "http://localhost:3000/api/v1/artists"
const artworkContainer = document.querySelector('#artwork-container')
const artistContainer = document.querySelector('#artist-container')
const createArtistForm= document.querySelector("#new-artist-form-container")
const showArt= document.querySelector("#showArt")
const showArtists= document.querySelector("#showArtists")
const showForm= document.querySelector("#showForm")

let artists= false
let art= false
let form= false

showArt.addEventListener('click', () => {
  art = !art
  getArtworks()
  if (art) {
    artworkContainer.style.display = 'auto';
    artistContainer.style.display = 'none';
    createArtistForm.style.display = 'none';
    }
  else {
    artworkContainer.style.display = 'none'
  }
})

showArtists.addEventListener('click', () => {
  artists = !artists

  getArtists()
  if (artists) {
    artistContainer.style.display = 'block';
    artworkContainer.style.display = 'none';
    createArtistForm.style.display = 'none';
    }
  else {
    artistContainer.style.display = 'none'
  }
})

showForm.addEventListener('click', () => {
  form = !form
  showArtistForm()
  if (form) {
    createArtistForm.style.display = 'block';
      artworkContainer.style.display = 'none';
      artistContainer.style.display = 'none';
    }
  else {
    createArtistForm.style.display = 'none'
  }
})




//
  const create= document.querySelector("#create-button")

  createArtistForm.addEventListener("submit", (e) => createFormHandler(e))
//
//   const artworkContainer= document.getElementById("artwork-container")
//     artworkContainer.addEventListener("click", (e) =>{
//       console.log("hi")
//       const id = e.target.dataset.id;
//       const artwork = Artwork.findById(id);
//       likes(e, artwork)
//   })
//
//
// });

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
   .then(artist => {console.log(artist);



     const artistDisplay= `
     <br>
      <h3>New Artist Added!</h3>
      <div data-id=${artist.Id}>
      <p>${artist.name}</p>
      <p>${artist.biography}</p>
      </div>`

   document.querySelector('#show-created-artist').innerHTML += artistDisplay

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
//
//   function likes(e, artwork){
//     e.preventDefault()
//     let updateLikes = parseInt(artwork.likes + 1)
//
//     fetch(`http://localhost:3000/api/v1/artworks/${artwork.id}`, {
//       method: "PATCH",
//       headers: {
//         "Content-Type": "application/json",
//         Accept: "application/json"
//
//       },
//       body: JSON.stringify({
//         likes: updateLikes
//       })
//     })
//     .then(res => res.json())
//     .then(
//     document.getElementById("Likes").innerHTML = updateLikes)
//   }
