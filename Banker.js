const Que = require('./queue')
const queHelpers = require('./queueHelpers')

function Banking(people){
    let line = new Que();

    for(let i = 0; i < 10; i++){
        line.enqueue([i])
    }

    while(!queHelpers.isEmpty(line)){
        let random = Math.floor(5 * Math.random(100))
        if(random === 1){
            let node = line.dequeue()
            line.enqueue(node)
            console.log('LOSER WENT TO THE BACK')
        }
        console.log(random)
        line.dequeue()
    }

}

Banking();