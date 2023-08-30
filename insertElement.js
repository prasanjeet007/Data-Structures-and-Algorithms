function insertElement(position,element) {
    let arr = [34,56,3,45,67,90,34,85];
    let temp;
    for(let inx=arr.length-1;inx>0;inx--) {
        if(inx>=position){
         arr[inx+1]=arr[inx];
        }
    }
    arr[position]=element
    return arr;
}
module.exports = insertElement;