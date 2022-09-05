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
        root = arr[0] ? Node(arr[0]) : null
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
    let root = buildTree(arr)

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

    const insert = function(value,targetElement=root){
            if(targetElement.data === value){
                return
            }
            else if(targetElement.data > value){
                if(targetElement.left){
                    insert(value,targetElement.left)
                }
                else if(targetElement.left === null){
                    targetElement.left = Node(value)
                }
                else {
                    console.log(`Error : target.left is ${targetElement.left.toString()}`)

                }
            }
            else if(targetElement.data < value){
                if(targetElement.right){
                    insert(value,targetElement.right)
                }
                else if(targetElement.right === null){
                    targetElement.right = Node(value)
                }
                else {
                    console.log(`Error : target.right is ${targetElement.right.toString()}`)

                }
            }
    }

    const del = function(targetElement=root){
        
        let _checkLeft = function(target,parent){
            if(target.left === null){
                if(parent){
                    if(target.right === null){
                        parent.left = null
                    }
                    else{
                        parent.left = target.right
                        target.right = null
                    }
                    
                }
                return target
            }
            else{
                return _checkLeft(target.left,target)
            }
        }

        let _checkRight = function(target,parent){
            if(target.right === null){
                if(parent){
                    if(target.left === null){
                        parent.right = null
                    }
                    else{
                        parent.right = target.left
                        target.left = null
                    }
                }
                return target
            }
            else{
                return _checkRight(target.right,target)
            }
        }

        if(targetElement.right){
            let replacement = _checkLeft(targetElement.right)
            replacement.left = targetElement.left
            if(replacement === targetElement.right){
                if(targetElement === root){
                    Object.assign(root,replacement)
                }
                return  
            }
            else if(replacement.right === null){
                replacement.right = targetElement.right
                if(targetElement === root){
                    Object.assign(root,replacement)
                }
                return
            }
        }    
        else if(targetElement.left){
            let replacement = _checkRight(targetElement.left)
            replacement.right = targetElement.right
            if(replacement === targetElement.left){
                if(targetElement === root){
                    Object.assign(root,replacement)
                }
                return  
            }
            else if(replacement.left === null){
                replacement.left = targetElement.left
                if(targetElement === root){
                    Object.assign(root,replacement)
                }
                return
            }
        }
        else {               
            targetElement = null
                
        }
    

    }

    return {
        root,
        depthSearch,
        breadthSearch,
        insert,
        del
    }
}

let boo = Tree([1,2,3,4,5,6])
console.log(boo.root)
boo.del()
boo.del()
console.log(boo.root)





