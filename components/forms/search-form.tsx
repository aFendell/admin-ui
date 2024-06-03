'use client';

import z from 'zod';
import { FormProvider, useForm } from 'react-hook-form';
import { Search } from 'lucide-react';
import { zodResolver } from '@hookform/resolvers/zod';
import TextField from './TextField';

const formSchema = z.object({
  search: z.string(),
});

type FormData = z.infer<typeof formSchema>;

const SearchForm = () => {
  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      search: '',
    },
  });

  const onSubmit = (values: FormData) => {
    console.log(values);
  };

  return (
    <FormProvider {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <div className='relative'>
          <Search className='absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground' />
          <TextField
            placeholder='Search products...'
            name='search'
            control={form.control}
          />
        </div>
      </form>
    </FormProvider>
  );
};

export default SearchForm;
