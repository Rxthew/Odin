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
        let pivot = parseInt(prepped.length/2)
        root = Node(prepped[pivot])
        root.left = buildTree(prepped.slice(0,pivot))
        root.right = buildTree(prepped.slice(pivot + 1,))
        return root
    }
    
}

const Tree = function(arr){
    const root = buildTree(arr)

    const breadthSearch = function(callback){
        let visited = []
        let cache = [root]
        while(cache.length !== 0){
            let searching = cache[0];
            if(searching.left){cache.push(searching.left)}
            if(searching.right){cache.push(searching.right)}
            visited.push(cache.shift())
            visited.filter(elem => elem !== null)
        }
        return callback ? visited.map(elem => callback(elem)) : visited

    }
    
    const depthSearch = function(rootNode=root,mode='pre',callback){
        let visited = [rootNode]
        if(rootNode.left === null && rootNode.right === null){
            return  visited
        }
        else {
            let left = callback ? depthSearch(rootNode.left,mode,callback) : depthSearch(rootNode.left,mode)
            let right = callback ? depthSearch(rootNode.right,mode,callback) : depthSearch(rootNode.right,mode)
            
            left = left.filter(elem =>  elem !== null)
            right = right.filter(elem =>  elem !== null)
                switch(mode){
                    case 'pre' : visited = [...visited, ...left, ...right]
                    break;
                    case 'in' : visited = [...left, ...visited, ...right]
                    break;
                    case 'post': visited = [...left, ...right,...visited]
                }
            return callback ? visited.map(elem => callback(elem)) : visited
        }
    }

    return {
        root,
        depthSearch,
        breadthSearch,
    }
}







