function Sorter(quaders) {
    this.quaders = quaders;
    this.index=1;
    
    this.insertionSort = function(){
        if(this.index == this.quaders.length){
            return -1;
        }
        var quad = this.quaders[this.index];
        this.quaders.splice(this.index,1);
        for(var i = this.index-1;i>=0;i--){
            if(this.quaders[i].h<quad.h){
                this.quaders.splice(i+1,0,quad);
                this.index++ ;
                return this.index;
            }
        }
        this.quaders.splice(0,0,quad);
        this.index++;
        return this.index;
    }
}
