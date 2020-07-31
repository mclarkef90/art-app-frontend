class Artist {
  constructor(artist, artistAttributes){
    this.id = artist.id
    this.name= artistAttributes.name
    this.biography = artistAttributes.biography
    Artist.all.push(this)
  }

  renderArtistCard(){
    return `
    <div data-id=${this.id}>
    <div class="accordion" id="accordion">
      <div class="card">
      <div class="card-header" id="headingOne">
      <h1>${this.name}</h1>
      <h2 class="mb-0">
        <button class="btn btn-link btn-block text-left" type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
          Biography
        </button>
      </h2>
    </div>

      <div id="collapseOne" class="collapse" aria-labelledby="headingOne" data-parent="#accordion">
        <div class="card-body">
        ${this.biography}
        </div>
      </div>
    </div>
    </div>`
  }

renderUpdateForm() {
    return `
    <form data-id=${this.id}>
      <label>Name</label>
      <p>
        <input type="text" value="${this.name}" />
      </p>
      <label>Biography</label>
      <p>
        <textarea>${this.biography}</textarea>
      </p>
      <button type='submit'>Save Changes</button>
    </form>
  `;
  }

  static findById(id) {
    return this.all.find(artist => artist.id === id);
  }

}

Artist.all= []
