import { Input } from '@/components/ui/input'

export function Search(placeholder:string = 'Search...') {
  placeholder
  return (
    <div>
      <Input
        type='search'
        placeholder= {placeholder}
        className='md:w-[100px] lg:w-[300px]'
      />
    </div>
  )
}
