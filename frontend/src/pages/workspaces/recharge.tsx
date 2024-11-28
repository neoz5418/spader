import { useCheckWorkspaceAccountRechargeHook, useRechargeWorkspaceAccountHook } from '@/gen'
import { useEffect, useState } from 'react'
import { useCurrentWorkspace } from '@/hooks/use-setting.ts'
import { useSearchParams } from 'react-router-dom'

export function RechargeCallback(out_trade_no: string) {
  const mutation = useCheckWorkspaceAccountRechargeHook(out_trade_no)
  let retryCount = 0
  useEffect(() => {
    if (!mutation.data) {
      mutation.mutate()
    }
    if (mutation.data?.status === 'pending' && retryCount <= 20) {
      retryCount++
      setTimeout(() => mutation.mutate(), 2000)
    }
  }, [mutation.data])

  if (mutation.data?.status === 'succeeded') {
    return <h5>充值成功</h5>
  }
  if (mutation.data?.status === 'failed') {
    return <h5>充值失败</h5>
  }
  return <h5>正在查询充值状态</h5>
}

export default function Recharge() {
  const [searchParams] = useSearchParams()
  const { currentWorkspace: workspace } = useCurrentWorkspace()
  const mutation = useRechargeWorkspaceAccountHook(workspace?.name || '')
  const [amount, setAmount] = useState(100)
  const out_trade_no = searchParams.get('out_trade_no')
  if (out_trade_no) {
    return RechargeCallback(out_trade_no)
  }

  const recharge = (e) => {
    e.preventDefault()
    mutation.mutate({
      'amount': amount * 100,
      'currency': 'CNY',
      'type': 'alipay',
      'callback_url': window.location.origin + window.location.pathname,
    })
  }
  if (mutation.data?.pay_url) {
    window.location.href = mutation.data.pay_url
  }

  return (
    <form onSubmit={recharge} className="space-y-4">
      {mutation.error && (
        <h5
          onClick={() => mutation.reset()}
          className="cursor-pointer text-red-600"
        >
          {mutation.error.toString()}
        </h5>
      )}
      <label className="block">
        请输入充值金额：
        <input
          type="text"
          value={amount}
          onChange={(e) => setAmount(parseInt(e.target.value))}
          className="border border-gray-300 p-2 rounded-md"
        />
      </label>
      <button
        type="submit"
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md"
      >
        使用支付宝进行支付
      </button>
    </form>
  )
}
