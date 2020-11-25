export default class HashTable {
  constructor() {
    this._storage = [];
    this._count = 0;
    this._limit = 5;
  }

  insert(key, value) {
    let index = this.hash(key);
    if (!this._storage[index]) {
      this._count++;
    }
    this._storage[index] = value;
    return true;
  }

  clear() {
    this._storage = [];
    this._count = 0;
    return true;
  }

  remove(key) {
    let index = this.hash(key);

    if (this._storage[index]) {
      console.log(this._storage[index]);
      this._storage.splice(index, 1, undefined);
      this._count--;
      return true;
    }
    return false;
  }

  search(key) {
    console.log(this._storage)
    let index = this.hash(key);
    if (this._storage[index]) {
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
}
