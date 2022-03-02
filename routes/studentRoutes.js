const express = require('express');
const studentController = require('./../controllers/studentContoller');

const router = express.Router();

router.route('/all-student').get(studentController.getAllStudent);
router.route('/add-student').post(studentController.createStudent);

router
  .route('/:id')
  .get(studentController.getStudent)
  .patch(studentController.updateStudent)
  .delete(studentController.deleteStudent);

module.exports = router;
