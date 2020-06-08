const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    minlength: 2,
    maxlength: 30,
    required: true,
    validate: {
      // eslint-disable-next-line
      validator: (value) => /\w/.test(value),
    },
  },
  about: {
    type: String,
    minlength: 2,
    maxlength: 30,
    required: true,
    validate: {
      // eslint-disable-next-line
      validator: (value) => /\w/.test(value),
    },
  },
  avatar: {
    type: String,
    required: true,
    validate: {
      // eslint-disable-next-line
      validator: (value) => /http[s]?:\/\/(www\.)?((\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3})|(\w+\.[a-zA-Z]{2,6}))(:\d{2,5})?(\/[a-zA-Z0-9\/]*)?#?/i.test(value),
    },
  },
  email: {
    type: String,
    unique: true,
    required: true,
    validate: {
      // eslint-disable-next-line
      validator: (value) => /[\w\-]+@[\w\-]+\.[\w\-^0-9]+/.test(value),
    },
  },
  password: {
    type: String,
    required: true,
    minlength: 8,
  },
});

module.exports = mongoose.model('user', userSchema);
