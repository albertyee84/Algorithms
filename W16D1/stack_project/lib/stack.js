// ============================================================================
// Implementation Exercise: Stack
// ============================================================================
//
// -------
// Prompt:
// -------
//
// Implement a Stack and all of its methods below!
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
        this.next = null;
        this.value = val;
    }
}

class Stack {
    constructor(){
        this.top = null;
        this.bottom = null;
        this.length = 0;
    }

    push(val){
        const newNode = new Node(val);
        if(this.length === 0){
            this.top = newNode;
            this.bottom = newNode;
        } else {
            let current = this.top;
            this.top = newNode;
            this.top.next = current;
        }
        this.length++;
        return this.size();
    }

    pop(){
        let current;
        if(this.length === 0) return null;
        if(this.length === 1){
            current = this.top;
            this.top = null;
            this.bottom = null;
        } else {
            current = this.top;
            this.top = this.top.next;
        }
        this.length--;
        return current.value;
    }

    size(){
        return this.length;
    }
}

exports.Node = Node;
exports.Stack = Stack;
