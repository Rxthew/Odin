

const mergeSort = function(arr){
    if(arr.length <= 1){
        return arr
    }
    else {
        let left = mergeSort(arr.slice(0,arr.length/2))
        let right = mergeSort(arr.slice(arr.length/2,))
        let sorted = []
        let reference = null
outer:        for(let leftind = 0; leftind < left.length; leftind++){
                    for(let rightind = reference ?? 0; rightind < right.length; rightind++){
                            if(left[leftind] > right[rightind]){
                                sorted = [...sorted,right[rightind]]
                                reference = rightind + 1
                                if(rightind === right.length - 1){
                                    sorted = [...sorted,...left.slice(leftind,)]
                                    break outer
                                }
                            }
                            else {
                                sorted = [...sorted, left[leftind]]
                                if(leftind === left.length - 1){
                                    sorted = [...sorted, ...right.slice(rightind,)]
                                    break 
                                }
                                else {
                                    continue outer
                                }
                                
                                
                            

                            }
                        }
                        
        }
        return sorted

    }

}

const myArr= [634,121,485,859,197,723,386,622]
const myArr2 = [841,178,462,500,219]
const myArr3 = [529,799,449,847,174,799]


console.log(mergeSort(myArr))
console.log(mergeSort(myArr2))
console.log(mergeSort(myArr3))
console.log(mergeSort([1]))
console.log(mergeSort([]))