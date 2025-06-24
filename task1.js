use myCollege
switched to db myCollege
db["student"].find()
db.createCollection("student")
{ ok: 1 }
db.students.insertOne({ name: "Anu", age: 20,department: "CSE",city: "Chennai"})
{
  acknowledged: true,
  insertedId: ObjectId('685a77f195961eebe97f3497')
}
db.students.insertMany([
  { name: "Sri", age: 21, department: "ECE", city: "Delhi" },
  { name: "Asvika", age: 22, department: "EEE", city: "Mumbai" },
  { name: "Saranya", age: 20, department: "CSE", city: "Coimbatore" },
  { name: "vimo", age: 23, department: "IT", city: "Chennai" }
])
{
  acknowledged: true,
  insertedIds: {
    '0': ObjectId('685a781b95961eebe97f3498'),
    '1': ObjectId('685a781b95961eebe97f3499'),
    '2': ObjectId('685a781b95961eebe97f349a'),
    '3': ObjectId('685a781b95961eebe97f349b')
  }
}
db.students.find()
{
  _id: ObjectId('685a6677429f944dce671a3d'),
  name: 'Anu',
  age: 20,
  department: 'CSE',
  city: 'Chennai',
  email: 'anu@example.com'
}
{
  _id: ObjectId('685a6677429f944dce671a3e'),
  name: 'Bala',
  age: 21,
  department: 'ECE',
  city: 'Delhi'
}
{
  _id: ObjectId('685a6677429f944dce671a40'),
  name: 'Sara',
  age: 20,
  department: 'CSE',
  city: 'Coimbatore'
}
{
  _id: ObjectId('685a6677429f944dce671a41'),
  name: 'Ram',
  age: 23,
  department: 'AIML',
  city: 'Chennai'
}
{
  _id: ObjectId('685a6a462df627fe4a897c27'),
  name: 'Anu',
  age: 20,
  department: 'CSE',
  city: 'Chennai'
}
{
  _id: ObjectId('685a6a5f2df627fe4a897c28'),
  name: 'shubhaa',
  age: 20,
  department: 'CSE',
  city: 'Chennai'
}
{
  _id: ObjectId('685a6aae2df627fe4a897c29'),
  name: 'sri',
  age: 23,
  department: 'ECE',
  city: 'Delhi'
}
{
  _id: ObjectId('685a6aae2df627fe4a897c2a'),
  name: 'Asvika',
  age: 22,
  department: 'AIML',
  city: 'Mumbai'
}
{
  _id: ObjectId('685a6aae2df627fe4a897c2b'),
  name: 'Swetha',
  age: 20,
  department: 'CSE',
  city: 'Coimbatore'
}
{
  _id: ObjectId('685a6aae2df627fe4a897c2c'),
  name: 'harshu',
  age: 21,
  department: 'IT',
  city: 'Chennai'
}
{
  _id: ObjectId('685a77f195961eebe97f3497'),
  name: 'Anu',
  age: 20,
  department: 'CSE',
  city: 'Chennai'
}
{
  _id: ObjectId('685a781b95961eebe97f3498'),
  name: 'Sri',
  age: 21,
  department: 'ECE',
  city: 'Delhi'
}
{
  _id: ObjectId('685a781b95961eebe97f3499'),
  name: 'Asvika',
  age: 22,
  department: 'EEE',
  city: 'Mumbai'
}
{
  _id: ObjectId('685a781b95961eebe97f349a'),
  name: 'Saranya',
  age: 20,
  department: 'CSE',
  city: 'Coimbatore'
}
{
  _id: ObjectId('685a781b95961eebe97f349b'),
  name: 'vimo',
  age: 23,
  department: 'IT',
  city: 'Chennai'
}
db.students.find({ department: "EEE" })
{
  _id: ObjectId('685a781b95961eebe97f3499'),
  name: 'Asvika',
  age: 22,
  department: 'EEE',
  city: 'Mumbai'
}
db.students.find({ department: "ECE" })
{
  _id: ObjectId('685a6677429f944dce671a3e'),
  name: 'Bala',
  age: 21,
  department: 'ECE',
  city: 'Delhi'
}
{
  _id: ObjectId('685a6aae2df627fe4a897c29'),
  name: 'sri',
  age: 23,
  department: 'ECE',
  city: 'Delhi'
}
{
  _id: ObjectId('685a781b95961eebe97f3498'),
  name: 'Sri',
  age: 21,
  department: 'ECE',
  city: 'Delhi'
}
db.students.find({ age: { $gt: 23 } })
db.students.find({ age: { $gt: 23 } })
db.students.find({ age:23})
{
  _id: ObjectId('685a6677429f944dce671a41'),
  name: 'Ram',
  age: 23,
  department: 'AIML',
  city: 'Chennai'
}
{
  _id: ObjectId('685a6aae2df627fe4a897c29'),
  name: 'sri',
  age: 23,
  department: 'ECE',
  city: 'Delhi'
}
{
  _id: ObjectId('685a781b95961eebe97f349b'),
  name: 'vimo',
  age: 23,
  department: 'IT',
  city: 'Chennai'
}
db.students.find({ city: ["Chennai", "Delhi"] })
db.students.find({ city:"Chennai"})
{
  _id: ObjectId('685a6677429f944dce671a3d'),
  name: 'Anu',
  age: 20,
  department: 'CSE',
  city: 'Chennai',
  email: 'anu@example.com'
}
{
  _id: ObjectId('685a6677429f944dce671a41'),
  name: 'Ram',
  age: 23,
  department: 'AIML',
  city: 'Chennai'
}
{
  _id: ObjectId('685a6a462df627fe4a897c27'),
  name: 'Anu',
  age: 20,
  department: 'CSE',
  city: 'Chennai'
}
{
  _id: ObjectId('685a6a5f2df627fe4a897c28'),
  name: 'shubhaa',
  age: 20,
  department: 'CSE',
  city: 'Chennai'
}
{
  _id: ObjectId('685a6aae2df627fe4a897c2c'),
  name: 'harshu',
  age: 21,
  department: 'IT',
  city: 'Chennai'
}
{
  _id: ObjectId('685a77f195961eebe97f3497'),
  name: 'Anu',
  age: 20,
  department: 'CSE',
  city: 'Chennai'
}
{
  _id: ObjectId('685a781b95961eebe97f349b'),
  name: 'vimo',
  age: 23,
  department: 'IT',
  city: 'Chennai'
}
db.students.updateOne(
  { name: "Vicky" },
  { set { department: "AIML" } }
)
SyntaxError: Unexpected token, expected "," (3:8)

