# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
User.create([
  {name: 'Yoda',     email: 'yoda@lightside.com', password: '1234567890'},
  {name: 'Vader',    email: 'vader@darkside.com', password: '1234567890'},
  {name: 'Han Solo', email: 'hs@smuggler.com',    password: '1234567890'}
])

Group.create([
  {name: 'Lightside'},
  {name: 'Green'},
  {name: 'Jedis for love'},
  {name: 'Darkside'},
  {name: 'Red'},
  {name: 'Siths for love'},
  {name: 'Falconside'},
  {name: 'White'},
  {name: 'Sumugglers for love'}
])

Choice.create([
  {title: 'Lala', date: '2016-12-12'},
  {title: 'lele', date: '2016-12-13'},
  {title: 'li', date: '2016-12-24'},
  {title: 'lo', date: '2016-12-23'},
  {title: 'lu', date: '2016-12-12'},
  {title: 'la', date: '2016-12-11'},
  ])

u = User.find(1)
u2 = User.find(2)
u3 = User.find(3)

u.groups.push(Group.find(1))
u.groups.push(Group.find(2))
u.groups.push(Group.find(3))

u2.groups.push(Group.find(4))
u2.groups.push(Group.find(5))
u2.groups.push(Group.find(6))

u3.groups.push(Group.find(7))
u3.groups.push(Group.find(8))
u3.groups.push(Group.find(9))
