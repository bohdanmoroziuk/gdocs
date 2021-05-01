const { Schema, model } = require('mongoose');

const schema = new Schema({
  _id: String,
  data: Object,
}, {
  collection: 'documents',
  timestamps: true,
}); 

const Document = model('Document', schema);

module.exports = Document;
