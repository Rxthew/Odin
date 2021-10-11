const eventsMod = function(){

    myEvents = {}

    const events = function(name){

        name = name;

        (function(){
            myEvents[name] = [];
        })()

        const addHandler = function(){

        };

        const removeHandler = function(){

        };

        const fireMe = function(){

        };

    //const eventsManager = function(){}---from here onward nested in this (except the return, gotta move that up)       
          
        const getMyEvent = function(anEvent){
    
        }; 
       
        const publish = function(){
            let yourEvent = getMyEvent(anEvent);
            yourEvent.fireMe()
    
        };

        const  subscribe = function(){
            let yourEvent = getMyEvent(anEvent);
            yourEvent.addHandler(newHandler)
        }; 
            
        return {
            addHandler,
            removeHandler,
            fireMe,
        }
        
    };


    
    
}

