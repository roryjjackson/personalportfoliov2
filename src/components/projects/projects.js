import React from 'react';
import './projects.css';

function Projects() {

  let projects = [
    {title: "MappedOut", tag: "A platform style web application that allows users to find similar personality professionals and connect via a messaging service and rating system. The algorithm identifies similar persons based on comparing sets of data.", img_url: "https://res.cloudinary.com/dfipoufmj/image/upload/v1685692964/pexels-fauxels-3228812_nmt9yn.jpg", link_url: "https://mappedout.herokuapp.com/", codebase: "https://github.com/roryjjackson/mapped-out"},
    {title: "Adventure Yurts", tag: "A React front-end application that is designed to showcase a start-up's modern wooden yurt design.", img_url: "https://res.cloudinary.com/dfipoufmj/image/upload/v1686303824/image8_urinth.jpg", link_url: "https://adventureyurts.com/", codebase: "https://github.com/roryjjackson/adventureyurts"},
    {title: "Zoe and Cam 2023", tag: "A front-end app with integrated services to make organizing a wedding a breeze", img_url: "https://res.cloudinary.com/dfipoufmj/image/upload/v1669048522/zoe_header_pic_2_nsu9ml.jpg", link_url: "https://zoeandcam2023.com/", codebase: "https://github.com/roryjjackson/zoeandCam2023REACT"},
    {title: "FaceDec", tag: "Full stack rails application that takes an uploaded image from a user and identifies any celebrities in the image. It utilises the Cloudinary Api, PostgreSQL and an external image detection RESTApi.", img_url: "https://res.cloudinary.com/dfipoufmj/image/upload/v1681827781/pexels-alexander-grey-1209843_svkaow.jpg", link_url: "https://rails-face-dec.herokuapp.com/", codebase: "https://github.com/roryjjackson/railsFaceRec"},
    {title: "Blog", tag: "My first full stack project. It's a blog style application that has an intergrated map to display and find posts easily, as well as allowing users to interact with other users", img_url: "https://res.cloudinary.com/dfipoufmj/image/upload/v1681827598/pexels-miguel-a%CC%81-padrin%CC%83a%CC%81n-1111370_q8bkvh.jpg", link_url: "https://basicblogtemplate.herokuapp.com/", codebase: "https://github.com/roryjjackson/rails-blog"},
    {title: "Personal Portfolio", tag: "The source code on github for the site you're currently browsing", img_url: "https://res.cloudinary.com/dfipoufmj/image/upload/v1675731943/pexels-geoff-duke-365717_hftrjq.jpg", link_url: "https://github.com/roryjjackson/personalportfoliov2", codebase: "https://github.com/roryjjackson/personalportfoliov2"},

  ]
  return (
      <div className='projects-container' id="projects">
          {projects.map(project => {
            return(
              <div className='standard-block projects' style={{backgroundImage: `linear-gradient(rgba(0,0,0,0.6),rgba(0,0,0,00)),url(${project.img_url})`}}>
                <a href={project.link_url} target="_blank" rel="noopener noreferrer" className='projects-a'>
                  <h2>{project.title}</h2>
                  <p>{project.tag}</p>
                </a>
                <button className='codebase-button' >
                  <a href={project.codebase} target="_blank" rel="noopener noreferrer">Source Code</a>
                </button>
              </div>
            )
          })}
      </div>
    )
}


export default Projects;
