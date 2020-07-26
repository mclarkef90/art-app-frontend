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
            ${this.year}<br>

            <div id="Likes">Likes: ${this.likes}</div>

          </p>
          <div class="d-flex justify-content-between align-items-center">
            <div class="btn-group">
              <button type="button" class="btn btn-sm btn-outline-secondary">Learn More</button>
            </div>
            <button id="heart" class="btn btn-link">
            <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-heart" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" d="M8 2.748l-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z"/>
            </svg>
            </button>
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

  static findById(id) {
    return this.all.find(artwork => artwork.id === id);
  }
}

Artwork.all= []
