import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
  TableFooter,
} from "@/components/ui/table";
import { useCurrentWorkspace } from "@/hooks/use-setting";
import { billingRecordType, BillingRecordType, listWorkspaceBillingRecords, useListWorkspaceBillingRecordsHook } from "@/gen";
import { Pagination } from "@/components/ui/pagination";
import Loader from "@/components/loader";
import { useMemo, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { Currency } from "@/utils/format";
import { PaginationComponent } from "@/components/custom/pagination"
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { SimplePagination } from "@/components/custom/simple-pagination"

interface TransactionsTableProps {
  startDate: Date;
  endDate: Date;
  currency: string;
}

export function TransactionsTable({ startDate, endDate, currency }: TransactionsTableProps) {
  const { currentWorkspace } = useCurrentWorkspace();
  const [page, setPage] = useState(1);
  const [total, setTotal] = useState(0);
  const pageSize = 10;

  const { data: billingRecords, isLoading } = useListWorkspaceBillingRecordsHook(currentWorkspace?.name || "", {
    offset: (page - 1) * pageSize,
    limit: pageSize,
  });

  const totalPages = useMemo(() => {
    if (!billingRecords) return 0;
    return Math.ceil(billingRecords.pagination.total/pageSize) || 0;
  }, [billingRecords, pageSize]);


  if (isLoading) return <Loader />;

  return (
    <div>   
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>时间</TableHead>
            <TableHead>类型</TableHead>
            <TableHead>金额</TableHead>
            <TableHead>资源类型</TableHead>
            <TableHead>资源ID</TableHead>
            <TableHead>{page}优惠码</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {billingRecords?.items.map((record: BillingRecordType) => (
            <TableRow key={record.uid}>
              <TableCell>
                {new Date(record.billing_time).toLocaleString("zh-CN")}
              </TableCell>
              <TableCell>
                {record.type === billingRecordType.top_up ? "充值" : "消费"}
              </TableCell>
              <TableCell className={record.type === billingRecordType.top_up ? "text-green-500" : "text-red-500"}>
                {record.type === billingRecordType.top_up ? "+" : "-"}
                {Currency(Math.abs(record.amount), currency)}
              </TableCell>
              <TableCell>{record.resource_type}</TableCell>
              <TableCell>{record.resource_id}</TableCell>
              <TableCell>{record.coupon}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      
      <SimplePagination
        page={page}
        totalPages={totalPages}
        onPageChange={setPage}
        className="mt-4"
      />
    </div>
  );
} 