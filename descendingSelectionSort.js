class DscSelectionSort {
    constructor(){
        this.arrayElement = [34,12,45,3,90,40,11];
        this.minPosition=null;
    }
    selectionSort(arrayData, minPosition){
        for(let i=0;i<arrayData.length;i++) {
            minPosition=i;
            for(let j=i+1;j<arrayData.length;j++) {
                if(arrayData[j]>arrayData[minPosition]){
                    minPosition=j;
                }
            }
            let tempVar = arrayData[minPosition];
            arrayData[minPosition]=arrayData[i];
            arrayData[i]=tempVar; 
        }
        return arrayData;
    }
}
const dscSelectionSort = new DscSelectionSort();
module.exports =  dscSelectionSort;