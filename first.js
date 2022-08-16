// Over all looping (for loop, for in loop, for of loop, for each);

//FOR LOOPING

var marks = [95,66,75,90,44];
console.log("length of the arrey", marks.length);

for (let i = 0; i < marks.length; i++) {
  console.log("i=",i, marks[i]);
 
}

//for in loops (given only index)
var marks = [95,66,75,90,44];

for(var i in marks){
console.log("index=", i ,marks[i]);

}

//for of loops(only given value)

var marks = [95,66,75,90,44];
for(var i of marks){
  console.log(i);
}

//for each

var marks = [95,66,75,90,44];

marks.forEach(function(mark){
  console.log(mark);
});