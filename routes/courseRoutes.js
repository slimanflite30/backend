const express = require('express');
const courseRoutes = require('./../controllers/coursesController');

const router = express.Router();

router.route('/all-course').get(courseRoutes.getAllCourses);
router.route('/add-course').post(courseRoutes.createCourse);

router
  .route('/:id')
  .get(courseRoutes.getCourse)
  .patch(courseRoutes.updateCourse)
  .delete(courseRoutes.deleteCourse);

module.exports = router;
