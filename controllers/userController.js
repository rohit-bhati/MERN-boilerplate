import db from './../models'

const user = {}

user.getUsers = (req, res) => {
  db.User.find({}, (err, users) => res.send(users))
}

export default user
