import '@tensorflow/tfjs-node';
import * as canvas from 'canvas';
import * as faceapi from 'face-api.js';

const { Canvas, Image, ImageData } = canvas
faceapi.env.monkeyPatch({ Canvas, Image, ImageData })

import start, {video} from './webcam.js'

export default function index(){

    Promise.all([
        faceapi.nets.tinyFaceDetector('/models'),
        faceapi.nets.faceLandmark68Net('/models'),
        faceapi.nets.faceRecognitionNet('/models'),
        faceapi.nets.faceExpressionNet('/models'),
    ]).then(start())

    video.onplay = ()=>{
        setInterval(async () =>{
            const detect = await faceapi.detectAllFaces(video, 
            new faceapi.tinyFaceDetectorOptions()).withFaceLandmarks().withFaceExpressions()
            console.log(detect)
        }, 100)
    }

}    