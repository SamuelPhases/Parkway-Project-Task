//  PARKWAY PROJECT TASK 1
const warnTheDeveloper = (n,m,s) =>{
    let arr = Array.from({length: n}, (_, i) => i + 1)
    let result = '';
    let i = m;
    let newArr = [];
    start=s
    
    do {
        for (let step = start; step < arr.length; step++) {
        newArr.push(arr[step])
    }
      i = i - 1;
      result = result + i;
    } while (i > 0 );
    
    
    console.log(`Warn the developer ${newArr[i]}`)
}

warnTheDeveloper(4,6,2)
// warnTheDeveloper(5,2,2) = 3
// warnTheDeveloper(5,2,1) = 2
// warnTheDeveloper(4,6,2) = 3