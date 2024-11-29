import logging
import smtplib
from email.mime.multipart import MIMEMultipart
from email.mime.text import MIMEText

from settings import get_settings

logger = logging.getLogger(__name__)


# TODO: email template
async def send_email_notification(email: str, subject: str, content: str):
    smtp_host = get_settings().smtp_host
    smtp_port = get_settings().smtp_port
    smtp_user = get_settings().smtp_user
    smtp_password = get_settings().smtp_password

    message = MIMEMultipart()
    message["From"] = smtp_user
    message["To"] = email
    message["Subject"] = subject
    message.attach(MIMEText(content, "html"))

    logger.info("email: %s, subject: %s, content: %s", email, subject, content)

    try:
        with smtplib.SMTP(smtp_host, smtp_port, timeout=10) as server:
            server.starttls()
            server.login(smtp_user, smtp_password)
            senderrs = server.sendmail(smtp_user, email, message.as_string())
            logger.info("email is already sent, errs: %s", senderrs)
    except Exception as e:
        logger.error("failed to send email: %s", e)


TEMPLATE_OTP = """
<!DOCTYPE html>
<html lang="zh-cn">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>邮件验证码</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            background-color: #f9f9f9;
            margin: 0;
            padding: 0;
        }
        .container {
            max-width: 600px;
            margin: 20px auto;
            background-color: #ffffff;
            border-radius: 8px;
            box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
            overflow: hidden;
        }
        .header {
            background-color: #4CAF50;
            color: #ffffff;
            padding: 20px;
            text-align: center;
            font-size: 24px;
            font-weight: bold;
        }
        .content {
            padding: 20px;
            text-align: center;
            font-size: 16px;
            color: #333333;
        }
        .code {
            font-size: 28px;
            font-weight: bold;
            color: #4CAF50;
            margin: 20px 0;
            letter-spacing: 4px;
        }
        .footer {
            background-color: #f1f1f1;
            padding: 10px;
            text-align: center;
            font-size: 14px;
            color: #666666;
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">请查收邮件验证码</div>
        <div class="content">
            <p>你的注册验证码为：</p>
            <p class="code">%s</p>
            <p>请在 10 分钟内使用验证码完成注册。</p>
        </div>
        <div class="footer">如果您未请求此邮件，请忽略。</div>
    </div>
</body>
</html>
"""


async def send_one_time_password_email(email: str, one_time_password: str):
    return await send_email_notification(
        email, "请查收邮件验证码", TEMPLATE_OTP % one_time_password
    )
