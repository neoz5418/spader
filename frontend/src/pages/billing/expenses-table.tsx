import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useCurrentWorkspace } from "@/hooks/use-setting";
import { listWorkspaceBillingRecords, listWorkspaceExpenses, useListWorkspaceBillingRecordsHook, useListWorkspaceExpensesHook } from "@/gen";
import Loader from "@/components/loader";
import { useQuery } from "@tanstack/react-query";
import { Currency } from "@/utils/format";

interface ExpensesTableProps {
  startDate: Date;
  endDate: Date;
  currency: string;
}

export function ExpensesTable({ startDate, endDate, currency }: ExpensesTableProps) {
  const { currentWorkspace } = useCurrentWorkspace();

  const { data: expenses, isLoading } = useQuery({
    queryKey: ["expenses", currentWorkspace?.name, startDate, endDate],
    queryFn: () => listWorkspaceExpenses(currentWorkspace?.name || "", {
      start_date: startDate.toISOString(),
      end_date: endDate.toISOString(),
    }),
    select: (data) =>{
        console.log("expenses", data)
        return (data && 'expenses' in data)? data.expenses : []
    },
  });   

  if (isLoading) return <Loader />;

  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>日期</TableHead>
          <TableHead>总消费</TableHead>
          <TableHead>实例</TableHead>
          <TableHead>存储卷</TableHead>
          <TableHead>快照</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {expenses?.map((expense: ExpenseType) => (
          <TableRow key={expense.date}>
            <TableCell>
              {new Date(expense.date).toLocaleDateString("zh-CN")}
            </TableCell>
            <TableCell>
              {Currency(expense.total, currency)}
            </TableCell>
            <TableCell>
              {Currency(expense.expense_detail.instance, currency)}
            </TableCell>
            <TableCell>
              {Currency(expense.expense_detail.volume, currency)}
            </TableCell>
            <TableCell>
              {Currency(expense.expense_detail.snapshot, currency)}
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
} 