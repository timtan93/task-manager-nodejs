const sgMail = require('@sendgrid/mail')


sgMail.setApiKey(process.env.SENDGRID_API_KEY)

const sendWelcomeEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'timtan93@gmail.com',
        subject: 'Thanks for joining in!',
        text: `Welcome to the app, ${name}. Let me know how you get along with the app.`
    })
}

const sendCancelationEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'timtan93@gmail.com',
        subject: 'Sorry to see you go!',
        text: `Goodbye, ${name}. Hope to see you back soon.`
    })
}



module.exports = {
    sendWelcomeEmail,
    sendCancelationEmail
}