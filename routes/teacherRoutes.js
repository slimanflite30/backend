const express = require('express');
const teacherController = require('./../controllers/teacherController');

const router = express.Router();

router.route('/all-teacher').get(teacherController.getAllTeacher);
router.route('/add-teacher').post(teacherController.createTeacher);

router
  .route('/:id')
  .get(teacherController.getTeacher)
  .patch(teacherController.updateTeacher)
  .delete(teacherController.deleteTeacher);

module.exports = router;
