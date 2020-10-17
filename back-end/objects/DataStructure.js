class DataStructure
{
    constructor() 
    {
     this.insert = this.insert.bind(this)
     this.remove = this.remove.bind(this)
     this.clear = this.clear.bind(this)
    }

   insert(element){}
   remove(value) {}
   clear() {}
};
