class Node {
        constructor(data, next = null) {
            this.data = data;
            this.next = next;
        }

        setValue(val) {
            this.data  = val;
        }
        setNext(next) {
            this.next  = next;
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
        if(this.head === null){
            let newNode = new Node(val);
            this.head = newNode;
            this.last = newNode;
        }
        else{
            let newNode = new Node(val);
            this.last.setNext(newNode);
            this.last = newNode;
        }
        this.length++;

    }

    findNodeFromLast(number) {
        if(number > this.length) return "input must be less than linkedlist length"
        else if(number === 1) return this.head.getData();
        else if(number <= 0) return "number should be positive!!!"
        else{

            let temp1 = this.head;
            let temp2 = this.head;
            for(let i = 0; i < number - 1; i++) {
                temp2 = temp2.getNext();
            }
    
            while(temp2){
                temp2 = temp2.getNext();
                temp1 = temp1.getNext();
            }
            // temp1 = this.head;
            if(this.head === temp1) {console.log("equal")}
            else {console.log("not equal")}
            return temp1.getData();
        }
    }

    findCycle() {
        let set = new Set();
        let temp1 = this.head;
        while(temp1) {
            if(!set.has(temp1.getNext())) {
                set.add(temp1);
                temp1 = temp1.getNext();
            }
            else if(set.has(temp1.getNext())){
                console.log(`cycle exist at node data ${temp1.getData()}`);
                break;
            }
        }
    }

    helperCycle() {
        let temp1  = this.head;
        for(let i = 0; i < 2; i++) {
            temp1 = temp1.getNext();
        }
        temp1.next = this.head;
        
    }

    print() {
        let array = [];
        let temp = this.head;
        while(temp){
            array.push(temp.data);
            temp = temp.getNext();
        }
        console.log(...array)
    }
}

const linkedList = new LinkedList();
linkedList.insertAtEnd(5);
linkedList.insertAtEnd(10);
linkedList.insertAtEnd(20);
linkedList.insertAtEnd(30);
linkedList.insertAtEnd(40);
linkedList.print();
linkedList.helperCycle();
linkedList.findCycle();
// linkedList.findNodeFromLast(3);
