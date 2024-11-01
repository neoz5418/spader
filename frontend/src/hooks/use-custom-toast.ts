import { useToast } from "@/components/ui/use-toast"
import { useCallback } from "react"

const useCustomToast = () => {
  const { toast } = useToast()

  const showToast = useCallback(
    (title: string, description: string, status: "success" | "error") => {
      console.log("status", status)
      toast({
        title,
        description,
        // status,
        // isClosable: true,
        // position: "bottom-right",
      })
    },
    [toast],
  )

  return showToast
}

export default useCustomToast
