class Node{
    constructor(data , link = null){
        this.data = data;
        this.link = link;
    }
};

class LinkedList{
    constructor(){
        this.head = null;
        this.last = null;
        this.length = 0;
    }
    
    
    isEmpty(){
        return (this.length == 0);
    }
    
    insertAtHead(value){
        var newNode = new Node(value);
        newNode.link = this.head;
        this.head = newNode;
        this.length++;
        console.log(this.head.data);
    }
    
    insertAtLast(value) {
        var node = new Node(value);
        if(this.isEmpty()){
            this.head = node; 
            console.log(this.head.data)
        }
        else {
            console.log("Else part")
            var temp = this.head;
            console.log("current Data =>",temp.data);
            while (temp.link != null) {
                temp = temp.link;
            }
            console.log("temp->data-<",temp.data);
            temp.link = node;
        }
        this.length++;
    }
    
    print(){
        var temp = this.head;
        while (temp != null){
            process.stdout.write(temp.data + "->");
            temp = temp.link;
        }
        console.log("NULL\n");
    }
};

var l1 = new LinkedList();
l1.insertAtHead(3);
l1.insertAtHead(2);
l1.insertAtHead(1);
l1.insertAtLast(4);

l1.print()
