function selectionSort(arr:number[],n:number){
    let i,j,minIndex,temp
    for(i=0;i<n-1;i++){
        minIndex=i
        for(j=i+1;j<n;j++){
            if(arr[j]<arr[minIndex]){
              minIndex=j
            }
        }
        temp=arr[i]
        arr[i]=arr[minIndex]
        arr[minIndex]=temp

    }
}
export default selectionSort