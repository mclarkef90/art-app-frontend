class Artwork {
  constructor(artwork, artworkAttributes){
    this.id = artwork.id
    this.title= artworkAttributes.title
    this.image_url= artworkAttributes.image_url
    this.year= artworkAttributes.year,
    this.description =artworkAttributes.description
    this.artist= artworkAttributes.artist
    this.likes= artworkAttributes.likes
    Artwork.all.push(this)
    }

  renderArtworkCard(){
    return`
    <div data-id=${this.id}>
    <img src=${this.image_url} height="400" width="auto">
    <h2>${this.title}</h2>
    <h3>${this.artist.name}</h3>
    <h3>${this.year}</h3>

    <label for="likes">Likes:</label>
    <div id="Likes"> ${this.likes}</div>
    <button id="like-button" data-id=${this.id}>Add Like</button>
    <p>${this.description}</p>
    <button data-id=${this.id}>Edit</button>
    </div>`
  }

  static findById(id) {
    return this.all.find(artwork => artwork.id === id);
  }
}

Artwork.all= []
