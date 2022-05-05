class ArrayImplementation {
  length: number;
  data: any;

  constructor() {
    this.length = 0;
    this.data = {};
  }

  get(index: number) {
    return this.data[index];
  }

  push(item: string) {
    this.data[this.length] = item;
    this.length++;
    return this.length;
  }

  pop() {
    let lastItem = this.data[this.length - 1];
    delete this.data[this.length - 1];
    this.length - 1;
    return lastItem;
  }

  delete(index:number) {
    const item = this.data[index];
    this.shiftItems(index);
    return item;
  }

  shiftItems(index:number) {
    for (let i = index; i < this.length - 1; i++) {
      this.data[i] = this.data[i + 1];
    }

    delete(this.data[this.length-1]);
    this.length--;
  }
}

const newArray = new ArrayImplementation();
newArray.push("Hi");
newArray.get(0);
newArray.push("Shagun");
newArray.push("Chaurasia");
console.log(newArray);
// newArray.pop();
console.log(newArray);
newArray.delete(1);
console.log(newArray);
