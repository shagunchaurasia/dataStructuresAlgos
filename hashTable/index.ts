class HashTable {
  data: any[];

  constructor(size:number) {
    this.data = new Array(size);
  }

  _hash(key:any) {
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      hash = (hash + key.charCodeAt(i) * i) % this.data.length;
      this.data.length
    }
    return hash;
  }

  set(item:any,item2:any){
      this.data.push([item,item2]);

  }

}


const myHashTable = new HashTable(50);
myHashTable.set('grapes',10000);
console.log(myHashTable)