import logging
import smtplib
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart

from config import get_settings

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
    message.attach(MIMEText(content, "plain"))

    logger.info("email: %s, subject: %s, content: %s", email, subject, content)

    try:
        with smtplib.SMTP(smtp_host, smtp_port, timeout=10) as server:
            server.starttls()
            server.login(smtp_user, smtp_password)
            senderrs = server.sendmail(smtp_user, email, message.as_string())
            logger.info("email is already sent, errs: %s", senderrs)
    except Exception as e:
        logger.error("failed to send email: %s", e)


async def send_one_time_password_email(email: str, one_time_password: str):
    return await send_email_notification(
        email, "One Time Password", "Your one time password is: " + one_time_password
    )
