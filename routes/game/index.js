const express = require('express')
const chat = require('../../db/chat')
const { NEW_MESSAGE } = require('../../config/events')
const { ensureLoggedIn } = require('connect-ensure-login')

const router = express.Router()

router.get('/:room', ensureLoggedIn('/signin'), (req, res) => {
  res.render('game', { title: 'Game' })
})

// router.get('/:room', async (req, res) => {
//   let getResult = await chat.getMessages('chat_id', req.params.room, 0, 20)

//   res.send({
//     messages: getResult,
//   })
// })

router.post('/:room/new', async (req, res) => {
  let message = {
    sender: {
      id: '-1',
      username: 'Guest',
    },
    body: req.body.text,
    chatId: req.params.room,
  }
  if (req.user) {
    message.sender.id = req.user.id
    message.sender.username = req.user.username
  }

  let sendResult = await chat.newMessage(message)

  let io = req.app.get('io')
  io.emit(NEW_MESSAGE, message)

  res.send({
    error: null,
  })
})

module.exports = router