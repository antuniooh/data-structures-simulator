/**
 * @class       : ldde
 * @author      : Henrique Vital Carvalho (henriquevital1000@hotmail.com)
 * @created     : domingo out 18, 2020 20:04:30 -03
 * @description : ldde
 */

function Node(){
   this.value = null;
   this.previous = null;
   this.next = null;
}

class Ldde {
   constructor(){
      this.first = null;
      this.last = null;
      this.finded_value= null;
      this.size = 0;
   }
   insert(value){
      let newNode = new Node();
      newNode.value = value;
      if (this.size == 0){
         this.first = newNode;
      }
      else{
         let ptrPrev = null;
         let ptrAtual = this.first;
         while(ptrAtual != null && ptrAtual.value < value){
            ptrPrev = ptrAtual;
            ptrAtual = ptrAtual.next;
         }

         if (ptrPrev) {
            ptrPrev.next = newNode;
         }
         else{
            this.first = newNode;
         }
         newNode.next = ptrAtual;

         if (ptrAtual){
            ptrAtual.previous = newNode;
         }
         else{
            this.last = newNode;
         }
         newNode.previous = ptrPrev;

         this.size++;

         return true;

      }
   }
   remove(value){
      if (this.search(value)){
         if (this.finded_value.previous){
            this.finded_value.previous.next = this.finded_value.next;
            if (this.finded_value.next){
               this.finded_value.next.previous = this.finded_value.previous;
            }
            this.size--;
         }
         else{
            if (this.finded_value.next){
               this.finded_value.next.previous = null;
               this.size--;
            }
            else{
               this.first = null;
               this.last = null;
               this.size=0;
            }
         }
         return true;
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


