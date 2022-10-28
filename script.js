// Handles loading the events for <model-viewer>'s slotted progress bar
const onProgress = (event) => {
  const progressBar = event.target.querySelector('.progress-bar');
  const updatingBar = event.target.querySelector('.update-bar');
  updatingBar.style.width = `${event.detail.totalProgress * 100}%`;
  if (event.detail.totalProgress === 1) {
    progressBar.classList.add('hide');
  } else {
    progressBar.classList.remove('hide');
    if (event.detail.totalProgress === 0) {
      event.target.querySelector('.center-pre-prompt').classList.add('hide');
    }
  }
};
document.querySelector('model-viewer').addEventListener('progress', onProgress);

// document.addEventListener('wheel',function (event){
//   //only vertical scroll
//   if (event.deltaY > 0)
//   {
//     event.preventDefault();
//     smoothScroll(document.documentElement,100,1000)
//   }

function smoothScroll (domElement,pixel,delay)
{
  const intervalToRepeat = 25;
  const step = (intervalToRepeat * pixel) / delay;
  if ( step < pixel)
  {
    domElement.scrollTop += step;
    setTimeout(function (){
      smoothScroll(domElement,pixel - step,delay)
    },intervalToRepeat);
  }
  
  
}