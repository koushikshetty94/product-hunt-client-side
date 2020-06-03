import React from "react"
import "../styles/aside.css"


function Aside(props) {
  return (
    <div className="aside_Flex">
      <div className="box1">
        <div className="image_Box">
          <img className="image" alt="" src="https://ph-avatars.imgix.net/1456069/original?auto=format&auto=compress&codec=mozjpeg&cs=strip&w=120&h=120&fit=crop" alt="image1" />
          <img className="image" alt="" src="https://ph-avatars.imgix.net/826276/original?auto=format&amp;auto=compress&amp;codec=mozjpeg&amp;cs=strip&amp;w=38&amp;h=38&amp;fit=crop" alt="image1" />
          <img className="image" alt="" src="https://ph-avatars.imgix.net/2422879/original?auto=format&auto=compress&codec=mozjpeg&cs=strip&w=38&h=38&fit=crop" alt="image1" />
          <img className="image" alt="" src="https://ph-avatars.imgix.net/166755/original?auto=format&auto=compress&codec=mozjpeg&cs=strip&w=38&h=38&fit=crop" alt="image1" />
          <img className="image" alt="" src="https://ph-avatars.imgix.net/1903430/original?auto=format&auto=compress&codec=mozjpeg&cs=strip&w=38&h=38&fit=crop" alt="image1" />
          <img className="image" alt="" src="https://ph-avatars.imgix.net/2273447/original?auto=format&auto=compress&codec=mozjpeg&cs=strip&w=38&h=38&fit=crop" alt="image1" />
          <img className="image" alt="" src="https://ph-avatars.imgix.net/1456069/original?auto=format&auto=compress&codec=mozjpeg&cs=strip&w=120&h=120&fit=crop" alt="image1" />
          <img className="image" alt="" src="https://ph-avatars.imgix.net/826276/original?auto=format&amp;auto=compress&amp;codec=mozjpeg&amp;cs=strip&amp;w=38&amp;h=38&amp;fit=crop" alt="image1" />
          <img className="image" alt="" src="https://ph-avatars.imgix.net/2422879/original?auto=format&auto=compress&codec=mozjpeg&cs=strip&w=38&h=38&fit=crop" alt="image1" />
          <img className="image" alt="" src="https://ph-avatars.imgix.net/166755/original?auto=format&auto=compress&codec=mozjpeg&cs=strip&w=38&h=38&fit=crop" alt="image1" />
          <img className="image" alt="" src="https://ph-avatars.imgix.net/1903430/original?auto=format&auto=compress&codec=mozjpeg&cs=strip&w=38&h=38&fit=crop" alt="image1" />
          <img className="image" alt=""src="https://ph-avatars.imgix.net/2273447/original?auto=format&auto=compress&codec=mozjpeg&cs=strip&w=38&h=38&fit=crop" alt="image1" />

        </div>
        <div className="hr"></div>
        <p className="aside_Text">START WORKING NOW</p>
      </div>
      <div>
        <p className="aside_Text2">Product Hunt Radio</p>
      </div>
     
      <div className="box2">
        <div>
          <p className="box2-text"><b>how to grow and monetize communities with Jill Salzman</b></p>
        </div>
        <svg width="35" height="35" viewBox="0 0 35 35" xmlns="http://www.w3.org/2000/svg" className="svg"><g fill="none" fill-rule="evenodd"><path d="M17.5 35C27.165 35 35 27.165 35 17.5S27.165 0 17.5 0 0 7.835 0 17.5 7.835 35 17.5 35zm-3.71-24.57a.906.906 0 0 0-.444.116.925.925 0 0 0-.47.807l-.015 12.892a.923.923 0 0 0 .918.924.918.918 0 0 0 .483-.14L24.8 18.58a.928.928 0 0 0 .001-1.57l-10.526-6.44a.895.895 0 0 0-.483-.14h-.002z" fill="#FFF"></path><path d="M13.79 10.43a.906.906 0 0 0-.444.116.925.925 0 0 0-.47.807l-.015 12.892a.923.923 0 0 0 .918.924.918.918 0 0 0 .483-.14L24.8 18.58a.928.928 0 0 0 .001-1.57l-10.526-6.44a.895.895 0 0 0-.483-.14h-.002z" fill-opacity=".8" fill="#545656"></path></g></svg>
        <img src='https://ph-static.imgix.net/radio/ph_radio_cat.png?auto=format&auto=compress&w=90'/>
      </div>

      <div>
        <form onSubmit={props.onSubmit}>
          <input name="name" onChange={props.handleChange} />
          <input name="description" onChange={props.handleChange}/>
          <input name="image" onChange={props.handleChange}/>
          <input type="submit" />
        </form>
      </div>
   
    </div>

  )

}

export default Aside