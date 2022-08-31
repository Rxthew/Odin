const _selectionSort = function(arr){
    let newArr = []
    while(newArr.length !== arr.length){
        let smallest
        for(let elem of arr){
            if(newArr.includes(elem)){
                continue
            }
            else if(!smallest){
                smallest = elem
            }
            else{
                if(smallest > elem){
                    smallest = elem
                }
            }
        }
        newArr.push(smallest)
    }
    newArr = newArr.filter(elem => elem !== undefined)
    return newArr
}

const Node = function(data=null){
    return {
        left : null,
        right : null,
        data
    }
}

const buildTree = function(arr){
    let root
    if(arr.length <= 1){
        root = arr[0] ? Node(arr[0]) : Node()
        Array.isArray(root.data) && root.data.length === 0 ? root.data = null : false
        return root
    }
    else{
        let prepped = _selectionSort(arr)
        root = Node(prepped[prepped.length/2])
        root.left = buildTree(prepped.slice(0,prepped.length/2))
        root.right = buildTree(prepped.slice(prepped.length/2 + 1,))
        return root
    }
    
}

const Tree = function(arr){
    const root = buildTree(arr)
    return root
}






