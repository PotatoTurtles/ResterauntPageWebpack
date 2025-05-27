let contain = document.querySelector('.content');
function removeContent(){
    if(document.querySelector('.cut')){
        contain.removeChild(document.querySelector('.cut'));
    }
}
export default removeContent;