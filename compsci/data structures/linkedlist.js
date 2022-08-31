const Node = function(value=() => null, next=() => null){
    
    return {
        value,
        next
    }
}

const LinkedList = function(first,...args){

    let listSize = 1
    let headNode = Node(() => first)
    let tailNode = headNode


    const append = function(value){
        if(listSize <= 0){
            return LinkedList(value)
        }
        const newTail = Node(() => value)
        tailNode.next = () => newTail
        tailNode = newTail
        listSize++
        return         
    }

    const prepend = function(value){
        if(listSize <= 0){
            return LinkedList(value)
        }
        const currentHead = headNode
        const newHead = Node(() => value, () => currentHead)
        headNode = newHead
        listSize++
        return
    }

    const size = function(){
        return listSize
    }

    const head = function(){
        return headNode
    }

    const tail = function(){
        return tailNode
    }

    const at = function(ind){
        let index = 0
        if(ind < index){
            return
        }
        let current = headNode
        if(ind === index){
            return current
        }
        else{
            while(index < ind){
                index++
                current = current.next()
            }
            return current
        }
    }

    const pop = function(){
        if(listSize < 1){
            return
        }
        let current = headNode;
        while(current !== tailNode){
            if(current.next() === tailNode){
                current.next = () => null
                tailNode = current
                break
            }
            else {
                current = current.next()
            }
        }
        listSize--
        
    }

    const contains = function(val){
        let current = headNode
        while(current !== null){
            if(current.value() === val){
                return true
            }
            else{
                current = current.next()
            }
        }
        return false
    }

    const find = function(val){
        let current = headNode
        let count = 0
        while(current !== null){
            if(current.value() === val){
                return count
            }
            else{
                current = current.next()
                count++
            }
        }
        return null

    }

    const toString = function(){
        let currentNode = headNode
        let current = '( ' + headNode.value().toString() + ' )'
        while(currentNode !== null){
            currentNode = currentNode.next()
            if(currentNode === null){return current}
            current += ' ->  ( ' + currentNode.value().toString() + ' )'
        }
        return current
    }

    if(args.length > 0){
        args.forEach(arg => append(arg))
    }



    return {
        value : () => headNode.value(),
        next  : () => headNode.next(),
        append,
        prepend,
        size,
        head,
        tail,
        find,
        contains,
        at,
        pop,
        toString,

    }
    
}

