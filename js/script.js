
///function-create-new array--length=arguments

function newArray(obj) {
    var x = [];
    var y = [];
    var list = [];
    if (!isFinite(obj)) {
        return false
    }
    for (let i = 0; i < obj; i++) {
        for (let j = 0; j < obj; j++) {
            var m = Math.ceil(Math.random() * Math.pow(obj, 2))
            while (list.includes(m)) {
                m = Math.ceil(Math.random() * Math.pow(obj, 2))
            }
            y.push(m)
            list.push(m)
        }
        x.push(y)
        y = [];
    }
    return x;
}


//array --random elemnts (no-repeat)


function newArrayRandom(length, start, end) {
  var arr = [];
  for (var i = start; i < end; i++) {
    arr.push(i);
  }
  function sort() {
    if (Math.random() > 0.5) {
      return -1;
    } else {
      return 1;
    }
  }
  arr.sort(sort);
  arr.sort;
  return arr.slice(0, length);
}


