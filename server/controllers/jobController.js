const Job = require('../models/Job');

const getAllJobs = async (req, res) => {
  try {
    const jobs = await Job.find();
    res.status(200).json({ 
      success: true, 
      data: jobs 
    });
  } catch (error) {
    console.error('Fetch jobs error:', error);
    res.status(500).json({ 
      success: false, 
      message: 'Server error. Please try again later.' 
    });
  }
};

module.exports = { getAllJobs };
