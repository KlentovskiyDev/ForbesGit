const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const TicketsSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  desc: {
    type: String,
    required: true
  },
  status: {
    type: Boolean,
    required: true
  }
});

module.exports = mongoose.model('Tickets', TicketsSchema);