from datetime import datetime


def subtract_datetimes(end_time: datetime, start_time: datetime) -> float:
    """
    计算两个 datetime 对象的时间差（以小时为单位）。
    忽略时区信息，直接计算本地时间差。

    :param end_time: 结束时间
    :param start_time: 开始时间
    :return: 时间差（小时）
    """
    # 如果 end_time 是 offset-aware，转换为 offset-naive
    if end_time.tzinfo is not None:
        end_time = end_time.replace(tzinfo=None)
    # 如果 start_time 是 offset-aware，转换为 offset-naive
    if start_time.tzinfo is not None:
        start_time = start_time.replace(tzinfo=None)

    # 计算时间差（以秒为单位），然后转换为小时
    time_diff = (end_time - start_time).total_seconds() / 3600
    return time_diff
