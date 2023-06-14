import { player } from "./videoPlayer.js";
import { translate } from "./translate.js";

export function draw(){
  
    const canvas = faceapi.createCanvasFromMedia(player)
    document.body.append(canvas)
    
    const displaySize = {width: player.width, height: player.height}
    faceapi.matchDimensions(canvas, displaySize)
  
    setInterval(async () =>{
      const detections = await faceapi.detectAllFaces(
        player,
        new faceapi.TinyFaceDetectorOptions()
      )
      .withFaceLandmarks()
      .withFaceExpressions()

      if(detections.length > 0){
        const faceExpressions = detections[0].expressions.asSortedArray()[0].expression;
        let h1 = document.querySelector('#emocao')
        h1.textContent = 'Expressão atual: '+translate(faceExpressions)
      } else {
        return('none')
      }
  
        const resized = faceapi.resizeResults(detections, displaySize)
  
        canvas.getContext('2d').clearRect(0,0, canvas.width,canvas.height)
  
        faceapi.draw.drawDetections(canvas, resized)
        faceapi.draw.drawFaceLandmarks(canvas, resized)
  
    },100)
  
}