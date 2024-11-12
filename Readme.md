## What is mongoose?

Mongoose is an Object Data Modeling (ODM) library for MongoDB and Node.js. It provides a schema-based solution to model your application data, making it easier to interact with MongoDB databases. Here are some key features and concepts associated with Mongoose:

### Key Features of Mongoose:

1. __Schemas__ :

Mongoose allows you to define schemas for your data models. A schema defines the structure of the documents within a collection, including the data types and any validation rules.

2. __Models__ :

Once a schema is defined, you can create a model based on that schema. Models are used to create and manage documents in the MongoDB collection.

3. __Validation__ :

Mongoose provides built-in validation for data types and custom validation rules, ensuring that the data stored in the database meets specified criteria.

4. __Middleware__ :

Mongoose supports middleware (also known as hooks), which allows you to define pre and post hooks for certain operations (e.g., saving, updating, or deleting documents). This is useful for tasks like data transformation or logging.

5. __Queries__ :

Mongoose offers a powerful query API that makes it easy to perform CRUD (Create, Read, Update, Delete) operations on documents in your MongoDB collections.

6. __Population__ :

Mongoose supports population, which allows you to reference documents in other collections and automatically replace the specified paths in the document with documents from other collections.

7. __Plugins__ :

Mongoose allows you to create and use plugins to extend its functionality, making it easier to add common features to your models.

### Basic Example:
Here’s a simple example of how to use Mongoose in a Node.js application:

1. __Install Mongoose__ : via npm: `npm install mongoose`

2. __Connect to MongoDB__ :

```
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/mydatabase', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.error('MongoDB connection error:', err));
```

3. __Define a Schema and Model__ :

```
const userSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    age: { type: Number, min: 0 }
});

const User = mongoose.model('User ', userSchema);

```

4. __Create a Document__ :

```
const newUser  = new User({
    name: 'John Doe',
    email: 'john.doe@example.com',
    age: 30
});

newUser .save()
    .then(() => console.log('User  saved'))
    .catch(err => console.error('Error saving user:', err));
```    

5. __Querying Documents__ :

```
User.find({ age: { $gte: 18 } })
    .then(users => console.log(users))
    .catch(err => console.error('Error fetching users:', err));
```    

## How to connect mongoDB with nodeJS without downloading mongoDB locally?

To connect MongoDB with Node.js without downloading MongoDB locally, you need to use a cloud-based MongoDB service like MongoDB Atlas, where you can create a cluster and access it using a provided connection string in your Node.js application; essentially, you'll only need to install the MongoDB Node.js driver on your system to interact with the remote database.

__Key steps__ :

1. __Create a MongoDB Atlas Account__ : Sign up for a MongoDB Atlas account on the MongoDB website. 
 
2. __Create a Cluster__ : Within your Atlas dashboard, create a new cluster. 
 
3. __Get Connection String__ : Access your cluster details and copy the provided connection string. 
 
4. __Install Node.js Driver__ : In your Node.js project, install the MongoDB Node.js driver using npm: npm install mongodb. 
 
5. __Connect in your Node.js code__ :
* Import the MongoClient from the MongoDB driver. 
 
* Create a variable to store your connection string. 
 
* Use `MongoClient.connect` to establish a connection to your Atlas cluster using the connection string.

```
const MongoClient = require('mongodb').MongoClient;



const uri = "mongodb+srv://<username>:<password>@<cluster-name>.mongodb.net/<database-name>?retryWrites=true&w=majority"; // Replace with your Atlas connection string



async function connectToDb() {

    try {

        const client = await MongoClient.connect(uri);

        const db = client.db("yourDatabaseName");

        console.log("Connected to MongoDB Atlas");

        // Perform database operations using the 'db' object

    } catch (err) {

        console.error(err);

    }

}



connectToDb(); 
```

### Important points:
__Authentication__ :
If your Atlas cluster requires authentication, make sure to include your username and password in the connection string. 
 
__Security__ :
Always store your connection string securely and avoid exposing it in your codebase. 
 
__Database Operations__ :
Once connected, you can use the MongoDB Node.js driver to perform CRUD (Create, Read, Update, Delete) operations on your database. 

> Refer the below link for more Query and Projection Operators
>> https://www.mongodb.com/docs/v7.3/reference/operator/query/