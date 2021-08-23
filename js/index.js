const $video = document.querySelector('#video')
const $play = document.querySelector('#play')
const $pause = document.querySelector('#pause')
const $backward = document.querySelector('#backward')
const $forward = document.querySelector('#forward')
const $volume = document.querySelector('#volume')

$play.addEventListener('click', handlePlay)
function handlePlay(){
    $video.play()
    $play.hidden = true
    $pause.hidden = false
    console.log('le diste click al play')
}
$pause.addEventListener('click',handlePause)
function handlePause(){
    $video.pause()
    $play.hidden = false
    $pause.hidden = true
    console.log('le diste click al pausa')
}
$backward.addEventListener('click', handleBackward)
function handleBackward(){
    $video.currentTime -=10
    console.log('atrás 10 segundos', $video.currentTime)

}
$forward.addEventListener('click', handleForward)
function handleForward(){
    $video.currentTime +=10
    console.log('adelante 10 segundos',$video.currentTime)

}
const $progress = document.querySelector('#progress')
$video.addEventListener('loadedmetadata', handleLoaded)
$video.addEventListener('timeupdate', handleTimeUpdate)
function handleLoaded(){
    $progress.max = $video.duration
    console.log('ha cargado mi video', $video.duration)
}
function handleTimeUpdate(){
    $progress.value = $video.currentTime
}
$progress.addEventListener('input', handleInput)
function handleInput(){
    $video.currentTime = $progress.value
    console.log($progress.value)
}
$volume.addEventListener('change', handleVolume )
function handleVolume(a){
    $video.volume = a.currentTarget.value / 100;
}