import React from 'react'

export default function Home() {
  return (
    <div className="container g-8" style = {{height : "900px"}}>
      <div id="carouselExampleCaptions" className="carousel slide" >
      <div className="carousel-indicators" >
        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
      </div>
      <div className="carousel-inner"  style = {{height : "900px"}}>
        <div className="carousel-item active">
          <img src={'https://st3.depositphotos.com/20063732/33185/i/450/depositphotos_331854428-stock-photo-poor-road-conditions-holes-in.jpg'} className="d-block w-50 h-50" alt="1" />
          <div className="carousel-caption d-none d-md-block">
            <h5>First slide label</h5>
            <p>Some representative placeholder content for the first slide.</p>
          </div>
        </div>
        <div className="carousel-item"  style = {{height : "900px"}}>
          <img src={"https://st4.depositphotos.com/11440342/22355/i/600/depositphotos_223559632-stock-photo-broken-road-potholes-pits-cracks.jpg"} className="d-block w-100" alt="99" />
          <img src={"https://st4.depositphotos.com/11440342/22355/i/600/depositphotos_223559632-stock-photo-broken-road-potholes-pits-cracks.jpg"} className="d-block w-100" alt="99" />
          <div className="carousel-caption d-none d-md-block">
            <h5>Second slide label</h5>
            <p>Some representative placeholder content for the second slide.</p>
          </div>
        </div>
        <div className="carousel-item">
          <img src={"https://st3.depositphotos.com/2977159/12631/i/600/depositphotos_126319494-stock-photo-damaged-road-with-holes.jpg"} className="d-block w-100" alt="100" />
          <div className="carousel-caption d-none d-md-block">
            <h5>Third slide label</h5>
            <p>Some representative placeholder content for the third slide.</p>
          </div>
        </div>
      </div>
      <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
            </div >
            )
}
