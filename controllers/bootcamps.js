const ErrorResponse = require("../utils/errorResponse");
const asyncHanlder = require("../middleware/async");
const Bootcamp = require("../models/Bootcamps");

// @desc  Get all bootcamps
// @route GET /api/v1/bootcamps
// @access Public
exports.getBootcamps = asyncHanlder(async (req, res, next) => {
  const bootcamps = await Bootcamp.find();
  res.status(200).json({ success: true, data: bootcamps });
});

// @desc  Get all bootcamp
// @route GET /api/v1/bootcamps/:id
// @access Public
exports.getBootcamp = asyncHanlder(async (req, res, next) => {
  const bootcamp = await Bootcamp.findById(req.params.id);

  // It's a formatted object ID and not in database
  if (!bootcamp) {
    return next(
      new ErrorResponse(`Bootcamp not found with id of ${res.params.id}`, 404)
    );
  }

  res.status(200).json({ success: true, data: bootcamp });
});

// @desc  Create new bootcamp
// @route POST /api/v1/bootcamps
// @access Private
exports.createBootcamp = asyncHanlder(async (req, res, next) => {
  const bootcamp = await Bootcamp.create(req.body);
  res.status(201).json({
    success: true,
    data: bootcamp,
  });
});

// @desc  Update bootcamp
// @route PUT /api/v1/bootcamps/:id
// @access Private
exports.updateBootcamp = asyncHanlder(async (req, res, next) => {
  const bootcamp = await Bootcamp.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
  });

  // It's a formatted object ID and not in database
  if (!bootcamp) {
    return next(
      new ErrorResponse(`Bootcamp not found with id of ${res.params.id}`, 404)
    );
  }

  res.status(200).json({ sucess: true, data: bootcamp });
});

// @desc  Delete bootcamp
// @route DELETE /api/v1/bootcamps/:id
// @access Private
exports.deleteBootcamp = asyncHanlder(async (req, res, next) => {
  const bootcamp = await Bootcamp.findByIdAndUpdate(req.params.id);

  // It's a formatted object ID and not in database
  if (!bootcamp) {
    return next(
      new ErrorResponse(`Bootcamp not found with id of ${res.params.id}`, 404)
    );
  }

  res.status(200).json({ sucess: true, data: {} });
});
