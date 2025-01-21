import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination"

interface PaginationProps {
  page: number
  total: number
  pageSize?: number
  onPageChange: (page: number) => void
  className?: string
}

export function PaginationComponent({
  page,
  total,
  pageSize = 10,
  onPageChange,
  className,
}: PaginationProps) {
  const totalPages = Math.ceil(total / pageSize)
  
  const getPageNumbers = () => {
    const pages = []
    const maxVisiblePages = 5
    
    if (totalPages <= maxVisiblePages) {
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i)
      }
    } else {
      let start = Math.max(1, page - 2)
      let end = Math.min(totalPages, start + maxVisiblePages - 1)
      
      if (end - start + 1 < maxVisiblePages) {
        start = Math.max(1, end - maxVisiblePages + 1)
      }
      
      if (start > 1) {
        pages.push(1)
        if (start > 2) pages.push(-1)
      }
      
      for (let i = start; i <= end; i++) {
        pages.push(i)
      }
      
      if (end < totalPages) {
        if (end < totalPages - 1) pages.push(-1)
        pages.push(totalPages)
      }
    }
    
    return pages
  }

  return (
    <Pagination className={className}>
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious
            onClick={() => onPageChange(page - 1)}
            isActive={false}
          />
        </PaginationItem>
        
        {getPageNumbers().map((pageNumber, index) => (
          <PaginationItem key={index}>
            {pageNumber === -1 ? (
              <PaginationEllipsis />
            ) : (
              <PaginationLink
                onClick={() => onPageChange(pageNumber)}
                isActive={page === pageNumber}
              >
                {pageNumber}
              </PaginationLink>
            )}
          </PaginationItem>
        ))}

        <PaginationItem>
          <PaginationNext
            onClick={() => onPageChange(page + 1)}
            isActive={page === totalPages}
          />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  )
} 