import {useForm} from 'react-hook-form';


const AddRecipeForm = () => {
    const {register, handleSubmit, formState:{ errors}} = useForm();

    const onSubmit = (data) => {
        console.log(data);
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)} className='max-w-lg mx-auto flex flex-col md:flex-row space-y-4'>
            <input
            {...register("title",{required: true})}
            className='border p-2 w-full rounded-lg'
            placeholder='Recipe Title'
            />
            {errors.title && <span className='text-red-500'>Title is required</span>}

            <textarea
            {...register("ingredients",{
                required: true,
                validate: value => value.split('\n').lenght > 1 || "At least two ingredients are required"})}
            className='border p-2 w-full rounded-lg'
            placeholder='Ingredients (one per line)'
            />
            {errors.ingredients && <span className='text-red-500'>{errors.ingredients.message}</span>}

            <textarea
            {...register("instructions",{required: true})}
            className='border p-2 w-full rounded-lg'
            placeholder='Preparation steps'
            />
            {errors.instructions && <span className='text-red-500'>instructions is required</span>}


            <button type="submit" className="bg-blue-500 text-white p-2 rounded-lg">Submit</button>





        </form>
    )
}
export default AddRecipeForm;