const mongoose = require("mongoose");

const connect = () => {
  return mongoose.connect("mongodb://localhost:27017/todos");
};

const student = new mongoose.Schema(
  {
    firstName: {
      type: String,
      required: true,
      unique: true
    },
    info: {
      school: {
        type: String
      },
      shoeSize: {
        type: Number
      }
    },
    favFoods: [{ type: String }],

    age: Number
  },
  { timestamps: true }
);

const Student = mongoose.model("student", student);

connect()
  .then(async connection => {
    const student = await Student.create({
      firstName: "Trisha",
      age: 22,
      favFoods: ["PB&J", "Mac N Cheese"]
    });
    //const found = await Student.find({ firstName: 'Larry' })
    //const foundById = await Student.findById('')
    //const updated  =  await Student.findByIdAndUpdate('deed', {})
    console.log(student);
  })
  .catch(e => console.error(e));

// Code from 06/25/19

// const mongoose = require('mongoose')

// const connect = () => {
//     return mongoose.connect('mongodb://localhost:27017')
// }

// const student = new mongoose.Schema({
//     firstName: {
//         type: String,
//         required: true,
//         unique: true

//     },
//     school: {
//         type: mongoose.Schema.Types.ObjectId,
//         required: true,
//         ref: 'school'
//     }
// }), ({timestamps: true})
// // convert schema to mongoose model

// // keep the object lowercase and singuluar. Mongo will make it plural in database.

// // the Student model is shown below. The model allows you to interact with the 'student' schema.

// const School = mongoose.model('school', school)
// const Student = mongoose.model('student', student)
// const school = new mongoose.Schema({
//     name: String,
//     openSince: Number,
//     students: Number,
//     isGreat: Boolean,
//     isNotGreat:Boolean
// })

// connect ()
//     .then(async connection => {
//         const school = await School.create({name: 'mlk elementary'})
//         const student = await student.create({firstName: 'Trisha', school: school._id})
//         const match = await Student.findById(student.id)
//             .populate('school')
//             .exec()
//             console.log(match)
//     }

// // connect()
// //     .then(async connection => {
// //     const student = await Student.create({firstName: 'Tim'})
// //     const found = await Student.find({firstName: 'thi'})
// //     const foundById = await Student.findById({id})
// //     const updateed = await Student.findByIdAndUpdate('id-update', {})
// //     console.log(student)
// //     })
// //     .catch(e => console.error(e))
