class HashTable{
  constructor(){
    this._storage = [];
    this._count = 0;
    this._limit = 8;
  }

  insert(key, value) {
    let index = this.hash(key, this._limit);
    if (! this._storage[index]){
      this._count++;
    }
    this._storage[index] = value;
    if (this._count > this._storage){
      this.resize(this._limit * 2)
    }
  }

  clear() {
    this._storage = [];
  }

  remove(key) {
    let index = this.hash(key, this._limit);

    if (this._storage[index]){
      this._storage[index] = [];
    }
  }

  search(key) {
    let index = this.hash(key, this._limit);
    if (this._storage[index]){
      console.log(this._storage[index]);
    }
  }


  hash(key, max) {
    return key % max;
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
  };
}
