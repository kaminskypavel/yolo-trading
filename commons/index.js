const isDevelopment = () => process.env.NODE_ENV?.toLowerCase() !== 'production'

exports.isDevelopment = isDevelopment;