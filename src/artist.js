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
    <h2>${this.name}</h2>
    <p>${this.biography}</p>
    </div>`
  }

}

Artist.all= []
