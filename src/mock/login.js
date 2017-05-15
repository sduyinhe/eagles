const userMap = {
  admin: {
    role: ['admin'],
    token: 'admin',
    introduction: '我是超级管理员',
    name: '我是超级管理员silianpan',
    password: 'admin'
  }
}

export default {
  login: config => {
    console.log('config', config);
    const { name } = config.params;
      if (userMap[name]) {
        return [200, {
          data: userMap[name]
        }];
        // setTimeout(() => {
        //   resolve([200, {
        //     data: userMap[username]
        //   }]);
        // }, 500);
      } else {
        return [300, '账号不正确'];
      }

  },
  getInfo: config => {
    const { token } = config.params;
    return new Promise((resolve, reject) => {
      if (userMap[token]) {
        setTimeout(() => {
          resolve([200, {
            data: userMap[token]
          }]);
        }, 100);
      } else {
        reject('获取失败')
      }
    })
  },
  logout: () => new Promise(resolve => {
    setTimeout(() => {
      resolve([200, { data: 'success' }]);
    }, 100);
  })
};
