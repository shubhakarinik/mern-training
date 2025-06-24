use myCollege
switched to db myCollege
db.createCollection("toys")
{ ok: 1 }
db.toys.insertMany([
  { name: "Teddy Bear", type: "Soft Toy", price: 500 },
  { name: "Rubber Duck", type: "Soft Toy", price: 200 },
  { name: "Robot Car", type: "Electronic Toy", price: 1500 },
  { name: "Talking Doll", type: "Electronic Toy", price: 1700 },
  { name: "Jigsaw Puzzle", type: "Puzzle", price: 400 },
  { name: "Sudoku Book", type: "Puzzle", price: 300 }
])
{
  acknowledged: true,
  insertedIds: {
    '0': ObjectId('685a7beaaeab7397b20961ee'),
    '1': ObjectId('685a7beaaeab7397b20961ef'),
    '2': ObjectId('685a7beaaeab7397b20961f0'),
    '3': ObjectId('685a7beaaeab7397b20961f1'),
    '4': ObjectId('685a7beaaeab7397b20961f2'),
    '5': ObjectId('685a7beaaeab7397b20961f3')
  }
}
db.toys.aggregate([
  {
    $group: {
      _id: "$type",
      totalPrice: { $sum: "$price" }
    }
  }
])
{
  _id: 'Electronic Toy',
  totalPrice: 3200
}
{
  _id: 'Puzzle',
  totalPrice: 700
}
{
  _id: 'Soft Toy',
  totalPrice: 700
}
db.toys.insertMany([
  { name: "Teddy Bear", type: "Soft Toy", price: 500 },
  { name: "Barbie doll", type: "Soft Toy", price: 700 },
  { name: "Robot Car", type: "Electronic Toy", price: 1500 },
  { name: "Talking Doll", type: "Electronic Toy", price: 1700 },
  { name: "Puzzle", type: "Puzzle", price: 400 },
  { name: "coloring Book", type: "Puzzle", price: 300 }
])
{
  acknowledged: true,
  insertedIds: {
    '0': ObjectId('685a7c49aeab7397b20961f4'),
    '1': ObjectId('685a7c49aeab7397b20961f5'),
    '2': ObjectId('685a7c49aeab7397b20961f6'),
    '3': ObjectId('685a7c49aeab7397b20961f7'),
    '4': ObjectId('685a7c49aeab7397b20961f8'),
    '5': ObjectId('685a7c49aeab7397b20961f9')
  }
}
db.toys.aggregate([
  {
    $group: {
      _id: "$type",
      totalPrice: { $sum: "$price" }
    }
  }
])
{
  _id: 'Electronic Toy',
  totalPrice: 6400
}
{
  _id: 'Puzzle',
  totalPrice: 1400
}
{
  _id: 'Soft Toy',
  totalPrice: 1900
}
myCollege

