const mongoose = require('mongoose')
const Question = require('../models/question')

module.exports.home = async function(req, res) {
    try {
      
      // Find all the questions and populate their options
      let questions = await Question.find({}).populate('options')

      // Send questions back in response
      return res.status(200).json(questions)
    } catch (err) {
      
      // Log any errors that occur and return an error response
      console.log(err)
      return res.status(500).json({
        error: 'Internal server_error'
      })
    }
}
