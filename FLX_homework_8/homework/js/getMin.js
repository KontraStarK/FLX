function getMin(a,b,c){
    var array =[a,b,c];
    for (var i = 0; i < array.length; i++) {
        if(array[i]< 0){
            return array[i];
        }
    }
}
getMin(3, 0, -3);