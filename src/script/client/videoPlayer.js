export const player = document.querySelector('#video')

export async function start() {
    const constraint = { video: true }
  
    try{
      let video = await navigator.mediaDevices.getUserMedia(constraint)
      player.srcObject = video
      player.onloadedmetadata = () => {
        player.play()
      }
    } catch(e){
      console.error(e)
    }
}