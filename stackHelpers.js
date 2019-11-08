const stackHelpers = {
  peek(stack) {
    if (stack.top) {
      // console.log(`The current top is: ${stack.top.data}`); 
      return stack.top.data;
    }
  },
  isEmpty(stack) {
    return !stack.top ? true : false;
  },
  display(stack) {
    let currNode = stack.top;
    let currPos = 1;
    while (currNode) {
      console.log('current position: ' + currPos);
      console.log('data: ' + currNode.data);
      currPos += 1;
      currNode = currNode.next;
    }
  },
}

module.exports = stackHelpers;