const nodemailer = require("nodemailer");

// กำหนดค่าเกี่ยวกับ email ที่จะใช้ส่ง
let transporter = nodemailer.createTransport({
    host: 'gmail',
    service: 'Gmail',
    auth: {
        user: 'Your Email',
        pass: 'Your Password',
    },
});

// รายละเอียดอีเมล
transporter.sendMail({
    from: 'Patcharapat Riankham <patcharapat.rk@gmail.com>',   // ผู้ส่ง
    to: "Kewalin Rungrueangsri <kewalinru54@gmail.com>",// ผู้รับ
    subject: "สวัสดีจ้า",                      // หัวข้อ
    text: "สวัสดีนะ",                         // ข้อความ
    html: "<b>สวัสดี</b>ครับ<br>< img src='https://media.giphy.com/media/TfY3cjjH0aYopkybqc/giphy.gif'>",                // ข้อความ
}, (err, info) => {
    if (err) {
        console.log(err);
    } else {
        console.log(info.messageId);
    }
});