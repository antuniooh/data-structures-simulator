export default class StaticQueue {
    constructor(max) {
        this.elements = [];
        this.max = max
        this.i = 0
        this.f = 0
    }

    insert(element) {
        if ((this.f + 1) % this.max == this.i) {
            return false;
        }

        this.elements[this.f] = element
        this.f = (this.f + 1) % this.max
        return true;
    }

    remove(element = undefined) {
        if (this.f == this.i) {
            return false;
        }

        if (element != undefined) {
            if (element.value != null) {
                element.value = this.elements[this.i]
            }
        }

        this.i = (this.i + 1) % this.max;
        this.elements.pop();
        return true
    }

    clear() {
        this.i = this.f;
        this.elements = [];
        return true;
    }

    search(value) {
        let finded = (this.elements.indexOf(value) != -1);
        return finded;
    }
    print() {
        console.log(this.elements)
        for (let i = 0; i < this.elements.length; i++)
            console.log(this.elements[i])
    }

}
