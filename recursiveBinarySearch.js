class RecursiveBinarySearch{
    constructor(){
        this.dataArray= [33,45,56,67,71,89,98];
        this.start = 0;
        this.end = this.dataArray.length-1;
        this.position=null;
        this.element = 67;
        this.midPoint = Math.floor((this.start + this.end)/2);
    }
    getBinarySearch(array,start,end){
      if(array[this.midPoint]===this.element){
        this.position = this.midPoint;
        return;
      } else if(array[this.midPoint]<this.element){
         this.getBinarySearch(this.dataArray,this.midPoint+1,this.end);
      } else {
        this.getBinarySearch(this.dataArray,this.start,this.midPoint-1);
      }
    }
}

const recursiveBinarySearchObj = new RecursiveBinarySearch();

module.exports = recursiveBinarySearchObj;