import React from 'react';
import './projects.css';

function Projects() {

  let projects = [
    {title: "something", tag: "something else to describe", img_url: "https://res.cloudinary.com/dfipoufmj/image/upload/v1677670035/pexels-oleksandr-pidvalnyi-345522_mbe3vi.jpg", link_url: ""},
    {title: "something", tag: "something else to describe", img_url: "https://res.cloudinary.com/dfipoufmj/image/upload/v1677670035/pexels-oleksandr-pidvalnyi-345522_mbe3vi.jpg", link_url: ""},
    {title: "something", tag: "something else to describe", img_url: "https://res.cloudinary.com/dfipoufmj/image/upload/v1677670035/pexels-oleksandr-pidvalnyi-345522_mbe3vi.jpg", link_url: ""},
    {title: "something", tag: "something else to describe", img_url: "https://res.cloudinary.com/dfipoufmj/image/upload/v1677670035/pexels-oleksandr-pidvalnyi-345522_mbe3vi.jpg", link_url: ""},
    {title: "something", tag: "something else to describe", img_url: "https://res.cloudinary.com/dfipoufmj/image/upload/v1677670035/pexels-oleksandr-pidvalnyi-345522_mbe3vi.jpg", link_url: ""}
  ]
  return (
      <div className='projects-container'>
        <div>
          {projects.map(project => {
            return(
              <div className='standard-block projects' style={{backgroundImage: `url(${project.img_url})`}}>
                <h2>{project.title}</h2>
                <p>{project.tag}</p>
                <p>{project.link_url}</p>
              </div>
            )
          })}
        </div>
      </div>
    )
}


export default Projects;
