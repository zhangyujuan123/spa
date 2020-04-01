var data = [
	['', '字段', '说明', '数据类型', '允许为空','主键','备注'],
	['1', 'login_name', '登录名', 'C(9)', 'N','Y'],
	['2', 'password', '密码', 'C(9)', 'N','N'],
	['3', 'chinese_name', '中文名', 'C(10)', 'N','N'],
	['4', 'english_name', '英文名', 'C(10)', 'Y','N'],
	['5', 'gender_name', '性别', 'C(1)', 'Y','N'],
	['6', 'address', '家庭住址', 'C(100)', 'Y','N'],
	['7', 'mobile', '联系电话', 'C(15)', 'Y','N'],
	['8', 'comment', '备注', 'C(100)', 'Y','N']
  ];
  
  var container = document.getElementById('example');
  var hot = new Handsontable(container, {
	data: data
  });
