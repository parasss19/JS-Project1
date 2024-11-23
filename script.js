//Logic building steps

//STEP-1 first select the whole body and apply keydown eventlistener Here i got all the info of the pressed key and also the keycode
// const body = document.body
// body.addEventListener("keydown", (e)=>{
//     console.log(e)
//     console.log(e.keyCode)
// })

//STEP-2 selecting the audio with associated key value 
// window.addEventListener("keydown", (e) => {
//     const audiokey = document.querySelector(`audio[data-key="${e.keyCode}"]`)   
//     //console.log(audiokey)
//     audiokey.play()   
// })


//STEP-3 But one problem with 2 is when we press F key it does not immediately start over the sound but it only play when first sound is over
// window.addEventListener("keydown", (e) => {
//     const audiokey = document.querySelector(`audio[data-key="${e.keyCode}"]`)   
//     if(!audiokey) return         //check statement = if other than defined data-key is pressed than nothing happen it stop the callback fun(Exit if no audio for the pressed key)
//     audiokey.currentTime = 0;    //this line will solve our problem(Rewind audio to the start)
//     audiokey.play()          
// })


//MAIN CODE
window.addEventListener("keydown", (e) => {
    const audiokey = document.querySelector(`audio[data-key="${e.keyCode}"]`)   
    if(!audiokey) return        
    audiokey.currentTime = 0;   
    audiokey.play() 
    
    //Now i want to add animation effect when key is pressed(by adding playing class on each key)
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`)    //here we use 'key' class with its data-key attribute value for selecting each div
    if (!key) return;   // Exit if no matching key element
    
    key.classList.add("playing")    //add playing class 

    //Remove 'playing' class after the animation
    //if we use setTimeout to remove playing class we have to keep one thing in mind that the time duration of setTimout(150ms) and duration of transition should be same
    setTimeout(()=>{
      key.classList.remove("playing")
    },150) 
})