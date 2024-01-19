class Stack {
  constructor() {
    this.items = [];
    this.count = 0;
  }

  // Add element to top of stack
  push(element) {
    this.items[this.count] = element;
    let push_res = `${element}`; //console.log(`added to ${this.count}`);
    this.count += 1;
    let count = this.count - 1;
    //return [push_res,count];
    return [push_res, count];
  }

  // Return and remove top element in stack
  // Return undefined if stack is empty
  pop() {
    if (this.count == 0) return undefined;
    let deleteItem = this.items[this.count - 1];
    this.count -= 1;
    console.log(`${deleteItem} removed`);
    return deleteItem;
  }

  // Check top element in stack
  peek() {
    console.log(`Top element is ${this.items[this.count - 1]}`);
    return this.items[this.count - 1];
  }

  // Check if stack is empty
  isEmpty() {
    console.log(this.count == 0 ? "Stack is empty" : "Stack is NOT empty");
    return this.count == 0;
  }

  // Check size of stack
  size() {
    console.log(`${this.count} elements in stack`);
    return this.count;
  }

  // Print elements in stack
  print() {
    let str = "";
    for (let i = 0; i < this.count; i++) {
      str += this.items[i] + " ";
    }
    return str;
  }

  // Clear stack
  clear() {
    this.items = [];
    this.count = 0;
    console.log("Stack cleared..");
    return this.items;
  }
}

const stack = new Stack();

$(document).ready(function () {
  $("#btn_push").on("click", () => {
    let push_data = stack.push($("#st_data").val());
    $("#stack").prepend(
      `<div id="st${push_data[0]}" class="row bg-primary push">${push_data[0]}</div>`
    );
  });
  $("#btn_pop").on("click", () => {
    let pop_data = stack.pop();
    if (pop_data) {
      $("#popped").prepend(`
        <div class="row pop text-bg-danger border border-light">${pop_data}</div>
        `);
      $(`#st${pop_data}`).remove();
    }
  });
  $("#btn_peek").on("click", () => {
    let peek_data = stack.peek();
    $(`#st${peek_data}`).removeClass("bg-primary").addClass("peek");
    setTimeout(() => {
      $(`#st${peek_data}`).removeClass("peek").addClass("bg-primary");
    }, 500);
  });
  $("#btn_clear").on("click", () => {
    stack.clear();
    $("#stack, #popped").empty();
  });
});
