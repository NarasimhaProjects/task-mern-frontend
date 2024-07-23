const mongoose = require('mongoose')
const taskSchema = mongoose.Schema(
    {
        text: { type: String, required: [true, 'PLease ass a text value']}
    },
    {
        timestamps: true
    }
)

module.exports = mongoose.model('Task', taskSchema)