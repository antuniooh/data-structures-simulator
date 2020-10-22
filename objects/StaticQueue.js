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

     if ((this.f  + 1) % this.max == this.i){
         alert("Amigo, parece que sua inserção não teve sucesso :(")
        return false;
     }

     this.elements[this.f] = element
     this.f = (this.f + 1) % this.max
     alert("Amigo, parece que sua inserção teve sucesso :)")
     return true;
    }

    remove(value) 
   {
     if (this.f  == this.i){
      alert("Amigo, parece que sua remoção não teve sucesso :(")
        return false;
     }

     if(value.value){
        value.value = this.elements[this.i]
     }

     this.i = (this.i + 1) % this.max;
     alert("Amigo, parece que sua remoção teve sucesso :)")
     return true
    }

   clear() 
   {
     this.i = this.f;
     this.elements = [];
    }

    search(value){
      let finded = (this.elements.indexOf(value) != -1);
      if(finded)
        alert("Amigo, parece que sua procura teve sucesso :)")
      else
        alert("Amigo, parece que sua procura não teve sucesso :(")
      return finded;
    }
    print(){
      for(let values in this.elements){
        console.log(values)
      }
    }

};

const staticQueue = new StaticQueue();
