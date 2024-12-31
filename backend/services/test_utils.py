import unittest
from datetime import datetime, timezone, timedelta

# 导入需要测试的函数
from .utils import subtract_datetimes  # 替换为实际模块名


class TestSubtractDatetimes(unittest.TestCase):
    def test_both_naive(self):
        # 测试两个 offset-naive datetime
        start_time = datetime(2023, 10, 1, 12, 0)
        end_time = datetime(2023, 10, 1, 14, 0)
        self.assertEqual(subtract_datetimes(end_time, start_time), 2.0)

    def test_one_naive_one_aware(self):
        # 测试一个 offset-naive 和一个 offset-aware datetime
        start_time = datetime(2023, 10, 1, 12, 0)
        end_time = datetime(2023, 10, 1, 14, 0, tzinfo=timezone.utc)
        self.assertEqual(subtract_datetimes(end_time, start_time), 2.0)

    def test_both_aware_same_timezone(self):
        # 测试两个 offset-aware datetime，时区相同
        start_time = datetime(2023, 10, 1, 12, 0, tzinfo=timezone.utc)
        end_time = datetime(2023, 10, 1, 14, 0, tzinfo=timezone.utc)
        self.assertEqual(subtract_datetimes(end_time, start_time), 2.0)

    def test_both_aware_different_timezone(self):
        # 测试两个 offset-aware datetime，时区不同
        start_time = datetime(2023, 10, 1, 12, 0, tzinfo=timezone.utc)
        end_time = datetime(2023, 10, 1, 14, 0, tzinfo=timezone(timedelta(hours=2)))
        self.assertEqual(subtract_datetimes(end_time, start_time), 2.0)

    def test_negative_difference(self):
        # 测试时间差为负数的情况
        start_time = datetime(2023, 10, 1, 14, 0)
        end_time = datetime(2023, 10, 1, 12, 0)
        self.assertEqual(subtract_datetimes(end_time, start_time), -2.0)

    def test_zero_difference(self):
        # 测试时间差为零的情况
        start_time = datetime(2023, 10, 1, 12, 0)
        end_time = datetime(2023, 10, 1, 12, 0)
        self.assertEqual(subtract_datetimes(end_time, start_time), 0.0)

    def test_milliseconds_difference(self):
        # 测试毫秒级别的时间差
        start_time = datetime(2023, 10, 1, 12, 0, 0, 0)
        end_time = datetime(2023, 10, 1, 12, 0, 0, 500000)  # 500 毫秒
        self.assertAlmostEqual(
            subtract_datetimes(end_time, start_time), 0.0001388889, places=7
        )

    def test_microseconds_difference(self):
        # 测试微秒级别的时间差
        start_time = datetime(2023, 10, 1, 12, 0, 0, 0)
        end_time = datetime(2023, 10, 1, 12, 0, 0, 500)  # 500 微秒
        self.assertAlmostEqual(
            subtract_datetimes(end_time, start_time), 0.0000001389, places=10
        )

    def test_mixed_units_difference(self):
        # 测试混合单位（小时、分钟、秒、毫秒、微秒）的时间差
        start_time = datetime(2023, 10, 1, 12, 0, 0, 0)
        end_time = datetime(
            2023, 10, 1, 13, 30, 15, 500000
        )  # 1 小时 30 分钟 15 秒 500 毫秒
        self.assertAlmostEqual(
            subtract_datetimes(end_time, start_time), 1.5043055556, places=7
        )


if __name__ == "__main__":
    unittest.main()
