

// memory is Byte, convert to GB or MB
export const Memory = (memory: number) => {
    if (memory > 1000 * 1000 * 1000) {
      return `${(memory / 1000 / 1000 / 1000).toFixed(0)} GB`
    } else {
      return `${(memory / 1000 / 1000).toFixed(0)} MB`
    }
  }
  
  // disk is Byte, convert to GB or TB
  export const Disk = (disk: number) => {
    if (disk > 1000 * 1000 * 1000 * 1000) {
      return `${(disk / 1000 / 1000 / 1000 / 1000).toFixed(0)} TB`
    } else {
      return `${(disk / 1000 / 1000 / 1000).toFixed(0)} GB`
    }
  }
  
  export const GPU = (gpu: string) => {
    return `${gpu}`
  }
  
  export const CPU = (cpu: number) => {
    return `${cpu} Core`
  }
  
  export const Price = (price: number|undefined, period: string) => {
    if (price === undefined) {
      return `Error`
    }
    if (period === "hour" || period === "real_time") {
      return `${(price/100).toFixed(2)} / 小时`
    } else if (period === "one_day") {
      return `${(price/100/24).toFixed(2)} / 小时`
    } else if (period === "one_week") {
      return `${(price/100/24/7).toFixed(2)} / 小时`
    } else if (period === "one_month") {
      return `${(price/100/24/30).toFixed(2)} / 小时`
    }
  }
  
  export const Currency = (amount: number, currency: string) => {
    return ((amount || 0) / 100).toLocaleString("zh-CN", {
      style: "currency",
      currency: currency,
      minimumFractionDigits: 2,
    });
  }