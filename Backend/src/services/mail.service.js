import nodemailer from "nodemailer";

const tranporter = nodemailer.createTransport({
    service:"gmail",
    auth:{
        type:"OAuth2",
        user:process.env.USER_EMAIL,
        clientId:process.env.GOOGLE_CLIENT_ID,
        clientSecret:process.env.GOOGLE_CLIENT_SECRET,
        refreshToken:process.env.GOOGLE_REFRESH_TOKEN
    }
})

tranporter.verify().then(()=>{
    console.log("Transporter is ready to send Emails.");
}).catch((err)=>{
    console.error("Transporter is failed", err);
})

export const sendEmail = async ({to, subject, html, text}) =>{
    const mailOptions = {
        from:process.env.USER_EMAIL,
        to,
        subject,
        html,
        text
    }

    const details = await tranporter.sendMail(mailOptions);
    console.log("Email sent", details);
}