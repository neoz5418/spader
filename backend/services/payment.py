import logging
from uuid import UUID

from alipay.aop.api.AlipayClientConfig import AlipayClientConfig
from alipay.aop.api.DefaultAlipayClient import DefaultAlipayClient
from alipay.aop.api.domain.AlipayTradePagePayModel import AlipayTradePagePayModel
from alipay.aop.api.request.AlipayTradePagePayRequest import AlipayTradePagePayRequest
from alipay.aop.api.response.AlipayTradeQueryResponse import AlipayTradeQueryResponse
from alipay.aop.api.request.AlipayTradeQueryRequest import (
    AlipayTradeQueryRequest,
    AlipayTradeQueryModel,
)


# TODO: use production config
alipay_client_config = AlipayClientConfig()
alipay_client_config.server_url = "https://openapi-sandbox.dl.alipaydev.com/gateway.do"
alipay_client_config.app_id = "9021000142615012"
alipay_client_config.app_private_key = "MIIEowIBAAKCAQEAiElhidg1V/qT+ufdqP1VPYIci7RjAWeq2He1+poRyNmPpFnNBFsIEcyq8Ou5/87q6nsdlJsbag2uBZVfHFC9gTWPU1OBDA2/s2cUvGb3PtWasfTZ/qpQpDFHmLEunw2Ii/UvOtXpwOTibamWC+Zp22WFIemidZYsModth8R9Ub7JPTnFSNjwbjyX/ZrSrHmcHUMdqgW5NnGc+nEt7md37mLJPwVnUT7VSMwqoznmQxMAyb0qXcgWIol9LUSHOdU5ANw0eMu4cdOEIZkfMiv6jlrn6ZviINy6xoVHLFdL6r4Eu5W0zl71ixdhct//Grz/+Pkgcu0bx02UtD1J2OpnGQIDAQABAoIBAEXKDgCgjvB2iMC7a27WC4hr0GJaBTj69SnUY4Po0aKghkYLFklctE0pGYA1thGgy/s3AHbQ1sEAMFT7oLDHR8OawcJRyIt7nucnqh6wO3wZthXa5KbcYF80PQ2b7dvU+k9xRrZCRGlay/iMFyIQ47RN0FcFZQQB2rAlWZlkrSfmXYjqBbCC8vBkNuFMfsKGAvKx3QAGY3qMGigiid0sSQlUwWMMU7XZPPT0i2PQIVHJhXtmXa5WRY1EYsR3pr5wXCP0fytmD8dQxqnQiTqBoLf8uukMBn0s1XnS+TZEUDaJo1YdKNXeuvB8cxeEbC0We3yOLzya7YfNGSFqiijevOECgYEA8GysPerd40wMwqqwXs6//X6FQbNK4bfsb8uOuovxfbXitis1vawUMqivZO4e27XAwMnzvuW7v8G6lW7b2EIx1WaGeWlSbeWZd438ikxdbS/eGdzQ8qrBzfdu1zDvPX4eH7TOMij0SM7qnat7qA2Q/dOKeEtEiy4ByJ7LPd6e9BcCgYEAkR2hfp8HSn/OQoRCY6QUv8/zvyVEHxHG3VSATqZVtXaznrRDb8bgKc9F9iiZYokWwZQrmc/k4rVvZpu6brj47S5wEda92+3scNIrHOY2VMlcn2H95RPzms0xQ+mbJVkVHAMNkzjLoyj8tfT7Og2ULHlzcut4pNabLwRE+6h0DE8CgYAHZF/7W2BNH8Z4qcTYdWTjx2MTfQ69V+lWGp0d0TWwlsoMrdFuLn9Ee3lBEi0ytijiBJOQ+AFIyQ0SkSEDSi28EPXrf7iAFoIcceok2mo49DLQ+sAV5fglfAkVZrTEYD9O3EFGu4mfP3VpOZ+IsDoYA8wLHM1Ttitp3rADC/g5KwKBgGKgnuguMYhiwM7YkT6jgC61qVZaf6gWLvCyw9mwl0QT/xR4M/U+V5BS/ZvGECm2Pq8mg1OwxkGHSsWUReuG8DhTfXvCVZuqYy5yyTaFCJwrlzYEJcmR+9lUaI1dskJ5/yzgrlNHILAt5UPN0wmrvO9VRC/w9jgiW6pi3nekD+tlAoGBAOMWDFs4miQVv5Cit+EI68pmwjWTbt4RRfkXVctr9Y+SJrp+oII67aVxpaj/5apScaHWlYd006DpvhTHVqMqsSAAxHvWt4wt5Esv6+VcsV57jFtZLQKJLgGsnU5lnqncv2H30J2ZGFZvj8G7eZgChyvc8wNdYL98bZo0mfBwrvvS"
alipay_client_config.alipay_public_key = "MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAr05+xb2bXZCv6dg/8Nf7FwEp21L1ezk3G3GcYOEIrksN5ERTnBrQji96bR3Rf3JubY2KOQ0W0eaMAxEsFXkFZ9i7AJ2TSCSsssZz5j0Ejh0bPUiYVyrvktewX5Y7VlGgscsEWDoXVv5vwqWr7p6qy8bCwiVIfUvIhQdQqYQYXEOyWadX+pEzIpm3CypIPyJ62MenokGDk6URybCkCQn6y8ZIwmTLGh4skqF1VglclBmpP240/xLKGwvg9WGe8vpHfdomoCPVarINJEXg8L62NhPmI8Nmq3qRhZjk1WeytAe1ENQVWqmGJNpfo+3Zug6KS31p0lit5Qn34gsxGx4gzQIDAQAB"

logger = logging.getLogger(__name__)
client = DefaultAlipayClient(alipay_client_config, logger)


def alipay_recharge(recharge_id: UUID, amount: int, callback_url: str) -> str:
    model = AlipayTradePagePayModel()
    model.out_trade_no = str(recharge_id)
    model.total_amount = amount / 100
    model.subject = "钱包充值"
    model.body = "钱包充值 %s 元" % (amount / 100)
    model.product_code = "FAST_RECHARGE"
    model.request_from_url = callback_url
    request = AlipayTradePagePayRequest(biz_model=model)
    response = client.page_execute(request, http_method="GET")
    return response


def check_alipay_recharge(recharge_id: UUID) -> bool:
    model = AlipayTradeQueryModel()
    model.out_trade_no = str(recharge_id)
    request = AlipayTradeQueryRequest(biz_model=model)
    query_response_content = client.execute(request)
    query_response = AlipayTradeQueryResponse()
    query_response.parse_response_content(query_response_content)
    return (
        query_response.is_success() and query_response.trade_status == "TRADE_SUCCESS"
    )
