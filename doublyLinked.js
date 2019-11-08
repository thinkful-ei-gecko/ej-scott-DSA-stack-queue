const QueueNode = require('./DoublyNode');
const queueHelpers = require('./queueHelpers')
const queBuiler = require('./queBuilder')


class Queue {
  constructor() {
    this.first = null;
    this.last = null;
  }

  enqueue(data) {
    const node = new QueueNode(data);
    if (this.first === null) {
      this.first = node;
    }
    if (this.last) {
      this.last.next = node;
      node.prev = this.last.data;
    }

    this.last = node;
    
  }
  dequeue() {
    if (this.first === null) {
      return;
    }
    const node = this.first;
    this.first = this.first.next;
    if (node === this.last) {
      this.last = null;
    }
    return node.value;
  }
}

function main(){
  let starTrekQ = new Queue();
  starTrekQ.enqueue('Kirk')
  starTrekQ.enqueue('Spock')
  starTrekQ.enqueue('Uhura')
  starTrekQ.enqueue('Sulu')
  starTrekQ.enqueue('Checkov')

  console.log(queueHelpers.peek(starTrekQ))
  // console.log(queueHelpers.isEmpty(starTrekQ))
  // console.log(queueHelpers.display(starTrekQ))
//   starTrekQ.dequeue()
//   starTrekQ.dequeue()
  queueHelpers.display(starTrekQ)

}

main();