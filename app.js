var count = 0
var selector = document.querySelector('span')
var h1 = document.querySelector('h1')
function increase(){
    count+=1
    selector.style.color = '#095509'
    h1.style.color = '#095509'
    selector.textContent = count
}
function reset(){
    count = 0
    selector.style.color = "#000"
    h1.style.color = '#000'
    selector.textContent = count
}
function decrease(){
    if(count>0){
        count-=1
        selector.style.color = '#f32d27'
        h1.style.color = '#f32d27'
        if(count==0){
            selector.style.color = '#000'
            h1.style.color = '#000'  
        }
    }
    selector.textContent = count
}