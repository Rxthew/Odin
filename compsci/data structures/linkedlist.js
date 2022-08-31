const Node = function(value=null, next=null){
    
    return {
        value,
        next
    }
}

const LinkedList = function(...args){
    
    const convertNodePair = function(arg,ind,list){
        list[ind] = Node(arg.value)
        if(ind > 0){
            list[ind - 1].next = list[ind]
        }
        
    } 

    let nodes = args.map(arg => Node(arg))
    nodes.map((arg,ind) => convertNodePair(arg,ind,nodes))
    return nodes[0]
    
}


