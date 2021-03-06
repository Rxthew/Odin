import { DOMGeneral } from "./helpers/DOM";
import { projectEvents } from "./projectevents";
import * as projects from "./projects"





export const templateDOMStructs = function (){

    const DOM = DOMGeneral()
    const delegator = projectEvents.delegator

    const createProject = function(name){
         if (name === ''){return}

         const reference = (function(){
            const _allDOMProjs =  Array.from(DOM.selectElem('.project'));
            if(_allDOMProjs.length === 0){
                return 0
            }
            const lastProj = _allDOMProjs[_allDOMProjs.length - 1]
            return parseInt(lastProj.dataset.id) + 1
            })()

         const proj = DOM.elementInit('div',{'id': `${name}${reference}`,
                                             'data-id':`${reference}`,
                                             'data-name': `${name}`,
                                             'class': 'project'},name
                                             )
        const remove = DOM.elementInit('button', {'class':'remove delProjBtn',
                                        'id':`remove${proj.dataset.id}`,
                                         'data-name': 'remove' }, 'X');
                                             
        const addToDoListBtn = DOM.elementInit('button', {'class': 'addtoDoList',
                                                           'data-name': 'add',
                                                           'id': `add${reference}`}, 'Add To-Do List');
        const modify = DOM.elementInit('button', {'class':'edit editProjTitleBtn'},'\u{270D}');
        const moveProject = DOM.elementInit('button', {'class':'move moveProject',
                                                        'type': 'button'},'\u{21F2}')
        proj.appendChild(remove);
        proj.appendChild(modify);
        proj.appendChild(DOM.elementInit('div',{ 'class':'none toDoContainer',
                                                  'data-name': 'container',
                                                   'id':`container${reference}`}));
        proj.appendChild(addToDoListBtn);
        proj.appendChild(moveProject);

        
        proj.onclick = delegator;
        moveProject.onmousedown = delegator;
                                                                      
        const container = DOM.selectElem('#container');
        container.appendChild(proj);
        
     }
     

     const createToDoNote = function(chosenSource){
        

        const input = DOM.selectElem('#temporaryInput'); 
        const submitTrigger = DOM.selectElem('#submitTrigger');
        const cancelTrigger = DOM.selectElem('#cancelTrigger');

        const project = (function(){
            if (chosenSource !== 'Checklist' && chosenSource !== 'Freeform'){
                const projs = Array.from(DOM.selectElem('.project'));
                return projs[projs.length - 1];
                
            }
            else {
                return input.parentElement;
            }

        })()


        const container = DOM.selectElem(`#container${project.dataset.id}`);
        const formReference = Array.from(container.children);
        
        const form = DOM.elementInit('form',{'class': 'toDoNoteInput',
                                                 'data-name': 'toDoNoteForm',
                                                 'id': `toDoNoteForm${project.dataset.id}${formReference.length}`,
                                                  'data-id':`${formReference.length}` })
        const submit = DOM.elementInit('button',{'type':'submit',
                                                   'id': 'submitNote', 
                                                  'class':'submitNote hidden',
                                                   },'')
        const cancel = DOM.elementInit('button', {'class':'cancel hidden',
                                                 'id':'cancelNote'}, '');
        
        const remove = DOM.elementInit('button', {'class':'remove none',
                                                   'data-name': 'remove',
                                                   'id':`remove${project.dataset.id}${formReference.length}`}, 'X');
       
        const provTitle = DOM.selectElem('#provTitle');
        const name = provTitle ? provTitle.value : chosenSource.name
        const title =   DOM.elementInit('label', {'class':'itemTitle',
                                                   'for':'itemTitle',
                                                   'data-name': 'itemTitle',                       
                                                   'name':'itemTitle',
                                                     'id':`itemTitle${project.dataset.id}${formReference.length}`,
                                                     },`${name}`,)
        const modify = DOM.elementInit('button', {'class':'edit'},'Edit');
        const moveNote = DOM.elementInit('button', {'class':'move moveNote',
                                                    'type': 'button'},'\u{21F2}')

        
        form.appendChild(submit);
        form.appendChild(cancel);
        form.appendChild(remove);
        form.appendChild(moveNote);
        form.appendChild(title);
        title.appendChild(modify)
        modify.disabled = true;
        provTitle ? provTitle.remove() : false
        
        moveNote.onmousedown = delegator;
        form.onsubmit = delegator;   
         
        container.classList.toggle('none', false);
        
         
        container.appendChild(form);


        const _generateChecklist = function(){ 
           const add = DOM.elementInit('button', {'class':'addCheck',
                                                     'data-name': 'addCheck',
                                                     'id':`addCheck${project.dataset.id}${formReference.length}`,
                                                     'data-class':`child${project.dataset.id}${formReference.length}` 
                                                     }, 'Add Item');                                                     
            form.appendChild(add);

            form.classList.add('checkbox')
            remove.classList.toggle('none',false);
            enableBtns();
       }


       const _generateFreeForm = function(){

        input.value = '';
        input.classList.toggle('none',false);
        form.classList.add('freeForm');

        submitTrigger.classList.toggle('none',false);
        cancelTrigger.classList.toggle('none',false);
        input.focus();
        
       }

       const _regenPrep = function(){
            
        submit.remove();
        cancel.remove();
        remove.classList.toggle('none', false);
        if (typeof chosenSource.noteStorage[0] === 'object' || chosenSource.noteStorage.length === 0){
             _generateChecklist()} 
       
        
    }
       
       switch(chosenSource){
           case 'Checklist' : _generateChecklist();
           break;
           case 'Freeform' : _generateFreeForm();
           break;
           default : _regenPrep();
           break;
       }

       return form

     }


     const disableBtns = function(trgt='n/a'){
        const allBtns = document.querySelectorAll('button');
        allBtns.forEach(btn =>  btn === trgt || btn.classList.contains('none') || btn.classList.contains('hidden') ? btn.disabled = false : btn.disabled = true);

        const allEditables = DOM.selectElem('.edit');
        allEditables.forEach(itm =>  itm === trgt || itm.classList.contains('none') ? false : itm.classList.toggle('disabledEdit', true));
        const allDisabled = DOM.selectElem('.disabledEdit');
        allDisabled.forEach(itm => itm.classList.toggle('edit',false));

        const projs = DOM.selectElem('.project')
        projs.forEach(proj => proj.classList.toggle('disabledToggle',true))

    }
    
    
    const enableBtns = function(){
        const all = document.querySelectorAll('button');
        all.forEach(btn => btn.disabled = false);

        const edits = DOM.selectElem('.disabledEdit');
        edits.forEach(itm => itm.classList.toggle('edit',true));
        edits.forEach(itm => itm.classList.toggle('disabledEdit',false));
        const deleteBtns = DOM.selectElem('.deleteCheck');
        deleteBtns.forEach(btn => btn.classList.toggle('none',false));        

        const projs = DOM.selectElem('.project')
        projs.forEach(proj => proj.classList.toggle('disabledToggle',false))
    }

     const modifyElement = function(event){

        event.preventDefault();
          
         const form = event.target.parentElement;
         const modInput = (function(){
         if (form.classList.contains('freeForm')){    
            let modTextArea = DOM.elementInit('textarea',{'label':'freeForm',
            'name':'freeForm',
            'autocomplete':'off',
            'required':'required',
            'id':'modInput',
           'class': 'modInput',
           'rows' : '3',
           'cols' : '30'});

           return modTextArea;  
        }
        
        else {
            let modCheckInput = DOM.elementInit('input',{'type':'text',
            'autocomplete':'off',
            'required':'required',
            'class': 'modInput',
             'id':'modInput',});
            
             return modCheckInput   
        } 
    })()

         const submit = DOM.elementInit('button',{'type':'submit',
        'class':'submitMod',
         'id': 'submitMod'
         },'Submit Note')
         const revert = DOM.elementInit('button',{
         'class':'revertMod',
          },'Revert Back') 
                                     
        disableBtns();

         const _replaceWithInput = (function(){
            if(event.target.parentElement.classList.contains('itemTitle') || event.target.parentElement.classList.contains('project')){
                const titleToEdit = event.target.parentElement;
                modInput.value = titleToEdit.firstChild.nodeValue;
                titleToEdit.firstChild.nodeValue = '';
                titleToEdit.appendChild(modInput);
            }
            else{
                const textToEdit = event.target
                modInput.value = textToEdit.firstChild.nodeValue
                textToEdit.replaceWith(modInput); 

            } 
            modInput.insertAdjacentElement('afterend',submit);
            submit.insertAdjacentElement('afterend',revert);
       })()
        
     }

     const submitModifiedElement = function(event){
        
        event.preventDefault();
        const form = event.target.parentElement;
        const input = event.target.previousElementSibling;
        const revert = event.target.nextElementSibling;
        const label = DOM.elementInit('label', {'for': `${input.value}`, 'class':'edit'},`${input.value}`);
        const text = DOM.elementInit('p', {'class':'text edit'}, `${input.value}`);
        const del = DOM.elementInit('button', {'class': 'deleteCheck none'},'X' ) 

        
        if(input.value === ''){return};

        if(form.classList.contains('checkbox')){
            input.replaceWith(label);
            label.appendChild(del);

        }
        else if (form.classList.contains('freeForm')){
            input.replaceWith(text); 
        }

        else {
            const value = input.value;
            const newTitle = event.target.parentElement;
            newTitle.firstChild.nodeValue = value;
            input.remove();
        }
        
        enableBtns();
    
        revert.remove();
        event.target.remove();


        return         
     }

     const revertModifiedElement = function(event){
        
        event.preventDefault();
        const form = event.target.parentElement;
        const submit = event.target.previousElementSibling;
        const input = submit.previousElementSibling;
        const retrieveData =  projects.mainInterface.retrieveData(event);
        const originalLabel = DOM.elementInit('label', {'for': `${retrieveData}`, 'class':'edit'},`${retrieveData}`); 
        const originalText = DOM.elementInit('p', {'class':'text edit'}, `${retrieveData}`); 
        const del = DOM.elementInit('button', {'class': 'deleteCheck none'},'X' ) 


        if(form.classList.contains('checkbox')){
            input.replaceWith(originalLabel);
            originalLabel.appendChild(del);

        }
        else if (form.classList.contains('freeForm')){
            input.replaceWith(originalText); 
        }

        else {
            const value = retrieveData; 
            const originalTitle = event.target.parentElement
            originalTitle.firstChild.nodeValue = value;
            input.remove();
        };
         
        enableBtns();
    
        submit.remove();
        event.target.remove();
        return         
     }
     
     
    const chooseToDoTitleForm = function(event){
        const domProject = event.target.parentElement;

        const _generateTitleForm = (function(){
             const form =  DOM.elementInit('form', {'class': 'chooseTitleForm transitForm',
                                                     'id': 'chooseTitleForm'})
             const label = DOM.elementInit('label',{'for':'chooseYourTitle'},'Choose Your Note\'s Title');
  
             const titleInput = DOM.elementInit('input',{'type':'text',
                                                'autocomplete':'off',
                                                 'required':'required',
                                                 'id':'provTitle',
                                                 'class': 'provTitle'},);
            const submitTitle = DOM.elementInit('button', {'type':'submit'}, 'Submit');
            const cancelTitle = DOM.elementInit('button', {'class':'cancelTitle'}, 'Cancel');
            form.appendChild(label);
            form.appendChild(titleInput);
            form.appendChild(submitTitle);
            form.appendChild(cancelTitle);
            form.onsubmit = delegator;
            return form
        })() 
        
        domProject.appendChild(_generateTitleForm)
        return

    }
    const submitToDoTitle = function(event){
       
        if(event.type === 'click'){return}
        event.preventDefault(); 
        const provTitle = DOM.selectElem('#provTitle');
        const domProject = event.target.parentElement.parentElement;
        domProject.appendChild(provTitle);
        provTitle.classList.toggle('none',true);
        
        event.target.classList.toggle('none',true);
        return
        
    }
     
     const chooseNoteType = function(event){
        if(event.type === 'click'){return}
        const domProject = event.target.parentElement;

         const form =  DOM.elementInit('form', {'class': 'chooseNoteType transitForm',
                                                    'id': 'noteTypeForm'                      })
         const label = DOM.elementInit('label',{'for':'chooseNoteType'},'Choose Your Note Type');
         const select = DOM.elementInit('select',{'class':'select',
                                                    'id': 'select' });
         const optGroup = DOM.elementInit('optgroup',{'label': 'Note Options'}, 'Choose your note type');
         const checklistOpt = DOM.elementInit('option',{'name': 'checklist',
                                                         'class': 'checklist'},'Checklist');
         const inputOpt = DOM.elementInit('option',{'name': 'input',
                                                     'class': 'input'},'Freeform');
         const choice = DOM.elementInit('button', {'type':'submit'}, 'Submit');
         const cancel = DOM.elementInit('button', {'class':'cancelChoice'}, 'Cancel');
         
         select.appendChild(optGroup);
         optGroup.appendChild(checklistOpt);
         optGroup.appendChild(inputOpt);
         form.appendChild(label);
         form.appendChild(select);
         form.appendChild(DOM.elementInit('br'));
         form.appendChild(choice);
         form.appendChild(cancel)

         disableBtns();
         form.onsubmit = delegator;
         domProject.appendChild(form);

         return form
    }
     
     const revealCreateForm = function(){
        let createForm = DOM.selectElem('#createForm');
        createForm.classList.toggle('none', false);

        let submitCreateForm = DOM.selectElem('#submitCreateForm');
        submitCreateForm.classList.toggle('none', false);

        let cancelNewProject = DOM.selectElem('#cancelNewProject');
        cancelNewProject.classList.toggle('none',false);
        
     }

     const resetCreateForm = function(){
         let createForm = DOM.selectElem('#createForm');
         createForm.classList.toggle('none', true);

        let submitCreateForm = DOM.selectElem('#submitCreateForm');
        submitCreateForm.classList.toggle('none', true);

        let cancelNewProject = DOM.selectElem('#cancelNewProject');
        cancelNewProject.classList.toggle('none',true);

         let titleInp = DOM.selectElem('#titleInp');
         titleInp.value = '';
     }

     const toggleSize = function(event){
         
        if (event.target.classList.contains('disabledToggle')){
            return
        }
        if (event.target.classList.contains('project')){
            

        const container = DOM.selectElem(`#container${event.target.dataset.id}`)                          
        container.classList.toggle('none');

        }

        else {
        
        const form = event.target.parentElement;
        const project = event.target.parentElement.parentElement;    
        const formChildren = Array.from(form.children);
        formChildren.forEach(itm => itm.dataset.class === `child${project.dataset.id}${form.dataset.id}` ? itm.classList.toggle('none') : false)       
            
        }
     }

     const noteTypeGenerator = function(event){ 

        if(event.type === 'click'){return}

        const getSelected = (function(){
             const select =  DOM.selectElem('#select');
             return select.options[select.selectedIndex].value;
        })()
        
        const _generateTemporaryInput = (function(){
            const project = DOM.selectElem('#noteTypeForm').parentElement;
           
        if (getSelected === 'Checklist'){    
            let temporaryInput = DOM.elementInit('input',{'type':'text',
            'autocomplete':'off',
            'required':'required',
            'id':'temporaryInput',
           'class': 'temporaryInput none'});  
            project.appendChild(temporaryInput);
        }
        
        else {
            let textArea = DOM.elementInit('textarea', {'id':'temporaryInput',
                'name':'freeForm',
                'label':'freeForm',
                'class':'temporaryInput none',
                'autocomplete':'off',
                'required':'required',
                'rows' : '4',
                'cols' : '50' });
            project.appendChild(textArea);
             
        }
        const _generateTriggerButtons = (function(){

            const submit = DOM.elementInit('button',{'type':'button',
            'id': 'submitTrigger', 
           'class':'submitTrigger none',
            },'Submit Note')
            const cancel = DOM.elementInit('button', {'class':'cancelTrigger none',
          'id':'cancelTrigger'}, 'Cancel');

          project.appendChild(submit);
          project.appendChild(cancel);

        })()
        
        
        })()
   
        projectEvents.publish('createNote', getSelected);
        projectEvents.publish('deleteNoteTypeForm', event);
        getSelected === 'Checklist' ? projectEvents.publish('cleanForm',event): false;
        projectEvents.publish('saved');
        
        
        return getSelected
     }



    const deleteForms = function(event){

        if(event.target.nodeName != 'BUTTON' && event.type === 'click'){return}  
              
        const _cancelNoteTypeForm = function(){

            const _deleteProvTitle = function(){
                 const provTitle =  DOM.selectElem('#provTitle')
                 provTitle ? provTitle.remove() : false
                 return   
            };

            const _deleteAddNoteForm = (function(){
                 const noteTypeForm = DOM.selectElem('#noteTypeForm');
                 noteTypeForm ? noteTypeForm.remove() : false;
                 return

             })();
            
            event.target.className === 'cancelChoice' ? _deleteProvTitle() : false; 
            return
        }


         let deleted = DOM.selectElem('#chooseTitleForm');
         deleted ? deleted.remove() : _cancelNoteTypeForm()
         
         return


    }


    const cleanToDoForm = function(){
      
      const form = DOM.selectElem('#submitNote').parentElement;
      const project = DOM.selectElem('#temporaryInput').parentElement;  

      const _deleteTransitoryStuff = (function(){  
        let deleted = DOM.selectElem('#temporaryInput');
        deleted.remove();

        deleted = DOM.selectElem('#submitTrigger');
        deleted.remove();

        deleted = DOM.selectElem('#cancelTrigger');
        deleted.remove();

        deleted = DOM.selectElem('#submitNote');
        deleted.remove();

        deleted = DOM.selectElem('#cancelNote');
        deleted.remove(); 
    })()
      

      const _removeWhereEmpty = (function(){
        
        const formChildren = Array.from(form.children);
        const child = document.querySelector(`[data-class=child${project.dataset.id}${form.dataset.id}]`)
        !(formChildren.includes(child)) ? form.remove() : false;

    })()

        return
    }

    const toggleOpaque = function(event){
        const mainContChildren = Array.from(DOM.selectElem('#mainContainer').children);
        const containerChildren = Array.from(DOM.selectElem('#container').children);
        const header = DOM.selectElem('#header');
        const headerChildren = Array.from(header.children)
        const projs = function(){
                const projs = Array.from(DOM.selectElem('.project'));
                return projs
        }

        if(DOM.selectElem('#createForm').classList.contains('none') && headerChildren[0].classList.contains('opaque')){
            headerChildren.forEach(child => child.classList.toggle('opaque'), false )
            if(document.querySelector('.project')){
                projs().forEach(proj => proj.classList.toggle('opaque', false))
            }
            return

        }

       else if (event.target.classList.contains('revealForm')){
            headerChildren.forEach(child => child.classList.toggle('opaque', true))
            if(document.querySelector('.project')){
                projs().forEach(proj => proj.classList.toggle('opaque', true))
            }
            return
        }

        else {
        
        const projectChildren = Array.from(event.target.closest('.project').children);

        if(header.classList.contains('opaque')){
            mainContChildren.forEach(child => child.classList.toggle('opaque',false));
            containerChildren.forEach(child => child === event.target.closest('.project') ? child.classList.toggle('opaqueColor',false) : child.classList.toggle('opaque', false));
            projectChildren.forEach(child => child.classList.toggle('opaque', false))
            return
        }
        else{
            mainContChildren.forEach(child => child === DOM.selectElem('#container') ? false : child.classList.toggle('opaque'),true);
            containerChildren.forEach(child => child === event.target.closest('.project') ? child.classList.toggle('opaqueColor',true) : child.classList.toggle('opaque', true));
            projectChildren.forEach(child => child.classList.contains('transitForm') ? false : child.classList.toggle('opaque',true));
        }

    }
        
    }
        
    
    const generateNewAddCheck = function(event){
        
        event.preventDefault();
        const form = event.target.parentElement;
        const project = form.parentElement.parentElement;

        if(DOM.selectElem('#temporaryInput') && DOM.selectElem('#temporaryInput').label === 'freeForm'){
            DOM.selectElem('#temporaryInput').remove();
            DOM.selectElem('#submitTrigger').remove();
            DOM.selectElem('#cancelTrigger').remove();
        }

        if (!DOM.selectElem('#temporaryInput')){
        const temporaryInput = DOM.elementInit('input',{'type':'text',
        'autocomplete':'off',
        'required':'required',
        'id':'temporaryInput',
        'class': 'temporaryInput none'});


        project.appendChild(temporaryInput);

        const _generateTriggerButtons = (function(){

            const submit = DOM.elementInit('button',{'type':'button',
            'id': 'submitTrigger', 
           'class':'submitTrigger none',
            },'Submit Note')
            const cancel = DOM.elementInit('button', {'class':'cancelTrigger none',
          'id':'cancelTrigger'}, 'Cancel');

          project.appendChild(submit);
          project.appendChild(cancel);

        })()

        disableBtns(event.target);
    
        }

        if (!DOM.selectElem('#submitNote')){       
         const originalSubmit = DOM.elementInit('button',{'type':'submit',
        'id': 'submitNote', 
        'class':'submitNote hidden',
        },'')

        form.appendChild(originalSubmit);

        }
        
        if (!DOM.selectElem('#cancelNote')){       
            const cancel = DOM.elementInit('button',{
           'id': 'cancelNote', 
           'class':'cancel hidden',
           },'')
   
           form.appendChild(cancel);
    
        }

        const _revealCheckItem = (function(){
        const input = DOM.selectElem('#temporaryInput');
        const submit = DOM.selectElem('#submitTrigger');
        const cancel = DOM.selectElem('#cancelTrigger');
        input.classList.toggle('none',false);
        input.focus();
        disableBtns();
        submit.classList.toggle('none',false);
        cancel.classList.toggle('none',false);
        })()


        return

    }

    
      const _generateCheckItem = function(storedNote=false){  
        const input = DOM.selectElem('#temporaryInput');
        const project = (function(){
            if (storedNote){
                const projs = Array.from(DOM.selectElem('.project'));
                return projs[projs.length - 1];
                
            }
            else {
                return input.parentElement;
            }

        })()
        
        const form = (function(){
            if (storedNote){
                const container = Array.from(DOM.selectElem(`#container${project.dataset.id}`).children).filter(elem => elem.classList.contains('toDoNoteInput'))
                return container[container.length - 1];
                
            }
            else {
                return DOM.selectElem('#submitNote').parentElement;
            }

        })()

        const name = storedNote ? storedNote.label : input.value

        const del = DOM.elementInit('button', {'class': 'deleteCheck none'},'X' ) 
        const totalChecks = DOM.selectElem('.check').length
       
        const checkbox = DOM.elementInit('input', {'type':'checkbox',
                                                    'id': `check${totalChecks + 1}`, 
                                                    'class':'check',
                                                    'data-class':`child${project.dataset.id}${form.dataset.id}`});
        const label = DOM.elementInit('label', {'for': `${name}`,
                                                 'class': 'edit',
                                                'data-class':`child${project.dataset.id}${form.dataset.id}`},`${name}`);
        const br = DOM.elementInit('br',{'data-class':`child${project.dataset.id}${form.dataset.id}`});

       
        label.appendChild(del);
        form.appendChild(checkbox);
        form.appendChild(label);
        form.appendChild(br);

        const _retrieveCheckValue = (function(){
            if (storedNote && storedNote.check){
                checkbox.checked = true;
            }
        })()

        return
    }

    const submitItem = function(){
    
    const input = DOM.selectElem('#temporaryInput');
    const project = input.parentElement;
    const form = DOM.selectElem('#submitNote').parentElement;
    const remove = DOM.selectElem(`#remove${input.parentElement.dataset.id}${form.dataset.id}`);
    
    if (input.value === ''){return};

    if (form.classList.contains('checkbox')){
        _generateCheckItem();
        input.classList.toggle('none', true);        
        return
    }

    
    const text = DOM.elementInit('p', {'class':'text edit',
                                      'data-class':`child${project.dataset.id}${form.dataset.id}`}, `${input.value}`);

    form.appendChild(text);
    remove.classList.toggle('none',false);

    return

   }

   const triggerEvents = function(event){
       const cancel = DOM.selectElem('#cancelNote')
       const submit = DOM.selectElem('#submitNote')

       event.target === DOM.selectElem('#submitTrigger') ? submit.click() : cancel.click()

   }

   const deleteItem = function(event){
       event.preventDefault();
       event.target.parentElement.remove();
    return
   }
   
   
   const deleteCheck = function(event){
       event.preventDefault();

       const label = event.target.parentElement
       const br = label.nextElementSibling;
       const check = label.previousElementSibling;
       const form = check.parentElement;
       const project = form.parentElement.parentElement;


       br.remove() 
       check.remove() 
       label.remove()
       
       const formChildren = Array.from(form.children);
       const child = document.querySelector(`[data-class=child${project.dataset.id}${form.dataset.id}]`)
       !(formChildren.includes(child)) ? form.remove() : false;
       
       return
    }

    const moveConstruct = function(event){ 
        
        if(event.type === 'click'){
            return
        }
        if(event.button !== 0){
            
            return
        }
        
        let currentDroppable = null;

        const target = event.target.classList.contains('moveNote') ? event.target.closest('.toDoNoteInput') : event.target.closest('.project')
        target.classList.toggle('moved',true);
        const clonedTarget = target.cloneNode(true);
        
        const _eventReplicator = function(){
            if (clonedTarget.classList.contains('project')){
                clonedTarget.onclick = delegator;
            }
            const moveBtns = Array.from(DOM.selectElem('.move')).filter(child => child.closest('.project').id === clonedTarget.closest('.project').id);
            
            moveBtns.forEach(btn => btn.onmousedown = delegator)
        }

        const _returnToDefault = function(){
            target.remove();
            clonedTarget.classList.toggle('none',false);
            _eventReplicator()
            
        }

        clonedTarget.classList.toggle('none',true);        
        target.parentElement.appendChild(clonedTarget);
        const moveBtn = event.target;
        const targetStyle = getComputedStyle(target) 
        
        let shiftX =  event.clientX - (target.getBoundingClientRect().left  - parseInt(targetStyle.marginLeft))  
        let shiftY =  event.clientY - (target.getBoundingClientRect().top    - parseInt(targetStyle.marginTop)) 

        

        const _commenceMove = (function(){
                        
            const wth = target.getBoundingClientRect().width 
            const hth = target.getBoundingClientRect().height 

            
            target.style.position = 'absolute';
            target.style.zIndex = 1000;
            target.style.width = `${wth}px`
            target.style.height = `${hth}px`;
            event.target.classList.toggle('moving',true);
            document.body.appendChild(target);           

        })()
        

        const _moveAt = function(pageX, pageY){
            target.style.left = pageX  - shiftX + 'px';
            target.style.top = pageY -  shiftY + 'px'
        }

        const _onMouseMove = function(event){

            _moveAt(event.pageX,event.pageY);
            
            target.classList.toggle('none',true);
            let elem = document.elementFromPoint(event.clientX, event.clientY);
            target.classList.toggle('none',false);
            if(!elem){return _returnToDefault()}

            //Opens projects when todonote moves over them, and closes them should it leave.
            if(elem.closest('.project') && target.classList.contains('toDoNoteInput')){
                const currentProj = elem.closest('.project');
                const container = DOM.selectElem(`#container${currentProj.dataset.id}`);
                if (currentDroppable && currentDroppable !== currentProj){
                    DOM.selectElem(`#container${currentDroppable.dataset.id}`).classList.toggle('none',true);
                    currentDroppable = null;
                    return
                }
                container.classList.toggle('none',false);
                currentDroppable = currentProj;
            }

            
        }      

        const placeItem = function(event){

            document.removeEventListener('mousemove', _onMouseMove);

            target.classList.toggle('none',true);
            let elemBelow = document.elementFromPoint(event.clientX, event.clientY);
            target.classList.toggle('none',false);

            if(!elemBelow){return _returnToDefault()}            
 
            const container = DOM.selectElem('#container');
            

            const _regulariseNoteData = function(){

               if(elemBelow.closest('.project') === clonedTarget.parentElement.parentElement && clonedTarget.nextElementSibling === target){
                   return _returnToDefault()
               }
                clonedTarget.remove()
                const project = elemBelow.closest('.project');
                const formContainer = Array.from(DOM.selectElem(`#container${project.dataset.id}`).children)
                formContainer.forEach(function(element){ 
                   const elementChildren = Array.from(element.children);               
                   const dataClasses = elementChildren.filter(child => child.hasAttribute('data-class'));
                   const dataNames = elementChildren.filter(child => child.hasAttribute('data-name'));
                   dataClasses.forEach(elem => elem.dataset.class = `child${project.dataset.id}${formContainer.indexOf(element)}`);
                   dataNames.forEach(elem => elem.id = `${elem.dataset.name}${project.dataset.id}${formContainer.indexOf(element)}`)
                   element.id = `${element.dataset.name}${project.dataset.id}${formContainer.indexOf(element)}` 
                   element.dataset.id = `${formContainer.indexOf(element)}`
                })
                   
            }

            
            if (elemBelow.closest('.toDoNoteInput') && target.classList.contains('toDoNoteInput')){

                elemBelow.closest('.toDoNoteInput').parentElement.insertBefore(target,elemBelow.closest('.toDoNoteInput'));
                target.removeAttribute('style');
                _regulariseNoteData();
            }
            
            else if (elemBelow.closest('.project')){
                  if(target.classList.contains('project')){
                      container.insertBefore(target,elemBelow.closest('.project'))
                      target.removeAttribute('style');
                      clonedTarget.remove();
                  
                }
                  else if (target.classList.contains('toDoNoteInput')) {
                     const toDoNotesContainer =  DOM.selectElem(`#container${elemBelow.closest('.project').dataset.id}`);
                     toDoNotesContainer.classList.toggle('none',false);
                     toDoNotesContainer.appendChild(target);
                     target.removeAttribute('style');
                      _regulariseNoteData()
                      
                      
                
                }
            }

            else {
                _returnToDefault()
                 
            }
            
            moveBtn.classList.toggle('moving',false)
            
        } 
           
          _moveAt(event.pageX,event.pageY);
          document.addEventListener('mousemove', _onMouseMove);
          document.addEventListener('mouseup', placeItem, {once: true})   

        return 

    }

    const regenFrontProj = function(){
        const accessAll = JSON.parse(localStorage.access);
        accessAll.forEach(function(elem){
            if(accessAll.length > 0){
            createProject(elem.name);
            const allDomProjs = Array.from(DOM.selectElem('.project'));
            const frontProj = allDomProjs[allDomProjs.length - 1];

            const _regenFrontToDoForms = (function(){
                  if(elem.projStorage.length > 0){
                      elem.projStorage.forEach(function(toDoForm){
                      const form = createToDoNote(toDoForm)
          
                      const _regenFrontNotes = (function(){
                          if (toDoForm.noteStorage.length > 0){
                          toDoForm.noteStorage.forEach(function(note){
                              if (typeof note === 'object'){
                                  _generateCheckItem(note)
                              }
                              else {
                                const text = DOM.elementInit('p', {'class':'text edit',
                                'data-class':`child${frontProj.dataset.id}${form.dataset.id}`}, `${note}`);
                                
                                form.classList.add('freeForm'); 
                                form.appendChild(text);
                              }
                          })}

                      })()
                      })
                  }
            })()
        }})
    }

     return {
         createProject,
         createToDoNote,
         revealCreateForm,
         resetCreateForm,
         toggleSize,
         chooseToDoTitleForm,
         submitToDoTitle,
         chooseNoteType,
         noteTypeGenerator,
         toggleOpaque,
         deleteForms,
         disableBtns,
         enableBtns,
         cleanToDoForm,
         modifyElement,
         triggerEvents,
         revertModifiedElement,
         generateNewAddCheck,
         submitItem,
         submitModifiedElement,
         deleteItem,
         deleteCheck,
         moveConstruct,
         regenFrontProj
         
     }
}