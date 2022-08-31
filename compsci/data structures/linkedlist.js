const Node = function(value=null, next=null){
    
    return {
        value,
        next
    }
}

const LinkedList = function(...args){
    
    const _convertNodePair = function(arg,ind,list){
        list[ind] = Node(arg.value)
        if(ind > 0){
            list[ind - 1].next = () => list[ind]
        }
        
    } 

    let nodes = args.map(arg => Node(() => arg))
    nodes.map((arg,ind,nodes) => _convertNodePair(arg,ind,nodes))

    const append = function(value){
        let node = Node(value)
        _convertNodePair(node,nodes.length,nodes)
    }

    const prepend = function(value){
        const head = nodes[0]
        const node = Node(() => value, () => head)
        nodes = [node, ...nodes]
    }

    const size = function(){
        return nodes.length
    }

    const head = function(){
        return nodes[0]
    }

    const tail = function(){
        return nodes[nodes.length - 1]
    }

    const at = function(ind){
        return nodes[ind]
    }

    const pop = function(){
        return nodes.pop()
    }

    

    return {
        value : () => nodes[0].value(),
        next  : () => nodes[0].next(),
        append,
        prepend,
        size,
        head,
        tail,
    }
    
}

let bro = LinkedList(1,2,3)
console.log(bro.value())
bro.prepend(0)
console.log(bro.next().next().value())