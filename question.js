


//Find all the topics and tasks which are thought in the month of October

db.tasks.find({ date: { $gte: '2020-10-15', $lte: '2020-10-31' } }).toArray().concat(db.topics.find({ date: { $gte: '2020-10-15', $lte: '2020-10-31' } }).toArray())

db.drives.find({driveDate: {$gt: "2020-10-15",$lt: "2020-10-31"}})

//Find all the company drives which appeared between 15 oct-2020 and 31-oct-2020

db.company_drives.find({date: {$gt: "15-10-2020",$lt: "31-10-2020"}})




//Find the number of problems solved by the user in codekata

db.user.find({},{name:1,codekata_solved:1})

//Find all the mentors with who has the mentee's count more than 15

db.mentors.find({ studentCount: { $gt: 15 }})

//Find the number of users who are absent and task is not submitted  between 15 oct-2020 and 31-oct-2020

db.user.find({ id: { $nin: db.attendance.distinct('taskId', { date: { $gte: '2020-10-15', $lte: '2020-10-31' } }) } }).toArray()
