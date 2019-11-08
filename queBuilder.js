const Stack = require('./stack')
const stackHelpers = require('./stackHelpers')

function enque(newNode, stack){

    let flippedStack = new Stack();

    console.log('INITIAL: ' + JSON.stringify(stack))
    let node = stack.pop()
    console.log(node)

    while(node){
        flippedStack.push(node);
        console.log('ADDED: ' + node)
        node = stack.pop();
        console.log('NEXT: ' + node)
    }

    flippedStack.push(newNode)

    while(!stackHelpers.isEmpty(flippedStack)){
        stack.push(flippedStack.pop())
    }

    flippedStack = JSON.stringify(flippedStack)

    return stack;
}

function deque(stack){
    return stack.pop()
}

function queBuiler(){

    let newStack = new Stack();

    newStack.push('Scott');
    newStack.push('EJ');
    newStack.push('Mike');

    let flipped = enque('Albert', newStack)

    stackHelpers.display(flipped)

    deque(flipped)
    deque(flipped)
    deque(flipped)

    stackHelpers.display(flipped)

}

queBuiler();