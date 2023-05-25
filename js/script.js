// Nomor1
document.getElementById("generate").onclick = function () {
    var n = document.getElementById("N").value;
    let a = 0;
    let result = "";
    let temp = [];
  
    while (temp.length < n) {
      a++;
      if (a % 3 === 0 && a % 7 === 0) {
        temp.push("z");
      } else if (a % 7 === 0) {
        temp.push(a.toString());
      } else if (a % 3 === 0) {
        temp.push(a.toString());
      }
    }
    result = temp.toString();
    document.getElementById("result1").innerHTML = result;
  };
  
  //Nomor2 
  document.getElementById("check").onclick = function () {
    var text = document.getElementById("paragrafInput").value.toLowerCase();
    // console.log(text);
    // console.log(text.length);
    let animal1 = "sang gajah";
    let animal2 = "serigala";
    let animal3 = "harimau";
    let temp = [];
    let result = "";
    let textRemoveDot = text.replace(/\./g, "");
    temp = textRemoveDot.split(" ");
  
    for (let i = 0; i < temp.length; i++) {
        if (temp[i] === animal1a && temp[i + 1] === animal2a) {
          arrayResult.push(temp[i]);
          arrayResult.push(temp[i + 1]);
        } else if (temp[i] === animal2) {
          arrayResult.push(temp[i]);
        } else if (temp[i] === animal3) {
          arrayResult.push(temp[i]);
        }
      }
      
    for (let j = 0; j < arrayResult.length; j++) {
        if (arrayResult[j] === "sang" && arrayResult[j + 1] === "gajah") {
          result = arrayResult[j] + " " + arrayResult[j + 1];
        } else {
          result = result + "-" + arrayResult[j];
        }
    }

    document.getElementById("result2").innerHTML = result;
    
  };
  
  
  //Nomor3
  document.getElementById("submit").onclick = function () {
    var password = document.getElementById("pswd").value;
  
    var checkerPassword = new RegExp(
      "((?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,}))|((?=.*[a-z])(?=.*[A-Z])(?=.{32,}))"
    );
  
    if (checkerPassword.test(password)) {
      document.getElementById("message").innerHTML = "Kata Sandi Valid";
    } else {
      document.getElementById("message").innerHTML = "Kata Sandi invalid";
    }
  };


  //nomor4

  function findSmallestNumber(listNumber){
    var sortNumber = listNumber.sort();
    var x = 0;
    var numberAddition = 0;
    var result = 0;
  
    while(x<sortNumber.length){
      x++;
      numberAddition = sortNumber[x]+1;
      if(!sortNumber.includes(numberAddition) && numberAddition<result){
        result = numberAddition;
      }
      else{
        break;
      }  
    }
    console.log(result);
  }
  
  findSmallestNumber( [5, 2, 8, 4, 3, 10]);


  //Nomor5
  function makePattern() {
    var temp = [];
    var n = document.getElementById("nGenerator").value;
    let result = "";
  
    for (var i = 0; i < n; i++) {
      temp[i] = [];
      for (var j = 0; j < n; j++) {
        temp[i][j] = "o";
      }
    }
  
    if (n % 2 !== 0) {
      for (var row = 0; row < n; row++) {
        for (var column = 0; column < n; column++) {
          if (row === 0 || row === n-1  || column === 0 || column === n-1 ) {
            temp[row][column] = "x";
          } else if ((row + 1) + (column + 1) === n + 1) {
            temp[row][column] = "x";
          }
        }
      }
    }
  
    for (let i = 0; i < n; i++) {
      for (let j = 0; j < n; j++) {
        result += temp[i][j] + "";
      }
      result = result + "<br>";
    }
  
    document.getElementById("result5").innerHTML = result;
    console.table(temp);
    // console.log(temp);
  }


  
  makePattern(5);
  