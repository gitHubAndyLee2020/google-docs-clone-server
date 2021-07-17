import mongoose from 'mongoose'

const docSchema = mongoose.Schema({
    title: String,
    content: String,
    darkTheme: Boolean,
    color: String,
    fontSize: Number,
    fontFamily: String,
    bold: Boolean,
    italics: Boolean,
    allowUpdate: Boolean,
    createAt: {
        type: Date,
        default: new Date(),
    },
})

const DocMessage = mongoose.model('DocMessage', docSchema)

export default DocMessage