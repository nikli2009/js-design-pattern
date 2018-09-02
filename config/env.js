const devConfigs = require('./dev.env.js')
const qaConfigs = require('./qa.env.js')
const prodConfigs = require('./prod.env.js')

export default function() {
  const env = process.env.NODE_ENV
  console.log(env)
  if(env === 'development') {
    return devConfigs
  } else if(env === 'qa') {
    return qaConfigs
  } else {
    return prodConfigs
  }
}
