function Sorter(quaders) {
    this.quaders = quaders;
    this.index = 0;

    this.insertionSort = function () {
        if (this.index == this.quaders.length) {
            return -1;
        }
        var quad = this.quaders[this.index];
        this.quaders.splice(this.index, 1);
        for (var i = this.index - 1; i >= 0; i--) {
            if (this.quaders[i].h < quad.h) {
                this.quaders.splice(i + 1, 0, quad);
                this.index++;
                return this.index;
            }
        }
        this.quaders.splice(0, 0, quad);
        this.index++;
        return this.index;
    }

    this.selectionSort = function () {
        if (this.index == this.quaders.length) {
            return -1;
        }
        var smallest = new Quader(0, height);
        var indexOfSmallest = -1;
        for (var i = this.index; i < this.quaders.length; i++) {
            if (this.quaders[i].h < smallest.h) {
                smallest = this.quaders[i];
                indexOfSmallest = i;
            }
        }
        this.quaders.splice(indexOfSmallest, 1);
        this.quaders.splice(this.index, 0, smallest);
      //  this.quaders[this.index].playSound();
        this.index++;
        return this.index;
    }

    //Returns false if done with sorting
    this.bubbleSort = function (swapped) {
        if (swapped) return -1;
        if (this.index == 0 || this.index == this.quaders.length) this.index = 1;

        for (var i = 1; i < this.quaders.length; i++) {
            if (this.quaders[i - 1].h > this.quaders[i].h) {
                //                this.quaders[i].playSound();
                this.swap(i - 1, i);
                swapped = true;
            }
        }
        return swapped;
    }

    this.swap = function (index1, index2) {
        var quad = this.quaders[index1];
        this.quaders.splice(index1, 1, this.quaders[index2]);
        this.quaders.splice(index2, 1, quad);

    }
}
