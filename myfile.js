const removed = require("stopwords").english;
//Sentence segmentation
function segmen(str) {
  str = str.replace(/[?]/g, ".");
  var a = str.split(".");
  a.pop();
  return a;
  // console.log(a);
}
// var str = "Pikachu is hungry? He is also thirsty.";
// segmen(str);

function wordsegm(str) {
  str = str.replace(/[?]/g, ".");
  str = str.replace(/[.]/g, "");
  var b = str.split(" ");
  return b;
}
// var str = "Pikachu is hungry? He is also thirsty.";
// wordsegm(str);

function removestp(str) {
  str = str.replace(/[?]/g, ".");
  str = str.replace(/[.]/g, "");
  const oldstr = str.split(" ");
  var r = "";
  oldstr.forEach(funku);
  function funku(item, index, arr) {
    if (removed.includes(item)) {
    } else {
      r += item + " ";
    }
  }
  return r;
}
//remove duplicate from strings
function uniquestr(str) {
  str = str.toLowerCase();
  str = str.replace(/[?]/g, ".");
  str = str.replace(/[.]/g, "");
  var arr = str.split(" ");
  function removeDuplicates(arr) {
    return [...new Set(arr)];
  }
  const setis = removeDuplicates(arr);
  var b = "";
  setis.forEach(function (el) {
    b += el + " ";
  });
  return b;
  // console.log(b);
}
uniquestr("My name is madhav. yes my name madhav");
//each  word of string reverse
function reversestring(str) {
  str = str.replace(/[?]/g, ".");
  str = str.replace(/[.]/g, "");
  const arr = str.split(" ");
  var y = "";
  arr.forEach((el) => {
    y += el.split("").reverse().join("") + " ";
  });
  return y;
}
//extract numbers
function extractnum(str) {
  var f = str.match(/\d/g);
  f = f.join("");
  return f;
}

module.exports = {
  segmen,
  wordsegm,
  removestp,
  uniquestr,
  reversestring,
  extractnum,
};
