class StaticQueue
{
    constructor(max) 
    {
     this.elements = [];
     this.max = max
     this.i = 0
     this.f = 0
    }

   insert(element) 
   {
     if ((this.f  + 1) % this.max == this.i)
        return false;

     this.elements[this.f] = element
     this.f = (this.f + 1) % this.max
     return true;
    }

    remove(value) 
   {
     if (this.f  == this.i)
        return false;

     if(value.value){
        value.value = this.elements[this.i]
     }

     this.i = (this.i + 1) % this.max;
     return true
    }

   clear() 
   {
     this.i = this.f;
     this.elements = [];
    }

};
