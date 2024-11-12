const mongoose = require("mongoose");

// Connection mongoDB locally
// uri contains local db address if connected locally + db name(Sample-learning-db, in this case) whcih we wanna create
mongoose.connect("mongodb://localhost:27017/Sample-learning-db", {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log("Connected to mongoDB successfully");
}).catch((err) => {
    console.log(err);
})

// Defining schema firstly and then creating a model
const student = new mongoose.Schema({
    name: { type: String, required: true },
    workout: Boolean,
    height: Number
})

// model is like a collections
// mnodel name is Student and its schema should be like student
// creating a new object in the db as collection

// const Student = new mongoose.model("Student", student);

// const adder = async () => {

//     const ss = new Student({
//         name: "ABHI",
//         workout: true,
//         height: 6
//     })

//     await ss.save();
// }

// adder();

// another method creating an object in the db, that is convient

const Student = new mongoose.model("Student", student);

const adder = async () => {

    const ss = await Student.create({
        name: "Abhishek",
        workout: true,
        height: 6
    });

    console.log(ss);
}

// finding the obj from the db

const adder_1 = async () => {

    const ss = await Student.find(); // finding all objs
    // const ss = await Student.find({height:{$eq:6}});  //finding all objs height = 6
    // const ss = await Student.find({height:{$gt:6}});  //finding all objs height > 6
    // const ss = await Student.find({height:{$gte:6}});  //finding all objs height >= 6
    // const ss = await Student.find({height:{$in:[5,6]}});  //finding all objs for which height is availabe in given array
    // const ss = await Student.find({height:{$nin:6}});  //finding all objs for which height is not present in given array = 6

    console.log(ss);
}