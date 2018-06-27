import React from "react";
import Picture from "./image.jpg"

const Caption = {
    margin: '15px'
}

const Img = {
  maxWidth: '100%',
  display: 'block', 
  height: 'auto',
  margin: 'auto'
}
 const ImgDiv = {
  margin: '-5px',
  marginTop: '20px',
  width: '100%',
  border:'5px solid white',
  background: 'white'
}

class Image extends React.Component{
    render() {
        return (
            <div style={ImgDiv} >
            <img style={Img} src={Picture} />
            <p style={Caption} >Dr. Norman Borlaug, second from left, trains biologists in Mexico on how to increase wheat yields - part of his life-long war on hunger. </p>
            </div>
        )
    }
}

export default Image;