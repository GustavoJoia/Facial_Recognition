import { player } from "./videoPlayer.js"
import { translate } from "./translate.js";

export function expressions(){

  try{
  
    setInterval(async () =>{
      const detections = await faceapi.detectAllFaces(
        player,
        new faceapi.TinyFaceDetectorOptions()
      )
      .withFaceExpressions()

      if(detections.length > 0){
        const faceExpressions = detections[0].expressions.asSortedArray()[0].expression;
        let h1 = document.querySelector('#emocao')
        h1.textContent = 'Expressão atual: '+translate(faceExpressions)
      } else {
        return('none')
      }
        
  
    },100)

  } catch (e){
    console.error(e)
  }
  
}