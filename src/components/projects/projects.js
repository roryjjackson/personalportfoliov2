import React from 'react';
import './projects.css';

function Projects() {

  let projects = [
    {title: "Zoe and Cam 2023", tag: "A react app built to handle various functions such as RSVP", img_url: "https://res.cloudinary.com/dfipoufmj/image/upload/v1669048522/zoe_header_pic_2_nsu9ml.jpg", link_url: "https://zoeandcam2023.com/"},
    {title: "FaceDec", tag: "Full stack rails/react application that interacts with multiple apis to give information about a celebrity", img_url: "https://res.cloudinary.com/dfipoufmj/image/upload/v1681827781/pexels-alexander-grey-1209843_svkaow.jpg", link_url: ""},
    {title: "Accounting", tag: "An express/react full stack application, that handles deposits and withdrawals to a bank account using an external accounting api", img_url: "https://res.cloudinary.com/dfipoufmj/image/upload/v1681827428/pexels-olia-danilevich-5466820_fovhjh.jpg", link_url: ""},
    {title: "Giphy", tag: "My first project getting used to using APIs. I impleneted a simple app where you can search through and find funny gifs", img_url: "https://res.cloudinary.com/dfipoufmj/image/upload/v1681827477/pexels-mark-glancy-1564506_kpjyoq.jpg", link_url: ""},
    {title: "Blog", tag: "My first full stack project, this implements a blog style app where all crud actions are available, as well as displaying on a map service for easier use", img_url: "https://res.cloudinary.com/dfipoufmj/image/upload/v1681827598/pexels-miguel-a%CC%81-padrin%CC%83a%CC%81n-1111370_q8bkvh.jpg", link_url: "https://basicblogtemplate.herokuapp.com/"},
    {title: "roryjjackson.com", tag: "My personal portfolio code base", img_url: "https://res.cloudinary.com/dfipoufmj/image/upload/v1669281725/pexels-kelly-13766418_etqld7.jpg", link_url: ""},
  ]
  return (
      <div className='projects-container' id="projects">
          {projects.map(project => {
            return(
              <a href={project.link_url} target="_blank" rel="noopener noreferrer" className='projects-a'>
                <div className='standard-block projects' style={{backgroundImage: `linear-gradient(rgba(0,0,0,0.6),rgba(0,0,0,00)),url(${project.img_url})`}}>
                  <h2>{project.title}</h2>
                  <p>{project.tag}</p>
                </div>
              </a>
            )
          })}
      </div>
    )
}


export default Projects;
