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
    console.log(this)
    }

  renderArtworkCard(){
    return`
    <div class="col-md-4">
    <div class="card mb-4 shadow-sm">

        <img src="${this.image_url}" class="card-img-top" alt="...">
        <h5 class="card-title">${this.title}</h5>
        <div class="card-body">
          <p class="card-text">
            ${this.artist.name}<br>
            ${this.year}<br></p>
            <div id="Likes">Likes: ${this.likes}</div>
            <button id="like-button" class="btn btn-link" data-id=${this.id}>♡</button>
            <div class="d-flex justify-content-between align-items-center">
          </div>
        </div>
      </div>
    </div>`

  }
  // <div id=artworkCard data-id=${this.id}>
  // <img src=${this.image_url} height="400" width="auto">
  // <h2>${this.title}</h2>
  // <h3>${this.artist.name}</h3>
  // <h3>${this.year}</h3>
  //
  // <label for="likes">Likes:</label>
  // <div id="Likes">${this.likes}</div>
  // <button id="like-button" data-id=${this.id}>Add Like</button>
  // <p>${this.description}</p>
  // <button data-id=${this.id}>Edit</button>
  // </div>

  // <div class="btn-group">
  //   <button type="button" class="btn btn-sm btn-outline-secondary">Learn More</button>
  // </div>

  static findById(id) {
    return this.all.find(artwork => artwork.id === id);
  }

  static artworkTotal(){
    return this.all.length
  }




}

Artwork.all= []
