import React from 'react'
import "./blogstyle.css"
export default function Blog() {
    return (
        <div className="container-fluid">
            <div className="row my-3">
                <div className="col-sm-12">
                <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-indicators crbg">
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="/images/kashmir3.jpg" class="d-block w-100 crosal" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src="/images/kal2.jpg" class="d-block w-100 crosal" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src="/images/kashmir.jpg" class="d-block w-100 crosal" alt="..."/>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
                </div>
            </div>
            <div className="row bgcl">
              <div className="col-l-12">
                <h1>Trip to Azad Kashmir</h1>
              </div>
            </div>
            <div className="row my-3 bgcl">
                <div className="col-md-4 blog">
                    <h3>Muzafarabad</h3>
                   <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam obcaecati neque ipsum quasi sint numquam. Id ullam distinctio, expedita, voluptate assumenda beatae libero illum, perferendis porro cupiditate minus. Voluptate debitis possimus asperiores eveniet vero omnis ipsa iusto</p>
                         <img src="/images/kashmir.jpg" className="imgs img-fluid" alt="" />
                           </div>
                           <div className="col-md-4  my-2 blog">
                    <h3>Kaaran</h3>
                   <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam obcaecati neque ipsum quasi sint numquam. Id ullam distinctio, expedita, voluptate assumenda beatae libero illum, perferendis porro cupiditate minus. Voluptate debitis possimus asperiores eveniet vero omnis ipsa iusto</p>
                   <img src="/images/kal2.jpg" className="imgs img-fluid" alt="" />
                           </div>
                           <div className="col-md-4 my-2 blog">
                    <h3>Sharda</h3>
                   <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam obcaecati neque ipsum quasi sint numquam. Id ullam distinctio, expedita, voluptate assumenda beatae libero illum, perferendis porro cupiditate minus. Voluptate debitis possimus asperiores eveniet vero omnis ipsa iusto</p>
                   <img src="/images/kal3.jpg" className="imgs img-fluid" alt="" />
                           </div>
            </div>
            <div className="row my-3 bgcl">
                <div className="col-md-4  my-2 blog">
                    <h3>Kail</h3>
                   <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam obcaecati neque ipsum quasi sint numquam. Id ullam distinctio, expedita, voluptate assumenda beatae libero illum, perferendis porro cupiditate minus. Voluptate debitis possimus asperiores eveniet vero omnis ipsa iusto</p>
                   <img src="/images/sharda2.jpg" className="imgs img-fluid" alt="" />   
                           </div>
                           <div className="col-md-4  my-2 blog">
                    <h3>Aran kail</h3>
                   <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam obcaecati neque ipsum quasi sint numquam. Id ullam distinctio, expedita, voluptate assumenda beatae libero illum, perferendis porro cupiditate minus. Voluptate debitis possimus asperiores eveniet vero omnis ipsa iusto</p>
                   <img src="/images/kashmir3.jpg" className="imgs img-fluid" alt="" />
                           </div>
                           <div className="col-md-4  my-2 blog">
                    <h3>Ratti Galli</h3>
                   <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam obcaecati neque ipsum quasi sint numquam. Id ullam distinctio, expedita, voluptate assumenda beatae libero illum, perferendis porro cupiditate minus. Voluptate debitis possimus asperiores eveniet vero omnis ipsa iusto</p>
                   <img src="/images/ratti.jpg" className="imgs img-fluid" alt="" />    
                           </div>
            </div>
           <div className="row">
             <div className="col-l-12">
               <h1 className="bg-dark imggall text-white">Images Gallery</h1>
             </div>
           </div>
<div class="row">
  <div class="col-lg-4 col-md-12 mb-4 mb-lg-0">
    <img
      src="/images/ali.jpg"
      class="w-100 shadow-1-strong rounded mb-4"
      alt=""
    />

    <img
      src="/images/ahmad.jpg"
      class="w-100 shadow-1-strong rounded mb-4"
      alt=""
    />
  </div>

  <div class="col-lg-4 mb-4 mb-lg-0">
    <img
      src="/images/ahmad2.jpg"
      class="w-100 shadow-1-strong rounded mb-4"
      alt=""
    />

    <img
      src="/images/ahmad3.jpg"
      class="w-100 shadow-1-strong rounded mb-4"
      alt=""
    />
  </div>

  <div class="col-lg-4 mb-4 mb-lg-0">
    <img
      src="/images/ahmad4.jpg"
      class="w-100 shadow-1-strong rounded mb-4"
      alt=""
    />

    <img
      src="/images/ali2.jpg"
      class="w-100 shadow-1-strong rounded mb-4"
      alt=""
    />
  </div>
</div>

<div class="row">
  <div class="col-lg-4 col-md-12 mb-4 mb-lg-0">
    <img
      src="/images/ali3.jpg"
      class="w-100 shadow-1-strong rounded mb-4"
      alt=""
    />

    <img
      src="/images/ali4.jpg"
      class="w-100 shadow-1-strong rounded mb-4"
      alt=""
    />
  </div>

  <div class="col-lg-4 mb-4 mb-lg-0">
    <img
      src="/images/ali5.jpg"
      class="w-100 shadow-1-strong rounded mb-4"
      alt=""
    />

    <img
      src="/images/ali6.jpg"
      class="w-100 shadow-1-strong rounded mb-4"
      alt=""
    />
  </div>

  <div class="col-lg-4 mb-4 mb-lg-0">
    <img
      src="/images/ali7.jpg"
      class="w-100 shadow-1-strong rounded mb-4"
      alt=""
    />

    <img
      src="/images/ali8.jpg"
      class="w-100 shadow-1-strong rounded mb-4"
      alt=""
    />
  </div>
</div>

        </div>
    )
}
