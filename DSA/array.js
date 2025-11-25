class Array{

    constructor(initialData = []){
        this.data = {};
        this.length = 0;

        //assigned element to index
        for(let i=0; i < initialData.length; i++){
            this.data[i] = initialData[i];
            this.length++;
        }
    }

    traverse(){
        let output = "";

        for(let i=0; i<this.length; i++){
        output += this.data[i] + " ";
        }
       console.log(output);
    }
    
    insert(index, elements){
        //correcting statement - dli siya trycatch statement || must be false para mag shifting
        if(index < 0 || index >= this.length){
            console.log("invalid index");
            return;
        }

        //shifting condition - movement sa array if left or right || e evaluate niya ang length sa data
        for(let i=this.length; i>index; i--){
            this.data[i] = this.data[i-1];
        }

        //after condition
        this.data[index] = elements;
        this.length++;
    }

    delete(index){

        //correcting statement - dli siya trycatch statement || must be false para mag shifting
        if(index < 0 || index >= this.length){
            console.log("invalid index");
            return;
        }

         //shifting condition - movement sa array if left or right || e evaluate niya ang length sa data
        for(let i=index; i>this.length; i++){
            this.data[i] = this.data[i+1];
        }

        //after condition
        delete this.data[this.length-1];
        this.length--;
    }

    update(index, element){
        //correcting statement - dli siya trycatch statement || must be false para mag shifting
        if(index < 0 || index >= this.length){
            console.log("invalid index");
            return;
        }

        //after condition
        this.data[index] = elements;
    }

}

arr1 = new Array([4,3,2]);
arr1.traverse();
arr1.insert(0,9);
arr1.traverse();

arr1.delete(2);
arr1.traverse();

arr1.update(2,5);
arr1.traverse();

