import axios from 'axios';

import getEnv from '../../config/env';

const environmentList = {
  mock() {
    return {
      baseUrl: 'https://api.github.com',
      timeout: 3000,
      /* data collecting and reporting */
      after(configs) {
        console.log('mock request finished', configs);
      },
    };
  },
  dev() {
    return {
      baseUrl: 'https://api.github.com',
      timeout: 1000,
      after(configs) {
        console.log('dev request finished', configs);
      },
    };
  },
  qa() {
    return {
      baseUrl: 'https://api.github.com/qa',
      timeout: 1000,
      after(configs) {
        console.log('qa request finished', configs);
      },
    };
  },
  prod() {
    return {
      baseUrl: 'https://api.github.com',
      timeout: 1000,
      after(configs) {
        console.log('prod request finished', configs);
      },
    };
  },
  default() {
    const baseURL = getEnv().baseURL;
    return {
      baseUrl: baseURL, // default
      timeout: 1000,
      after(configs) {
        console.log('current env request finished', configs);
      },
    };
  },
};

function fetch(configs, envType = 'default') {
  const {
    baseUrl,
    timeout,
    after,
  } = environmentList[envType] ? environmentList[envType]() : environmentList.default();

  return new Promise((resolve, reject) => {
    axios.request({
      baseURL: baseUrl,
      timeout,
      ...configs,
    }).then(result => {
      after(configs);
      resolve(result);
    }).catch(e => {
      console.log(e)
      after(configs);
      reject(e);
    });
  });
}


export { fetch };
