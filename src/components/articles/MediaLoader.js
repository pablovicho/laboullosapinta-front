import { Card } from "react-bootstrap"
export default function MediaLoader({type, extension, media}){
  console.log("media in MediaLoader", media)
    return (

        type === "image" ?

      <Card.Img variant="top"
      src={media}
      className="categoryImage" 
      loading="lazy"/>
         
      : 

         type === "video" ?

        <video variant="top" controls>
          <source src={media} type={`/video/${extension.substring(1)}`}/>
        </video>

          :

type === "audio" ?

      <audio variant="top"
      src={media}
      controls/>    

      : null
    )
}