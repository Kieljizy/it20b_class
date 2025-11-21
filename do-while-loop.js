//ascending
i = 1;

do {
    console.log(i);
    i++;
}
    while (i>=5);


    //descending
    i = 5;

do {
    console.log(i);
    i--;
}
    while (i>=1);

    //oneline
    output = " ";
    
    i = 5;

do {
    output += i + " ";
    i++;
}
    while (i<=5);
    console.log(output);

    // function

    arr1 = [4,2,3];

    function arrDowhile(arr){
        output = " ";

        i = 0;
    do{
        output += arr[i] + " ";
        i++;
    } while (i < arr.length);

    console.log(output);
}

arrDowhile(arr1);
