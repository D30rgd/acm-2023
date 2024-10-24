//----------Arrow function

const fucn2= (a,b) =>{
       return a+b;
}

// console.log(fucn2(3,4));

// - incase of single argument  so what we can do  ------------

//  without return we can return

const value = (a,b) =>a*b;  // we can remove { }  if we only retun with som ecalculation

// console.log(value(5,4));


//   -------------------------   set time out ---------------

//setTimeout(function, timeout)//

// setTimeout(()=>{console.log('this is set time out');
// },4000);

// console.log("welcome");  // first run this after this setTime out after 4000 ms
// settime out running parallely with another now when time will aut it will work

// setInterval  it will after interval all function again and again not for single time
// const id = setInterval(()=>{console.log('helo this can be done in one time');
// },2000);


// clearInterval(id);  // to clear setInterval otherwise it run again and again

// -----------------  changes behaviour in this key word with arrow function and normal function------------

/*

this use scope of calling object when use in normal function but
  when we use arrow function so this use the scope of parent function

*/


// const Boys= {

//        name : "dainish",
//        place : this, 
//        getInfo : function(){
//               console.log(this.place);
              
//        },

//        getInfo1 : function(){
//               console.log(this);
//        },

//        getInfo2 : ()=>{
//               console.log(this);// window object
              
//        },

//        getInfo3 : function(){
//        setTimeout(()=>{console.log(this);
//        },4000);
//        },

//        getInfo4 : function(){
//               setTimeout(function(){console.log(this);
//               },1000);
//        }

// };

// console.log("getInfo");

// Boys.getInfo();
// console.log("getInfo1");
// Boys.getInfo1();
// console.log("getInfo2");
// Boys.getInfo2();
// console.log("getInfo3");
// Boys.getInfo3();
// console.log("getInfo4");
// Boys.getInfo4();


const ArrayAvg = (arr)=>{
       let s=0;

       for(let x of arr)
       {
                 s+=x;
       }

       console.log(s/arr.length);
       
}
// ArrayAvg([1,2,3,4,5]);

let isEven = (num)=> {
       if(num%2===0)
              console.log("even");
       else
       console.log("odd");
              
}

// isEven(4);

// const object = {
//        message: "hellow world",

//        getInfo(){
//               console.log(this.message);
//        }
// }

// setTimeout(object.getInfo,1000);  // here this related to window object since setTimeout function of windo object and setTimeout invok it so it invoke this as window object


// let length=4;
// function callback(){console.log(this.length);
// }
// const object={length:5,
//        method(callback){callback();},};
//        object.method(callback,1,2);


