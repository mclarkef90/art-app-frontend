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
    <img src=${this.image_url} height="800" width="800">
    <h2>${this.title}</h2>
    <h3>${this.artist.name}</h3>
    <h3>${this.year}</h3>
    <h3>Likes: ${this.likes}</h3>
    <p>${this.description}</p>
    <button data-id=${this.id}>Edit</button>
    </div>`
  }
}

Artwork.all= []
