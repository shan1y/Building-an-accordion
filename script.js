
document.querySelectorAll('.accordionQuestion').forEach((item) => {
    item.addEventListener('click',(event)=>{
        console.log('click');
        let accorCollapse = item.nextElementSibling;

    if(!item.classList.contains('collapsing')) {

    if(!item.classList.contains('open')){
            // remove "collpase", add "collpasing" class to .accordionCollapse(sibling)
            
            accorCollapse.style.display = 'block';
            let accHeight = accorCollapse.clientHeight;

            setTimeout(()=>{
                accorCollapse.style.height=accHeight + 'px';
                accorCollapse.style.display = '';
            },1);
            

            accorCollapse.classList = 'accordionCollapse collapsing';
            // after x amount of time, remove "collapsing" class and add "collapse open" class
            setTimeout(()=> {
                accorCollapse.classList = 'accordionCollapse collapse open';
                accorCollapse.style.height='';
            },300);
    }
        // close accordion item
    else { 
        // remove "collase open" from .accordion_collapse, add "collapsing"
        accorCollapse.classList = 'accordionCollapse collapsing';

        setTimeout(() => {
            accorCollapse.style.height='0px';
        },1)
        // after x amount of time, remove "collapsing" class and add "collapse" class
        setTimeout(()=> {
            accorCollapse.classList = 'accordionCollapse collapse'
            accorCollapse.style.height='';
        },300);
    }

    item.classList.toggle('open')
    accorCollapse.classList.toggle('open');
    };
})
});