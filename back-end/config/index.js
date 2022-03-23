const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://khanh:khanh@cluster0.nhyli.mongodb.net/monastore?retryWrites=true&w=majority"

const connect = async () => {
    try {
        const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });

        await client.connect(err => {
        console.log(err)
        });
        console.log("Connect db successfully")

    } catch (error) {
        console.log("connect db failed: ", error.message)
    }
}

module.exports = {connect}