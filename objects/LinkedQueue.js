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
    alert("Amigo, parece que sua inserção teve sucesso :)")
    return true;
   }

   remove(value){
     if(!this.search(value)){
      alert("Amigo, parece que sua remoção não teve sucesso :(")
      return false;
     }

      let it = this.first;

      while(it != null){
      if(it.value == value){
        if(it.previous == null && it.next == null){
            this.first = null;
            this.last = null;
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
        alert("Amigo, parece que sua remoção teve sucesso :)")
        return true;
      }
      it = it.next;
    }
    alert("Amigo, parece que sua remoção não teve sucesso :(")
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
         alert("Amigo, parece que sua procura teve sucesso :)")
         return true;
      }
      alert("Amigo, parece que sua procura não teve sucesso :(")
      return false;
   }
   print(){
    let tmp = this.first;
    while (tmp != null) {
      console.log(tmp.value);
      tmp = tmp.next;
    }
  }
}

const linkedQueue = new LinkedQueue();

