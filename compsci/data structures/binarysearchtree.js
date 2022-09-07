const _selectionSort = function(arr){
    let newArr = []
    while(newArr.length !== arr.length){
        let smallest
        for(let elem of arr){
            if(newArr.includes(elem)){
                continue
            }
            else if(!smallest || smallest === 0){
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
        root = arr[0] || arr[0] === 0 ? Node(arr[0]) : null
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
        let cache = [this.root]
        while(cache.length !== 0){
            let searching = cache[0];
            if(searching.left){cache.push(searching.left)}
            if(searching.right){cache.push(searching.right)}
            visited.push(cache.shift())
            visited.filter(elem => elem !== null)
        }
        return callback ? visited.map(elem => callback(elem)) : visited

    }
    
    const depthSearch = function(rootNode=this.root,mode='pre',callback){
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

    const find = function(value){
        const check = function(element){
            if(element.data === value){
                return element
            }
        }
        const result = breadthSearch(check).filter(elem => elem !== undefined)[0]
        return result || result === 0 ? result : 'Not Found'
    }

    const insert = function(value,targetElement=this.root){
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

    const del = function(targetElement=this.root){
        
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
                if(targetElement === this.root){
                    Object.assign(this.root,replacement)
                }
                return  
            }
            else if(replacement.right === null){
                replacement.right = targetElement.right
                if(targetElement === this.root){
                    Object.assign(this.root,replacement)
                }
                return
            }
        }    
        else if(targetElement.left){
            let replacement = _checkRight(targetElement.left)
            replacement.right = targetElement.right
            if(replacement === targetElement.left){
                if(targetElement === this.root){
                    Object.assign(this.root,replacement)
                }
                return  
            }
            else if(replacement.left === null){
                replacement.left = targetElement.left
                if(targetElement === this.root){
                    Object.assign(this.root,replacement)
                }
                return
            }
        }
        else {               
            if(targetElement === this.root){
                this.root = null
            }
            targetElement = null    
        }
    

    }

    const depth = function(target=this.root,currentElement=this.root){
        let depthLevel = []

        const depthChecker = function(target,currentElement,currentCount){
            if(target === currentElement){
                return currentCount
            }
            else if(currentElement === null){
                return
            }
            else {
                if(!depthLevel.includes(currentCount)){
                    depthLevel.push(currentCount)
                }
                let next = ++currentCount
                let left = depthChecker(target,currentElement.left,next)
                let right = depthChecker(target,currentElement.right,next)
                if(left){
                    return left
                }
                else if(right){
                    return right
                }    
            }

        }
        let depthCount = 0
        depthLevel = [depthCount]

        if(target === currentElement){
            return depthCount
        }
        return depthChecker(target,currentElement,depthCount)
            
            
    }

    const height = function(node=this.root){
        let nodeHeight = 0
        if(node === null){
            return nodeHeight
        }
        else if(node.left === null && node.right === null){
            return nodeHeight
        }
        else{
            nodeHeight++
            let left = height(node.left)
            let right = height(node.right)
            if(left > 0 && right > 0){
                nodeHeight +=  left > right ? left : right
                return nodeHeight
            }
            nodeHeight += left + right
            return nodeHeight 
        }

    }

    const isBalanced = function(){
        let nodes = this.breadthSearch()
        for(let node of nodes){
            const leftHeight = this.height(node.left)
            const rightHeight = this.height(node.right)
            let diff = leftHeight - rightHeight < 0 ? rightHeight - leftHeight : leftHeight - rightHeight
            if(diff <= 1)
            {
                continue
            }
            else{
                return false
            }
        }
        return true
    }

    const rebalance = function(){
        let nodes = _selectionSort(this.breadthSearch().map(node => node.data))
        this.root = buildTree(nodes)
        return this.root

    }

    return {
        root,
        depthSearch,
        breadthSearch,
        depth,
        find,
        height,
        insert,
        del,
        isBalanced,
        rebalance
    }
}
    

    
    
    
    





