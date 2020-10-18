/**
 * @class       : hash
 * @author      : Henrique Vital Carvalho (henriquevital1000@hotmail.com)
 * @created     : sábado out 17, 2020 15:11:26 -03
 * @description : hash
 */

var HashTable = function() {
  this._storage = [];
  this._count = 0;
  this._limit = 8;
}


HashTable.prototype.insert = function(key, value) {
  let index = this.hash(key, this._limit);
  if (! this._storage[index]){
    this._count++;
  }
  this._storage[index] = value;
  if (this._count > this._storage){
    this.resize(this._limit * 2)
  }
};

HashTable.prototype.clear = function() {
  this._storage = [];
}

HashTable.prototype.remove = function(key) {
  let index = this.hash(key, this._limit);

  if (this._storage[index]){
    this._storage[index] = [];
  }
};

HashTable.prototype.search = function(key) {
  let index = this.hash(key, this._limit);
  if (this._storage[index]){
    console.log(this._storage[index]);
  }
};


HashTable.prototype.hash = function(key, max) {
  return key % max;
};


HashTable.prototype.resize = function(newLimit) {
  let oldArray = this._storage;

  this._limit = newLimit;
  this._count = 0;
  this._storage = [];

  for (var i = 0; i < oldArray.length; i++) {
    var tuple = oldArray[i];
    this.insert(tuple[0], tuple[1]);
   }
};


/******************************TESTS*******************************/

var hashT = new HashTable();

hashT.insert(10, '510-599-1930');

