import { zodResolver } from '@hookform/resolvers/zod'
import { CalendarIcon, CaretSortIcon, CheckIcon } from '@radix-ui/react-icons'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import dayjs from 'dayjs'
import { cn } from '@/lib/utils'
import { Button } from '@/components/custom/button'
import { Calendar } from '@/components/ui/calendar'
import  { bodyTokenApisOidcV1TokenPostSchema as bodyLoginLoginAccessTokenSchema, userSchema } from "../../../gen/zod"
import type { BodyTokenApisOidcV1TokenPostSchema as BodyLoginLoginAccessTokenSchema } from "../../../gen/zod"
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from '@/components/ui/command'
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover'
import { toast } from '@/components/ui/use-toast'
import useAuth from '@/hooks/use-auth'
import { UserType } from '@/gen/ts/UserType'

// const languages = [
//   { label: 'English', value: 'en' },
//   { label: 'French', value: 'fr' },
//   { label: 'German', value: 'de' },
//   { label: 'Spanish', value: 'es' },
//   { label: 'Portuguese', value: 'pt' },
//   { label: 'Russian', value: 'ru' },
//   { label: 'Japanese', value: 'ja' },
//   { label: 'Korean', value: 'ko' },
//   { label: 'Chinese', value: 'zh' },
// ] as const



export function AccountForm() {
  const {user:currentUser} = useAuth()

  const form = useForm<UserType>({
    resolver: zodResolver(userSchema),
    defaultValues: currentUser,
  })

  function onSubmit(data: UserType) {
    toast({
      title: 'You submitted the following values:',
      description: (
        <pre className='mt-2 w-[340px] rounded-md bg-slate-950 p-4'>
          <code className='text-white'>{JSON.stringify(data, null, 2)}</code>
        </pre>
      ),
    })
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-8'>
        <FormField
          control={form.control}
          name='name'
          render={({ field }) => (
            <FormItem>
              <FormLabel>Name</FormLabel>
              <FormControl>
                <Input placeholder='Your name' {...field} />
              </FormControl>
              <FormDescription>
                This is the name that will be displayed on your profile and in
                emails.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name='display_name'
          render={({ field }) => (
            <FormItem className='flex flex-col'>
              <FormLabel>Date of birth</FormLabel>
              <Popover>
                <PopoverTrigger asChild>
                  <FormControl>
                    <Button
                      variant={'outline'}
                      className={cn(
                        'w-[240px] pl-3 text-left font-normal',
                        !field.value && 'text-muted-foreground'
                      )}
                    >
                      {field.value ? (
                        dayjs(field.value).format('MMM D, YYYY')
                      ) : (
                        <span>Pick a date</span>
                      )}
                      <CalendarIcon className='ml-auto h-4 w-4 opacity-50' />
                    </Button>
                  </FormControl>
                </PopoverTrigger>
                <PopoverContent className='w-auto p-0' align='start'>
                  <Calendar
                    mode='single'
                    selected={field.value}
                    onSelect={field.onChange}
                    disabled={(date: Date) =>
                      date > new Date() || date < new Date('1900-01-01')
                    }
                    initialFocus
                  />
                </PopoverContent>
              </Popover>
              <FormDescription>
                Your date of birth is used to calculate your age.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type='submit'>Update account</Button>
      </form>
    </Form>
  )
}
