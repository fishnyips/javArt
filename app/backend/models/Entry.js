import mongoose from 'mongoose';
const Schema = mongoose.Schema;
let Entry = new Schema({
    title: {
        type: String
    },
    date: {
        type: String
    },
    description: {
        type: String
    },
    feeling: {
        type: String
    },

});
export default mongoose.model('Entry', Entry);