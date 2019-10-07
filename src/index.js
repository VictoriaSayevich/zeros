module.exports = function zeros(expression) {
  // your solution
  let c2 = 0, c5 = 0;
  let two_five, fact_arr = [];

  let arr_to_fact = SliceNumber(expression);

  for (let i = 0; i < arr_to_fact.length; i++) {
    if (arr_to_fact[i].count == 2) fact_arr = Factorial((arr_to_fact[i].number), 2);
    else fact_arr = Factorial((arr_to_fact[i].number), 1);
    two_five = CountFiveTwo(fact_arr);
    c2 += two_five.count_two;
    c5 += two_five.count_five;
  }
  if (c5 < c2) return c5;
  return c2;
}

function CountFiveTwo(arr) {
  let div = 2;
  const obj_res = {
      count_two: 0,
      count_five: 0,
  }
  for (let i = 0; i < arr.length; i++) {
    div = 2;  
    while (arr[i] > 1) {
      while (arr[i]%div == 0) {
          if (div == 2) obj_res.count_two++;
          if (div == 5) obj_res.count_five++;
          arr[i] /= div;
      }
      if (div == 2) div++;
      else div +=2;
    }
  }
  return obj_res;
}

function Factorial (num, n) {
  let fact_arr = [];
  for (let i = num; i > 0; i -= n) {
    fact_arr.push(i);
  }
  return fact_arr;
}

function SliceNumber (str) {
  let pos = 0, i = 0;
  let f = true;
  let res = {
      count: 1,
      number: 0
  }
  const res_arr = [];
  for (i; i < str.length; i++) {
    pos = str.indexOf("*", i);
    
    //Check last number
    if (pos == -1) {
      f = false;
      pos = str.length;
    }
    if (str[pos-2] == "!") {
      res.count = 2;
      res.number = Number(str.slice(i, pos-2));
    }
    else {
      res.count = 1;
      res.number = Number(str.slice(i, pos-1)); 
    }
    res_arr.push({
        count:res.count,
        number:res.number
    });
    i = pos;
    if (!f) break;
  }
  return res_arr;
}