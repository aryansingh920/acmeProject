const mail = require('./mail.js')



module.exports.sendotp = async (req, res) => {
    var otp = ""
    for (i = 0; i < 6; i++) {
        otp += parseInt(Math.random() * 10)
    }
    const email = req.query.email;
    const redirectUri = req.query.redirectUri;
    const subject = `Email verification code`;
    const text = `Your verification code is ${otp}`

    res.send([otp,await mail(email, subject, text, "Email Verification")])
}