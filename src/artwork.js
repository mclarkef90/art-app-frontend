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
        <div id= "${this.id}">
        <img src="${this.image_url}" class="card-img-top" alt="...">
        <h5 class="card-title">${this.title}</h5>
        <div class="card-body">
          <p class="card-text">
            ${this.artist.name}<br>
            ${this.year}<br></p>
            <div id="Likes">Likes: ${this.likes}</div>

            <h2 class="mb-0">
              <button class="btn btn-link btn-block text-left" type="button" data-toggle="collapse" data-target="#collapse${this.id}" aria-expanded="true" aria-controls="collapseOne">
                Learn More
              </button>
            </h2>

            <div id="collapse${this.id}" class="collapse" aria-labelledby="headingOne" data-parent="#accordion">
              <div class="card-body">
                ${this.description}</div>
            </div>

            <div class="d-flex justify-content-between align-items-center">
          </div>
        </div>
      </div>
    </div>`
  }

  renderUpdateForm() {
      return `
      <form data-id=${this.id}>
        <label>Title</label>
        <p>
          <input type="text" id= "update-title" value="${this.title}" />
        </p>
        <label>Year</label>
        <p>
          <input type="text" id= "update-year" value="${this.year}" />
        </p>
        <label>Image URL</label>
        <p>
          <input type="text" id= "update-image" value="${this.image_url}" />
        </p>
        <label>Description</label>
        <p>
          <textarea id="update-description">${this.description}</textarea>
        </p>
        <button type='submit'>Save Changes</button>
      </form>
    `;
    }

  static findById(id) {
    return this.all.find(artwork => artwork.id === id);
  }
}

Artwork.all= []
