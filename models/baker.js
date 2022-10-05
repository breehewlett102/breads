// dependencies
const mongoose = require('mongoose')
const { Schema } = mongoose

// schema
const breadSchema = new Schema({
    name: { type: String, required: true },
    hasGluten: Boolean,
    image: { type: String, default: 'http://placehold.it/500x500.png' },
    baker: {
      type: Schema.Types.ObjectID,
      ref: 'Baker'
    }
})

// Virtuals
bakerSchema.virtual('breads', {
  ref: 'Bread',
  localField: '_id',
  foreignField: 'baker'
})

// Hooks 
bakerSchema.post('findOneAndDelete', function() {
  Bread.deleteMany({ baker: this._conditions._id })
      .then(deleteStatus => {
          console.log(deleteStatus)
      })
})


// model and export
const Baker = mongoose.model('Baker', bakerSchema)
module.exports = Baker