[0m [90m 1 |[39m db[33m.[39mstudents[33m.[39mupdateOne(
 [90m 2 |[39m   { name[33m:[39m [32m"Vicky"[39m }[33m,[39m
[31m[1m>[22m[39m[90m 3 |[39m   { [36mset[39m { department[33m:[39m [32m"AIML"[39m } }
 [90m   |[39m         [31m[1m^[22m[39m
 [90m 4 |[39m )[0m
db.students.updateOne(
  { name: "Vicky" },
  { set { department: "AIML" } }
)
SyntaxError: Unexpected token, expected "," (3:8)

[0m [90m 1 |[39m db[33m.[39mstudents[33m.[39mupdateOne(
 [90m 2 |[39m   { name[33m:[39m [32m"Vicky"[39m }[33m,[39m
[31m[1m>[22m[39m[90m 3 |[39m   { [36mset[39m { department[33m:[39m [32m"AIML"[39m } }
 [90m   |[39m         [31m[1m^[22m[39m
 [90m 4 |[39m )[0m
db.students.updateOne(
  { name: "Vicky" },
    { $set: { department: "AIML" } }
)
{
  acknowledged: true,
  insertedId: null,
  matchedCount: 0,
  modifiedCount: 0,
  upsertedCount: 0
}
db.students.updateOne(
  { name: "Anu" },
  { $set: { email: "anu@example.com" } }
)
{
  acknowledged: true,
  insertedId: null,
  matchedCount: 1,
  modifiedCount: 0,
  upsertedCount: 0
}
db.students.find({ age: { $lt: 23 } })
{
  _id: ObjectId('685a6677429f944dce671a3d'),
  name: 'Anu',
  age: 20,
  department: 'CSE',
  city: 'Chennai',
  email: 'anu@example.com'
}
{
  _id: ObjectId('685a6677429f944dce671a3e'),
  name: 'Bala',
  age: 21,
  department: 'ECE',
  city: 'Delhi'
}
{
  _id: ObjectId('685a6677429f944dce671a40'),
  name: 'Sara',
  age: 20,
  department: 'CSE',
  city: 'Coimbatore'
}
{
  _id: ObjectId('685a6a462df627fe4a897c27'),
  name: 'Anu',
  age: 20,
  department: 'CSE',
  city: 'Chennai'
}
{
  _id: ObjectId('685a6a5f2df627fe4a897c28'),
  name: 'shubhaa',
  age: 20,
  department: 'CSE',
  city: 'Chennai'
}
{
  _id: ObjectId('685a6aae2df627fe4a897c2a'),
  name: 'Asvika',
  age: 22,
  department: 'AIML',
  city: 'Mumbai'
}
{
  _id: ObjectId('685a6aae2df627fe4a897c2b'),
  name: 'Swetha',
  age: 20,
  department: 'CSE',
  city: 'Coimbatore'
}
{
  _id: ObjectId('685a6aae2df627fe4a897c2c'),
  name: 'harshu',
  age: 21,
  department: 'IT',
  city: 'Chennai'
}
{
  _id: ObjectId('685a77f195961eebe97f3497'),
  name: 'Anu',
  age: 20,
  department: 'CSE',
  city: 'Chennai'
}
{
  _id: ObjectId('685a781b95961eebe97f3498'),
  name: 'Sri',
  age: 21,
  department: 'ECE',
  city: 'Delhi'
}
{
  _id: ObjectId('685a781b95961eebe97f3499'),
  name: 'Asvika',
  age: 22,
  department: 'EEE',
  city: 'Mumbai'
}
{
  _id: ObjectId('685a781b95961eebe97f349a'),
  name: 'Saranya',
  age: 20,
  department: 'CSE',
  city: 'Coimbatore'
}
db.students.find({ age: { $lt: 22} })
{
  _id: ObjectId('685a6677429f944dce671a3d'),
  name: 'Anu',
  age: 20,
  department: 'CSE',
  city: 'Chennai',
  email: 'anu@example.com'
}
{
  _id: ObjectId('685a6677429f944dce671a3e'),
  name: 'Bala',
  age: 21,
  department: 'ECE',
  city: 'Delhi'
}
{
  _id: ObjectId('685a6677429f944dce671a40'),
  name: 'Sara',
  age: 20,
  department: 'CSE',
  city: 'Coimbatore'
}
{
  _id: ObjectId('685a6a462df627fe4a897c27'),
  name: 'Anu',
  age: 20,
  department: 'CSE',
  city: 'Chennai'
}
{
  _id: ObjectId('685a6a5f2df627fe4a897c28'),
  name: 'shubhaa',
  age: 20,
  department: 'CSE',
  city: 'Chennai'
}
{
  _id: ObjectId('685a6aae2df627fe4a897c2b'),
  name: 'Swetha',
  age: 20,
  department: 'CSE',
  city: 'Coimbatore'
}
{
  _id: ObjectId('685a6aae2df627fe4a897c2c'),
  name: 'harshu',
  age: 21,
  department: 'IT',
  city: 'Chennai'
}
{
  _id: ObjectId('685a77f195961eebe97f3497'),
  name: 'Anu',
  age: 20,
  department: 'CSE',
  city: 'Chennai'
}
{
  _id: ObjectId('685a781b95961eebe97f3498'),
  name: 'Sri',
  age: 21,
  department: 'ECE',
  city: 'Delhi'
}
{
  _id: ObjectId('685a781b95961eebe97f349a'),
  name: 'Saranya',
  age: 20,
  department: 'CSE',
  city: 'Coimbatore'
}
db.students.find({ department: { $in: ["ECE", "IT"] } })
{
  _id: ObjectId('685a6677429f944dce671a3e'),
  name: 'Bala',
  age: 21,
  department: 'ECE',
  city: 'Delhi'
}
{
  _id: ObjectId('685a6aae2df627fe4a897c29'),
  name: 'sri',
  age: 23,
  department: 'ECE',
  city: 'Delhi'
}
{
  _id: ObjectId('685a6aae2df627fe4a897c2c'),
  name: 'harshu',
  age: 21,
  department: 'IT',
  city: 'Chennai'
}
{
  _id: ObjectId('685a781b95961eebe97f3498'),
  name: 'Sri',
  age: 21,
  department: 'ECE',
  city: 'Delhi'
}
{
  _id: ObjectId('685a781b95961eebe97f349b'),
  name: 'vimo',
  age: 23,
  department: 'IT',
  city: 'Chennai'
}
db.students.find().limit(2)
{
  _id: ObjectId('685a6677429f944dce671a3d'),
  name: 'Anu',
  age: 20,
  department: 'CSE',
  city: 'Chennai',
  email: 'anu@example.com'
}
{
  _id: ObjectId('685a6677429f944dce671a3e'),
  name: 'Bala',
  age: 21,
  department: 'ECE',
  city: 'Delhi'
}
db.students.find().sort({ age: -1 })
{
  _id: ObjectId('685a6677429f944dce671a41'),
  name: 'Ram',
  age: 23,
  department: 'AIML',
  city: 'Chennai'
}
{
  _id: ObjectId('685a6aae2df627fe4a897c29'),
  name: 'sri',
  age: 23,
  department: 'ECE',
  city: 'Delhi'
}
{
  _id: ObjectId('685a781b95961eebe97f349b'),
  name: 'vimo',
  age: 23,
  department: 'IT',
  city: 'Chennai'
}
{
  _id: ObjectId('685a6aae2df627fe4a897c2a'),
  name: 'Asvika',
  age: 22,
  department: 'AIML',
  city: 'Mumbai'
}
{
  _id: ObjectId('685a781b95961eebe97f3499'),
  name: 'Asvika',
  age: 22,
  department: 'EEE',
  city: 'Mumbai'
}
{
  _id: ObjectId('685a6677429f944dce671a3e'),
  name: 'Bala',
  age: 21,
  department: 'ECE',
  city: 'Delhi'
}
{
  _id: ObjectId('685a6aae2df627fe4a897c2c'),
  name: 'harshu',
  age: 21,
  department: 'IT',
  city: 'Chennai'
}
{
  _id: ObjectId('685a781b95961eebe97f3498'),
  name: 'Sri',
  age: 21,
  department: 'ECE',
  city: 'Delhi'
}
{
  _id: ObjectId('685a6677429f944dce671a3d'),
  name: 'Anu',
  age: 20,
  department: 'CSE',
  city: 'Chennai',
  email: 'anu@example.com'
}
{
  _id: ObjectId('685a6677429f944dce671a40'),
  name: 'Sara',
  age: 20,
  department: 'CSE',
  city: 'Coimbatore'
}
{
  _id: ObjectId('685a6a462df627fe4a897c27'),
  name: 'Anu',
  age: 20,
  department: 'CSE',
  city: 'Chennai'
}
{
  _id: ObjectId('685a6a5f2df627fe4a897c28'),
  name: 'shubhaa',
  age: 20,
  department: 'CSE',
  city: 'Chennai'
}
{
  _id: ObjectId('685a6aae2df627fe4a897c2b'),
  name: 'Swetha',
  age: 20,
  department: 'CSE',
  city: 'Coimbatore'
}
{
  _id: ObjectId('685a77f195961eebe97f3497'),
  name: 'Anu',
  age: 20,
  department: 'CSE',
  city: 'Chennai'
}
{
  _id: ObjectId('685a781b95961eebe97f349a'),
  name: 'Saranya',
  age: 20,
  department: 'CSE',
  city: 'Coimbatore'
}
db.students.find().sort({ age: 1 })
{
  _id: ObjectId('685a6677429f944dce671a3d'),
  name: 'Anu',
  age: 20,
  department: 'CSE',
  city: 'Chennai',
  email: 'anu@example.com'
}
{
  _id: ObjectId('685a6677429f944dce671a40'),
  name: 'Sara',
  age: 20,
  department: 'CSE',
  city: 'Coimbatore'
}
{
  _id: ObjectId('685a6a462df627fe4a897c27'),
  name: 'Anu',
  age: 20,
  department: 'CSE',
  city: 'Chennai'
}
{
  _id: ObjectId('685a6a5f2df627fe4a897c28'),
  name: 'shubhaa',
  age: 20,
  department: 'CSE',
  city: 'Chennai'
}
{
  _id: ObjectId('685a6aae2df627fe4a897c2b'),
  name: 'Swetha',
  age: 20,
  department: 'CSE',
  city: 'Coimbatore'
}
{
  _id: ObjectId('685a77f195961eebe97f3497'),
  name: 'Anu',
  age: 20,
  department: 'CSE',
  city: 'Chennai'
}
{
  _id: ObjectId('685a781b95961eebe97f349a'),
  name: 'Saranya',
  age: 20,
  department: 'CSE',
  city: 'Coimbatore'
}
{
  _id: ObjectId('685a6677429f944dce671a3e'),
  name: 'Bala',
  age: 21,
  department: 'ECE',
  city: 'Delhi'
}
{
  _id: ObjectId('685a6aae2df627fe4a897c2c'),
  name: 'harshu',
  age: 21,
  department: 'IT',
  city: 'Chennai'
}
{
  _id: ObjectId('685a781b95961eebe97f3498'),
  name: 'Sri',
  age: 21,
  department: 'ECE',
  city: 'Delhi'
}
{
  _id: ObjectId('685a6aae2df627fe4a897c2a'),
  name: 'Asvika',
  age: 22,
  department: 'AIML',
  city: 'Mumbai'
}
{
  _id: ObjectId('685a781b95961eebe97f3499'),
  name: 'Asvika',
  age: 22,
  department: 'EEE',
  city: 'Mumbai'
}
{
  _id: ObjectId('685a6677429f944dce671a41'),
  name: 'Ram',
  age: 23,
  department: 'AIML',
  city: 'Chennai'
}
{
  _id: ObjectId('685a6aae2df627fe4a897c29'),
  name: 'sri',
  age: 23,
  department: 'ECE',
  city: 'Delhi'
}
{
  _id: ObjectId('685a781b95961eebe97f349b'),
  name: 'vimo',
  age: 23,
  department: 'IT',
  city: 'Chennai'
}
myCollege

