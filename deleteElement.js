function deleteElement(position){
    let arr = [56,89,45,34,21,33,9];
    for(let inx=0;inx<arr.length;inx++) {
        if(position<=inx) {
            arr[inx]=arr[inx+1];
        }
    }
    arr.length = arr.length-1;
    return arr;
}
module.exports = deleteElement;