const Que = require('./queue')
const queHelpers = require('./queueHelpers')

function dancers(array){
    let males = new Que();
    let females = new Que();

    for(let i = 0; i < array.length; i++){
        if(array[i].substring(0,1) === 'F'){
            females.enqueue(array[i])
        } else {
            males.enqueue(array[i])
        }
    }


    while(!queHelpers.isEmpty(males) && !queHelpers.isEmpty(females)){
        let man = males.dequeue();
        let woman  = females.dequeue();
        console.log('Man: ' + man + ' and Woman: ' + woman)
    }

    if(queHelpers.isEmpty(males) && !queHelpers.isEmpty(females)){
        console.log('Females are in que...')
    }

    if(!queHelpers.isEmpty(males) && queHelpers.isEmpty(females)){
        console.log('Males are in que...')
    }

}

dancers([
    'F Jane',
    'M Frank',
    'M John',
    'M Sherlock',
    'F Madonna',
    'M David',
    'M Christopher',
    'F Beyonce',
])