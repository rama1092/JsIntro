var matrix = [
    [1, 3, 9, 4],
    [9, 5, 7, 7],
    [3, 6, 9, 7],
    [1, 2, 2, 2],
  ];

  var a = true;
  var msize = matrix.length + 2;
  
  for (var i = 0; i < matrix.length; i++){
      rows = matrix.length;
      cols = matrix[i].length;
      if (rows != cols) {
          console.log("Not a square matrix");
          a = false;
          break;
      }
      
      for (var j=0;j<matrix.length; i--, j++){
        if (i<0 ){
          i= i+ 2;
        }
        console.log(matrix[i][j]);
        console.log(i , j);
      }
    }