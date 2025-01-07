import unittest
from datetime import datetime, timedelta
from uuid import uuid4

from routers.types import BillingCouponBase, CouponType


class TestBillingCoupon(unittest.TestCase):
    def setUp(self):
        # 创建一个测试用的优惠券实例
        # 设置最小购买金额为1000分（10元）
        # 设置折扣率为80%（即打8折）
        # 设置最大折扣金额为500分（5元）
        now = datetime(2025, 1, 7, 19, 30, 0)  # 使用固定时间以保证测试稳定性
        self.coupon = BillingCouponBase(
            account=uuid4(),
            type=CouponType.discount,
            max_discount_value=500,  # 5元
            min_purchase=1000,  # 10元
            discount_rate=80,  # 80 = 打8折
            applicable_resource_type="",
            valid_from=now,
            valid_to=now + timedelta(days=30),
            balance=0,
        )

    def test_below_min_purchase(self):
        """测试未达到最小购买金额的情况"""
        result = self.coupon.calculate_discounted_price(800)  # 8元
        self.assertEqual(result, 800, "未达到最小购买金额时应返回原价")

    def test_normal_discount(self):
        """测试正常折扣情况"""
        # 购买2000分（20元），打8折，最终金额为1600分（16元）
        result = self.coupon.calculate_discounted_price(2000)
        self.assertEqual(result, 1600, "正常折扣计算错误")

    def test_max_discount_limit(self):
        """测试超过最大折扣金额的情况"""
        # 购买5000分（50元），打8折应为4000分，但受限于最大优惠500分，所以是4500分
        result = self.coupon.calculate_discounted_price(5000)
        self.assertEqual(result, 4500, "最大折扣限制计算错误")

    def test_exact_min_purchase(self):
        """测试刚好达到最小购买金额的情况"""
        # 购买1000分（10元），打8折，最终金额为800分（8元）
        result = self.coupon.calculate_discounted_price(1000)
        self.assertEqual(result, 800, "最小购买金额边界值计算错误")

    def test_zero_amount(self):
        """测试金额为0的情况"""
        result = self.coupon.calculate_discounted_price(0)
        self.assertEqual(result, 0, "金额为0时计算错误")

    def test_negative_amount(self):
        """测试负数金额的情况"""
        result = self.coupon.calculate_discounted_price(-1000)
        self.assertEqual(result, -1000, "负数金额时应返回原值")

    def test_just_over_min_purchase(self):
        """测试刚好超过最小购买金额的情况"""
        # 购买1001分（10.01元），打8折，最终金额为801分（8.01元）
        result = self.coupon.calculate_discounted_price(1001)
        self.assertEqual(result, 801, "刚好超过最小购买金额时计算错误")

    def test_large_amount(self):
        """测试大金额的情况"""
        # 购买100000分（1000元），打8折应为80000分，但受限于最大优惠500分，所以是99500分
        result = self.coupon.calculate_discounted_price(100000)
        self.assertEqual(result, 99500, "大金额计算错误")

    def test_discount_boundary(self):
        """测试最大折扣边界值的情况"""
        # 购买3500分（35元），打8折为2800分，折扣700分超过最大折扣500分
        result = self.coupon.calculate_discounted_price(3500)
        self.assertEqual(result, 3000, "折扣边界值计算错误")

    def test_no_discount_coupon(self):
        """测试无折扣的优惠券（折扣率为100%）"""
        no_discount_coupon = BillingCouponBase(
            account=uuid4(),
            type=CouponType.discount,
            max_discount_value=500,
            min_purchase=1000,
            discount_rate=100,  # 100% = 十折，不打折
            applicable_resource_type="",
            valid_from=datetime(2025, 1, 7, 19, 30, 0),
            valid_to=datetime(2025, 2, 7, 19, 30, 0),
            balance=0,
        )
        result = no_discount_coupon.calculate_discounted_price(2000)
        self.assertEqual(
            result, 2000, "无折扣优惠券计算错误"
        )  # 折扣率100%表示十折，不打折，返回原价

    def test_full_discount_coupon(self):
        """测试全额折扣的优惠券（折扣率为0%）"""
        full_discount_coupon = BillingCouponBase(
            account=uuid4(),
            type=CouponType.discount,
            max_discount_value=500,
            min_purchase=1000,
            discount_rate=0,  # 0% = 零折，全额折扣
            applicable_resource_type="",
            valid_from=datetime(2025, 1, 7, 19, 30, 0),
            valid_to=datetime(2025, 2, 7, 19, 30, 0),
            balance=0,
        )
        result = full_discount_coupon.calculate_discounted_price(2000)
        self.assertEqual(
            result, 1500, "全额折扣优惠券计算错误"
        )  # 全额折扣但受限于最大优惠500分

    def test_no_max_discount_limit(self):
        """测试无最大折扣限制的优惠券"""
        no_limit_coupon = BillingCouponBase(
            account=uuid4(),
            type=CouponType.discount,
            max_discount_value=0,  # 无最大折扣限制
            min_purchase=1000,
            discount_rate=80,  # 80% = 八折
            applicable_resource_type="",
            valid_from=datetime(2025, 1, 7, 19, 30, 0),
            valid_to=datetime(2025, 2, 7, 19, 30, 0),
            balance=0,
        )
        result = no_limit_coupon.calculate_discounted_price(5000)
        self.assertEqual(
            result, 4000, "无最大折扣限制的优惠券计算错误"
        )  # 八折优惠，实付5000 * 80% = 4000


if __name__ == "__main__":
    unittest.main()
