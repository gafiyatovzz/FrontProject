module.exports = (req, res, error) => {
  if (error.name === 'CastError') {
    res.status(404).json({
      success: false,
      message: 'Некорректный id в запросе',
    });
  }
  if (error.name === 'MongoError') {
    res.status(400).json({
      success: false,
      message: '400 - некорректный id',
    });
  }
  res.status(500).json({
    success: false,
    message: error.name,
  });
};
