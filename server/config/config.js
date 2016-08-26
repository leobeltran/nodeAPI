let config = {
  dev: 'development',
  test: 'testing',
  prod: 'production',
  port: process.env.PORT || 3000,  //export PORT=3434
  expireTime: '10h',
  secrets: {jwt: process.env.JWT || 'gumball'}
}

config.env = process.env.NODE_ENV || config.dev

const envConfig = require('./' + config.env).default


export default config = Object.assign(config, envConfig)
 
