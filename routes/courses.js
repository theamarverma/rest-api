const ex = require('express');
const router = ex.Router();
const Course = require('../models/course');
//Creating the routers
router.get('/', async (req, res) => {
	try {
		const courses = await Course.find();
		res.json(courses);
	} catch (err) {
		res.json(err);
	}
});

//get single courses
router.get('/:courseId', async (req, res) => {
	const courseId = req.params.courseId;
	try {
		const c = await Course.findById(courseId);
		res.json(c);
	} catch (err) {
		res.json(err);
	}
});

//create course
router.post('/', async (req, res) => {
	try {
		const course = await Course.create(req.body);
		res.json(course);
	} catch (e) {
		res.json(e);
	}
});
//delete course
router.delete('/:courseId', async (req, res) => {
	try {
		const course = await Course.remove({ _id: req.params.courseId });
		res.status(200).json({
			message: 'done',
		});
	} catch (e) {
		res.json(e);
	}
});
//update course
router.put('/:courseId', async (req, res) => {
	try {
		const course = await Course.updateOne(
			{ _id: req.params.courseId },
			req.body
		);
		res.json(course);
	} catch (e) {
		res.json(e);
	}
});

module.exports = router;
