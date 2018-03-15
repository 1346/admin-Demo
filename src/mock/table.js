export default {
  getTableInfo() {
    return {
      status: 1,
      data: [{
        id: 1,  // ID
        name: "test",  // 姓名
        phone: "1310000000", // 电话
        sex: "男", // 性别
        birth: "1990-01-01", // 出生日期
        address: '北海北'
      },
        { id:1, name: '张三', phone: '13122222222', sex: '男', birth: '1999-9-9', address: '平安里东路' }
      ],
      msg: '成功'
    }
  },
}
