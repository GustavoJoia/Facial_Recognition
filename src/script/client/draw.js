import { player } from "./videoPlayer.js";
import { write } from "./table.js";

export function draw(){
  
    setInterval(async () =>{

      const detections = await faceapi.detectAllFaces(
        player,
        new faceapi.TinyFaceDetectorOptions()
      )
      .withFaceLandmarks()
      .withFaceExpressions()

      if(detections.length > 0){
        const faceExpressions = detections[0].expressions.asSortedArray()
        write(faceExpressions)
      } else {
        return('none')
      }
  
    },500)
  
}