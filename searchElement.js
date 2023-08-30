function searchElement(position){
    let arr=[90,45,33,21,99,45,23,67];
    for(let inx=0;inx<arr.length;inx++) {
        if(inx===position){
            return arr[inx];
        } else {
            return 'Outside of scope. Enter a valid position';
        }
    }
}
module.exports = searchElement;