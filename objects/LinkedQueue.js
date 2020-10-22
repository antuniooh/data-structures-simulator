function Node(){
   this.value = null;
   this.previous = null;
   this.next = null;
}

class LinkedQueue {
   constructor(){
      this.first = null;
      this.last = null;
      this.finded_value= null;
      this.size = 0;
   }

   insert(value){
    let novo = new Node();
    novo.value = value;
    let ptrAnt = null;
    let ptrAtual = this.first;

    while (ptrAtual != null && ptrAtual.value < value) {
      ptrAnt = ptrAtual;
      ptrAtual = ptrAtual.next;
    }

    if (ptrAnt) {
      ptrAnt.next = novo;
    } else {
      this.first = novo;
    }
    novo.next = ptrAtual;

    if (ptrAtual) {
      ptrAtual.previous = novo;
    } else {
      this.last = novo;
    }
    novo.previous = ptrAnt;

    this.size++;
    return true;
   }

   remove(value){
     if(!this.search(value))
      return false;

      let it = this.first;

      while(it != null){
      if(it.value == value){
        if(it.previous == null && it.next == null){
            this.first = nullptr;
            this.last = nullptr;
        }
        else if(it.previous == null){
            it.next.previous = null;
            this.first = it.next;
        }
        else if (it.next == null){
          it.previous.next = null;
          this.last = it.previous;
        }
        else{
          it.previous.next = it.next;
          it.next.previous = it.previous;
        }
        this.size--;
        return true;
      }
      it = it.next;
    }
    return false;
   }

   clear(){
      this.first = null;
      this.last = null;
   }

   search(value){
      let ptrPrev = null;
      let ptrAtual = this.first;
      while(ptrAtual != null && ptrAtual.value < value){
         ptrPrev = ptrAtual;
         ptrAtual = ptrAtual.next;
      }
      if (ptrAtual && ptrAtual.value === value){
         this.finded_value = ptrAtual;
         return true;
      }
      return false;
   }
}

