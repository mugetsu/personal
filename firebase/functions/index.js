const functions = require('firebase-functions')

exports.testFunction = functions.https.onCall(() => {
  console.info('Test Function triggered')
  return { message: 'Eureka!' }
})
