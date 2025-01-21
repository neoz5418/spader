import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight } from "lucide-react"

interface SimplePaginationProps {
  page: number
  totalPages: number
  onPageChange: (page: number) => void
  className?: string
}

export function SimplePagination({
  page,
  totalPages,
  onPageChange,
  className,
}: SimplePaginationProps) {
  return (
    <div className={`flex items-center justify-center gap-4 ${className}`}>
      <Button 
        onClick={() => onPageChange(page - 1)} 
        disabled={page === 1}
        variant="outline" 
        size="icon"
        className="h-8 w-8"
      >
        <ChevronLeft className="h-4 w-4" />
      </Button>

      <span className="text-sm text-muted-foreground min-w-[4rem] text-center">
        {page} / {totalPages}
      </span>

      <Button 
        onClick={() => onPageChange(page + 1)} 
        disabled={page === totalPages}
        variant="outline" 
        size="icon"
        className="h-8 w-8"
      >
        <ChevronRight className="h-4 w-4" />
      </Button>
    </div>
  )
} 