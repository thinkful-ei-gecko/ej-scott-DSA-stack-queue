const StackNode = require('./StackNode');
const stackHelpers = require('./stackHelpers');

class Stack {
  constructor() {
    this.top = null;
  }

  push(data) {
    if (this.top === null) {
      this.top = new StackNode(data, null);
      return this.top;
    }
    this.top = new StackNode(data, this.top);
  }
  pop() {
    const node = this.top;
    if (node === null) {
      return node;
    }
    this.top = node.next;
    return node.data;
  }
}


function is_palindrome(s) {
  let stack = new Stack();
  s = s.toLowerCase().replace(/[^a-zA-Z0-9]/g, "");
  for (let i = 0; i < s.length; i++) {
    stack.push(s[i]);
  }
  for (let i = 0; i < s.length; i++) {
    if (stack.pop() !== s[i]) {
      return false;
    }
  }
  return true;
}

function parensMatch(exp) {
  let stack = new Stack();
  let parenCount = 0;
  for (let i = exp.length; i >= 0; i--) {
    if (exp[i] === '(' || exp[i] === ')') {
      stack.push(exp[i]);
    }
  }
  let currNode = stack.top;
  while (currNode !== null) {
    let val = stack.pop();
    if (val === '(') {
      parenCount += 1;
    }
    if (val === ')') {
      parenCount -= 1;
    }
    if (parenCount < 0) {
      return false;
    }
    currNode = currNode.next;
  }
  return parenCount === 0;
}

// function sortAsc(stack, val) {

//   let currNode = stack.pop();
//   let nextNode = stack.pop();

//   if (val === undefined) {
//     val = currNode;
//   }
//   if (val < currNode) {
//     val = currNode;
//   } else {
//     val = nextNode;
//   }

//   if (stackHelpers.isEmpty(stack)) {
//     if (val > nextNode) {
//       stack.push(val);
//       stack.push(nextNode);
//     } else {
//       stack.push(nextNode);
//       stack.push(val);
//     }
//     return;
//   }
//   sortAsc()

//   sortAsc(stack);
//   if (currNode > nextNode) {
//     let second = stack.pop();
//     let first = stack.pop();
//     stack.push(currNode);
//     stack.push(nextNode);
//     stack.push(second);
//     stack.push(first);
//   } else {
//     let second = stack.pop();
//     let first = stack.pop();
//     stack.push(nextNode);
//     stack.push(currNode);
//     stack.push(second);
//     stack.push(first);
//   }
//   return stack;


//   // if (val > nextNode) {
//   //   stack.push(nextNode);
//   //   return sortAsc(stack, val)
//   // } else if (nextNode > val) {
//   //   stack.push(val);
//   //   return sortAsc(stack, nextNode);
//   // }

//   // return stack
// }

function sortStack(stack) {
  let secondStack = new Stack();
  let temp;

  while (!stackHelpers.isEmpty(stack)) {
    temp = stack.pop();


    while (!stackHelpers.isEmpty(secondStack) && stackHelpers.peek(secondStack) > temp) {
      stack.push(secondStack.pop());
    }
    secondStack.push(temp);
  }

  while(!stackHelpers.isEmpty(secondStack)) {
    stack.push(secondStack.pop());
  }
  
  stackHelpers.display(stack);

  return stack;
}

function main() {
  let starTrek = new Stack();
  // starTrek.push('Kirk');
  // starTrek.push('Spock');
  // starTrek.push('McCoy');
  // starTrek.push('Scotty');

  let sortList = new Stack();
  sortList.push(1);
  sortList.push(2);
  sortList.push(9);
  sortList.push(4);
  sortList.push(5);
  sortList.push(6);
  // sortList.push(3);


  sortStack(sortList);

  //stackHelpers.display(sortList);

  // starTrek.pop();
  // stackHelpers.display(starTrek);
  // console.log(is_palindrome("dad"));
  // console.log(is_palindrome("A man, a plan, a canal: Panama"));
  // console.log(is_palindrome("1001"));
  // console.log(is_palindrome("Tauhida"));
  // console.log(parensMatch(')(())'))

}

main();