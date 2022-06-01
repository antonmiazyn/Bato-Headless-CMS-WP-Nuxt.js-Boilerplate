const fse = require('fs-extra')

const target = 'wp-plugins'
const destination = 'wordpress/wp-content/plugins'
let movedList = []

const consoleSuccess = (msg, list) => {
  const colors = {
    green: '\x1b[32m',
    yellow: '\x1b[33m',
    white: '\x1b[37m'
  }

  console.log(colors.green, msg)
  console.log('')
  console.log(colors.yellow, 'List of moved/replaced plugins:')
  console.log('')

  list.map(name => console.log(colors.white, `-> ${ name }`))
}

new Promise((resolve, reject) => {
  try {
    fse.copySync(target, destination, {
      overwrite: true
    })

    fse.readdirSync(target).forEach((plugin) => {
      movedList.push(plugin)
    })

    resolve('Plugins have been successfully moved to Wordpress!')
  } catch (err) {
    reject(new Error(err))
  }
}).then((res) => {
  consoleSuccess(res, movedList)
  movedList = []
})
