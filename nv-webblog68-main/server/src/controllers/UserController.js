exports.getAllUsers = (req, res) => {
  res.send('เรียกข้อมูลผู้ใช้งานทั้งหมด...');
};

exports.getUserById = (req, res) => {
  res.send('ดูข้อมูลผู้ใช้งาน ' + req.params.userId);
};

exports.createUser = (req, res) => {
  res.json({
    message: 'ทำการสร้างผู้ใช้งาน...',
    data: req.body
  });
};

exports.updateUser = (req, res) => {
  res.send('ทำการแก้ไขผู้ใช้งาน: ' + req.params.userId);
};

exports.deleteUser = (req, res) => {
  res.send('ทำการลบผู้ใช้งาน: ' + req.params.userId);
};