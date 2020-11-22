export default class HashTable {
  constructor() {
    this._storage = [];
    this._count = 0;
    this._limit = 8;
  }

  insert(key, value) {
    let index = this.hash(key);
    if (!this._storage[index]) {
      this._count++;
    }
    this._storage[index] = value;
    if (this._count > this._storage) {
      this.resize(this._limit * 2);
    }
    return true;
  }

  clear() {
    this._storage = [];
    return true;
  }

  remove(key) {
    let index = this.hash(key);

    if (this._storage[index]) {
      console.log(this._storage[index]);
      this._storage.splice(index, 1);
      return true;
    }
    return false;
  }

  search(key) {
    console.log(this._storage)
    let index = this.hash(key);
    if (this._storage[index]) {
      alert("Achou")
      return true;
    }
    alert("Nao achou")
    return false;
  }

  getSize(){
    return this._count;
  }

  hash(key) {
    return key % this._limit;
  }

  resize(newLimit) {
    let oldArray = this._storage;

    this._limit = newLimit;
    this._count = 0;
    this._storage = [];

    for (var i = 0; i < oldArray.length; i++) {
      var tuple = oldArray[i];
      this.insert(tuple[0], tuple[1]);
    }
  }
}
