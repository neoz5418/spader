import logging

logger = logging.getLogger(__name__)

async def send_email_notification(email: str, subject: str, content: str):
    logger.info("email: %s, subject: %s, content: %s", email, subject, content)

async def send_one_time_password_email(email: str, one_time_password: str):
    return await send_email_notification(email, "One Time Password", one_time_password)