// ============================================================================
// Implementation Exercise: Queue
// ============================================================================
//
// -------
// Prompt:
// -------
//
// Implement a Queue and all of its methods below!
//
// ------------
// Constraints:
// ------------
//
// Make sure the time and space complexity of each is equivalent to those 
// in the table provided in the Time and Space Complexity Analysis section
// of your Stack reading!
//
// -----------
// Let's Code!
// -----------

class Node {
    constructor(val){
        this.value = val;
        this.next = null;
    }
}

class Queue {
    constructor(){
        this.length = 0;
        this.front = null;
        this.back = null;
    }
    enqueue(val){
        let newNode = new Node(val);
        if(this.length === 0){
            this.front = newNode;
            this.back = newNode;
        } else {
            this.back.next = newNode;
            this.back = newNode;
        }
        this.length++;
        return this.size();
    }

    dequeue(){
        let current = this.front;
        if(this.length === 0) return null;
        if(this.length === 1){
            this.front = null;
            this.back = null;
        } else {
            this.front = this.front.next;
        }
        this.length--;
        return current.value;

    }

    size(){
        return this.length;
    }

}

exports.Node = Node;
exports.Queue = Queue;