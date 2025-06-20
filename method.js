let b=1;
{
while(b%2!=0){
    b++
}
console.log("odd")
}
let a=2;
while(a<5){
    console.log(a)
    a++;
}

let c,d;
function add(c,d){
    console.log(c+d);
}
add(8,9);
let sub=(c,d)=>
     console.log (c-d);
sub(7,2);
let mul=(c,d)=>
    console.log(c*d);
mul(24,7);
let div=(c,d)=>
    console.log(c/d);
div(24,4);
                   //methods
let fruits = ["mercury", "venus", "saturn", "jupiter"];

console.log("Before pop:", fruits);

// Remove the last element
let lastFruit = fruits.pop();

console.log("Popped element:", lastFruit);
console.log("After pop:", fruits);
let s=["pen","box","erase","scale"];
console.log("before push:",s);
let ss=s.push("sharperner");
console.log("pushed item:",ss);
console.log("After push: ",s);
fruits.reverse();
console.log("After reverse:",s);
let fruit1=["Earth"];
let fruit2=fruits.concat(fruit1);
console.log("After concatenation:",fruit2);

const numbers=[1,2,3,4,5];
const doubled=numbers.map(num=>num*2);
console.log(doubled);
const evens=numbers.filter(num=>num % 2 ==0);
console.log("filtered (evens):",evens);
const sum=numbers.reduce((accumulator,current)=> accumulator+current,0);
console.log("reduced(sum):",sum);

// task
const students = [
  { name: "sanjay", marks: [99, 97, 98] },
  { name: "shubha", marks: [95, 97, 90] },
  { name: "sri", marks: [60, 50, 65] },
  { name: "priya", marks: [55, 58, 62] },
  { name: "Asvika", marks: [65, 55, 60] }
];

const totalMarksArray = students.map(student => {
  const total = student.marks.reduce((sum, mark) => sum + mark, 0);
  return { name: student.name, totalMarks: total };
});

console.log("Total Marks of Each Student:");
console.log(totalMarksArray);

const above200 = totalMarksArray.filter(student => student.totalMarks > 200);

console.log("Students Scoring Above 200 Marks:");
console.log(above200);

const topperMarks = totalMarksArray.reduce((max, student) => {
  return student.totalMarks > max ? student.totalMarks : max;
}, 0);

console.log("Topper's Total Marks:", topperMarks);
let ABC=new Set([1,6,9,5,7,8,38,6,6]);
console.log(ABC);
let xy=["sanjay","shubhha"];
let[a2,b2]=xy;
console.log(a2,b2);

let array1=[3,4,5,6,7,8];
let array2=[...array1,1,2,0];
console.log(array2);

 x=9;
console.log(x);
function outer()
{
  let name="sri";
   function inner()
  {
    console.log("hi" + name);
  }
  return inner;
}
let xyz=outer();
xyz();
console.log("first");
setTimeout(()=> {
  console.log("second , setinterval");

},1000);
console.log("end1");

let count=1;
const timer = setInterval(() => {
  console.log(count);
  count++;
  if (count > 5) {
    clearInterval(timer);
  }
},1000);


