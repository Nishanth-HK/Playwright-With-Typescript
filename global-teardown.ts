import fs from 'fs';
import path from 'path';
import nodemailer from 'nodemailer';

export default async () => {
  const timestamp = new Date().toISOString().replace(/[:.]/g, '-');

  const source = path.join(process.cwd(), 'playwright-report');
  const archiveBase = path.join(process.cwd(), 'playwright-report-history');
  const target = path.join(archiveBase, `run-${timestamp}`);

  if (fs.existsSync(source)) {
    fs.mkdirSync(target, { recursive: true });
    fs.cpSync(source, target, { recursive: true });
  }

  // Configure mail transporter
  // const transporter = nodemailer.createTransport({
  //   service: 'gmail',
  //   auth: {
  //     user: 'nishanthmandy@gmail.com',
  //     pass: '*****', // Gmail App Password
  //   },
  // });

  // Optional: attach Playwright HTML report
  // const reportPath = path.join(process.cwd(), 'playwright-report', 'index.html');

  // const mailOptions = {
  //   from: 'nishanthmandy@gmail.com',
  //   to: 'nishanthmandy@gmail.com',
  //   subject: 'Playwright Execution Completed',
  //   text: 'Playwright test execution has completed. Please find the report attached.',
  //   attachments: fs.existsSync(reportPath)
  //     ? [{ filename: 'playwright-report.html', path: reportPath }]
  //     : [],
  // };

  // await transporter.sendMail(mailOptions);
  // console.log('📧 Playwright execution email sent');
};

