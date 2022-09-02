import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";

const Form = ({handleAddTodo, closeForm}) => {
  const schema = yup.object({
    title: yup.string().required('Give a title here'),
    description: yup.string().required('Description field is required')
  })
  const onSubmit = (data) => {
    handleAddTodo(data)
  }
  const {register, handleSubmit, formState: {errors}} = useForm({resolver: yupResolver(schema)});
  return (
    <div className='w-screen h-screen fixed top-0 left-0 flex justify-center items-center bg-[#121111]'>
      <div className='bg-slate-800 p-8 rounded-xl shadow-md shadow-gray-600'>
        <h4 className='text-center text-xl text-gray-400 font-medium mb-6'>Add new Task</h4>
        <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col'>
          <input className='outline-none px-6 py-2 rounded-full bg-gray-700 caret-purple-500 text-gray-300 shadow-md shadow-gray-600' type="text" placeholder='Write a title...' {...register('title')}/>
          <p className='mt-2 ml-2 text-red-400 italic'>{errors.title?.message }</p>
          <textarea className='outline-none px-6 py-2 rounded-lg bg-gray-700 caret-purple-500 text-gray-300 resize-none mt-3 shadow-md shadow-gray-600' rows="3" placeholder='Write a description...' {...register('description')}></textarea>
          <p className='mt-2 ml-2 text-red-400 italic'>{errors.description?.message }</p>
          <button type='submit' className='border bg-purple-600 text-gray-400 rounded-full py-1 border-none mb-2 shadow-sm shadow-green-500 mt-5'>Add task</button>
          <button onClick={closeForm} className='border bg-red-400 text-red-700 rounded-full py-1 border-none shadow-sm shadow-red-200'>Cancel</button>
        </form>
      </div>
    </div>
  )
}

export default Form