public function bubbleSort(array: number[]): number[] {
    //Complexidade O(N^2)
    
    for(let i = 0; i < array.length; i++) {
        for(let j = 0; j < array.length - 1 - i; j++) {

            if(array[j] > array[j + 1]) {
                let swap = array[j];
                array[j] = array[j + 1];
                array[j + 1] = swap;
            }
        }
    }
    return array;
}
