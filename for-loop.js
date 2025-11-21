/*
for(i=1;i<=5;i++){
    console.log(i);
}

*/

//for straight line code
output = " ";

    for(i=1;i<=5;i++){
        output += i + " ";
    }
     console.log(output);

      //reverse but numbers
    for(i=5;i>=1;i--){
        output += i + " ";
    }
     console.log(output);


     //for reverse

     reverse = " ";

     str = "aaron";
     for(i=str.length; i>=0; i--){
        reverse += str[i];
     }

     console.log(reverse);

     //array
     arr = [4,2,3];

     for(i=0; i<arr.length; i++){
        console.log(arr[i]);
     }

     //horizontal array
     output = " ";
     arr = [4,2,3];

     for(i=0; i<arr.length; i++){
        output += arr[i] + " ";
     }
     console.log(output);

     //reverse array
     output = " ";
     arr = [4,2,3];

     for( i=arr.length; i>=0; i--){
        output += arr[i] + " ";
     }
     console.log(output);


     //function arraytraverse

     arr1 = [4,2,3];
    arr2 = [6,8,3,9,4];
     function arraytraverse(arr){

        output = " ";
     
        for( i=0; i<=0; i++){
        output += arr[i] + " ";

        }

        console.log(output);
     }

     console.log(arr1);
     console.log(arr2);
     //pwede pa ka mag add ug pila ka array
    