const ErrorResponse = require("../utils/errorResponse");
const asyncHandler = require("../middleware/async");
const Courses = require("../models/Courses");
const Bootcamp = require("../models/Bootcamps");

// @desc get courses
// @route GET /api/v1/courses
// @route GET /api/v1/bootcamps/:bootcampId/courses
// @access Public
exports.getCourses = asyncHandler(async (req, res, next) => {
  let query;

  if (req.params.bootcampId) {
    query = Courses.find({ bootcamp: req.params.bootcampId });
  } else {
    query = Courses.find().populate({
      path: "bootcamp",
      select: "name description website",
    });
  }

  const courses = await query;

  res.status(200).json({
    success: true,
    count: courses.length,
    data: courses,
  });
});

// @desc get course
// @route GET /api/v1/courses/:id
// @access Public
exports.getCourse = asyncHandler(async (req, res, next) => {
  const course = await Courses.findById(req.params.id).populate({
    path: "bootcamp",
    select: "name description website",
  });

  if (!course) {
    return next(
      new ErrorResponse(`No courses with the id ${req.params.id} exists`, 404)
    );
  }

  res.status(200).json({
    success: true,
    data: course,
  });
});

// @desc get course
// @route POST /api/v1/bootcamps/:bootcampId/course
// @access Private
exports.addCourse = asyncHandler(async (req, res, next) => {
  req.body.bootcamp = req.params.bootcampId;

  const bootcamp = await Bootcamp.findById(req.params.bootcampId);

  if (!bootcamp) {
    return next(
      new ErrorResponse(
        `No bootcamp with the id ${req.params.bootcampId} exists`,
        404
      )
    );
  }

  const course = await Courses.create(req.body);

  res.status(200).json({
    success: true,
    data: course,
  });
});
