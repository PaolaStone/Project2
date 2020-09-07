module.exports = {
  development: {
    username: process.env.SEQUELIZE_USER,
    password: process.env.SEQUELIZE_PASSWORD,
    database: 'project2_dev',
    details: {
      host: process.env.SEQUELIZE_HOST,
      port: 3306,
      dialect: 'mysql'
    }
  },
  test: {
    username: process.env.TU,
    password: process.env.TP || 'wp8177',
    database: 'project2_test',
    details: {
      host: 'localhost',
      port: 3306,
      dialect: 'mysql',
      logging: false
    }
  },
  production: {
    'use_env_variable': 'JAWSDB_URL',
    details: {
      dialect: 'mysql'
    }
  }
};