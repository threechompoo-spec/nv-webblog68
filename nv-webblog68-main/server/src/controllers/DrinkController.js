// GET /drinks
exports.index = (req, res) => {
  res.send('เรียกข้อมูลเมนูเครื่องดื่มทั้งหมด');
};

// GET /drink/:id
exports.show = (req, res) => {
  res.send('ดูข้อมูลเมนูเครื่องดื่ม ID: ' + req.params.id);
};

// POST /drink
exports.create = (req, res) => {
  res.json({
    message: 'เพิ่มเมนูเครื่องดื่มเรียบร้อย',
    data: req.body
  });
};

// PUT /drink/:id
exports.update = (req, res) => {
  res.json({
    message: 'แก้ไขเมนูเครื่องดื่ม ID: ' + req.params.id,
    data: req.body
  });
};

// DELETE /drink/:id
exports.delete = (req, res) => {
  res.send('ลบเมนูเครื่องดื่ม ID: ' + req.params.id);
};