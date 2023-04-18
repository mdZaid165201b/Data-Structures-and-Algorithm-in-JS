class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }

  setValue(val) {
    this.data = val;
  }
  setNext(next) {
    this.next = next;
  }

  // getters
  getNext() {
    return this.next;
  }
  getData() {
    return this.data;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.length = 0;
    this.last = null;
  }
  insertAtEnd(val) {
    if (this.head === null) {
      let newNode = new Node(val);
      this.head = newNode;
      this.last = newNode;
    } else {
      let newNode = new Node(val);
      this.last.setNext(newNode);
      this.last = newNode;
    }
    this.length++;
  }

  findNodeFromLast(number) {
    if (number > this.length)
      return "input must be less than linkedlist length";
    else if (number === 1) return this.head.getData();
    else if (number <= 0) return "number should be positive!!!";
    else {
      let temp1 = this.head;
      let temp2 = this.head;
      for (let i = 0; i < number - 1; i++) {
        temp2 = temp2.getNext();
      }

      while (temp2) {
        temp2 = temp2.getNext();
        temp1 = temp1.getNext();
      }
      // temp1 = this.head;
      if (this.head === temp1) {
        console.log("equal");
      } else {
        console.log("not equal");
      }
      return temp1.getData();
    }
  }

  removeNodeFromLast(number) {
    let temp1 = this.head;
    const stack = [];
    if(number === this.length) {
        if( this.head.getNext() === null ) {
            this.head = null;
        }
        else if(number > this.length || number <= 0) console.log("invalid input number...")
        else {
            this.head = this.head.getNext();
        }
    }
    else {
        while(temp1) {
            stack.push(temp1);
            temp1 = temp1.getNext();
        }
        for(let i = 0; i < number; i++ ){
            temp1 = stack.pop();
        }
        let prevNode = stack.pop();
        prevNode.setNext(temp1.getNext())
    }
    this.print();
  }

  removeNodeFromLastTwo(number) {
    let temp1 = this.head;
    if(number === this.length) {
        this.head = this.head.getNext();
        this.length--;
    }
    else if(number > this.length || number <= 0) console.log("invalid input number...");
    else {
        let finalNumber = this.length - number;
        for(let i = 1; i < finalNumber; i++) {
            temp1 = temp1.getNext();
        } 
        temp1.setNext(temp1.getNext().getNext());
        this.length--;
    }
    this.print()
    console.log(this.length)
  }

  findNodeFromLastUsingStack(number) {
    if (number === 1) return this.head.getData();
    else if (number <= 0 || number > this.length) return console.log("invalid number!!!");
    else {
      const stack = [];
      let temp1 = this.head;
      while (temp1) {
        stack.push(temp1);
        temp1 = temp1.getNext();
      }
      let popedNode
      for (let i = 0; i < number; i++) {
        popedNode = stack.pop();
    }
    return popedNode;
    }
  }

  findCycle() {
    let set = new Set();
    let temp1 = this.head;
    while (temp1) {
      if (!set.has(temp1.getNext())) {
        set.add(temp1);
        temp1 = temp1.getNext();
      } else if (set.has(temp1.getNext())) {
        console.log(`cycle exist at node data ${temp1.getData()}`);
        return temp1;
      }
    }
  }

  findCycleTwo() {
    let temp1 = this.head;
    let temp2 = this.head;
    let i = 0;
    while (temp2 !== null && temp2.getNext() !== null) {
      temp1 = temp1.getNext();
      temp2 = temp2.getNext().getNext();
      i++;
      if (temp1 === temp2) {
        console.log(`Cycle exist at ${temp2.getData()}`);
        return true;
      }
    }
    console.log(i);
  }
  removeCycle() {
    let cycleNode = this.findCycle();
    if (cycleNode.getNext() !== null) {
      cycleNode.setNext(null);
    }
  }

  helperCycle() {
    let temp1 = this.head;
    for (let i = 0; i < 3; i++) {
      temp1 = temp1.getNext();
    }
    temp1.next = this.head;
  }

  print() {
    let array = [];
    let temp = this.head;
    while (temp) {
      array.push(temp.data);
      temp = temp.getNext();
    }
    console.log(...array);
  }

  maxOccurances() {
    const hashMap = {};
    let temp = this.head;
    while(temp) {
      if(!Object.hasOwn(hashMap, temp.getData())) {
        hashMap[temp.getData()] = 0;
      }
      temp = temp.getNext()
    }
    temp = this.head;
    while(temp) {
      if(Object.hasOwn(hashMap, temp.getData())) {
        hashMap[temp.getData()]++;
      }
      temp = temp.getNext();
    }
    const max = {
      key: 0,
      value: 0
    };
    Object.entries(hashMap).forEach(current => {
      if(max === {}) {
        max["key"] = current[0];
        max["value"] = current[1];
      }
      else{
        if(current[1] > max["value"]){
          max["key"] = current[0],
          max["value"] = current[1]
        }
      }
    });
  }

  reverse() {
    
  }
}

const linkedList = new LinkedList();
linkedList.insertAtEnd(5);
linkedList.insertAtEnd(10);
linkedList.insertAtEnd(20);
linkedList.insertAtEnd(30);
linkedList.insertAtEnd(20);
linkedList.insertAtEnd(10);
linkedList.insertAtEnd(5);
linkedList.insertAtEnd(20);
linkedList.print();
linkedList.maxOccurances()
// linkedList.helperCycle();
// linkedList.findCycle();
// linkedList.removeCycle();
// linkedList.print();
// let requiredNode = linkedList.findNodeFromLastUsingStack(3);
// console.log(requiredNode.getData());
// linkedList.removeNodeFromLast(5);
// linkedList.removeNodeFromLastTwo(3);
