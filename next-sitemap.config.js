module.exports = {
    siteUrl: process.env.SITE_URL || 'https://thehouseofcode.ng',
    generateRobotsTxt: true,
    robotsTxtOptions: {
        policies: [{
            userAgent: '*',
            allow: '/',
        }]
    }
}
