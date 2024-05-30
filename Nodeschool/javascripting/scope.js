//  const a = 1; const b = 2; const c = 3;

//  (function firstFunction () {
//      const b = 5; const c = 6;

//      (function secondFunction () {
//              const b = 8;

//          (function thirdFunction (){
//              const a = 7; const c = 9;

//              (function fourthFunction () {
//                  const a = 1; const c = 8;
                
//              })
//          })
//      })
//  })
//  console.log('a: 1, b: 8, c: 6')

// Above worked BUT its wrong

// Place console.log('a: ${a}, b: ${b}, c: ${c}') inside the above code
// so the out put is a: 1, b: 8, c: 6

// No errors below but doesn't pass yet

const a = 1; const b = 2; const c = 3;

(function firstFunction () {
  const b = 5; const c = 6;

  (function secondFunction () {
    const b = 8;
      console.log('a: ' + a + ', b: ' + b + ', c: ' + c); 

    (function thirdFunction () {
      const a = 7; const c = 9;

      (function fourthFunction () {
        const a = 1; const c = 8
      })()
    })()
  })()
})()