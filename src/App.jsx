import { useCallback, useEffect, useState } from 'react'
import { useGetshopbyNameQuery } from './services/fakeShop';
import { addToState } from './featcures/cartSlice';
import { useSelector, useDispatch } from 'react-redux';

function App() {
  const [products, setProducts] = useState([])
  const { data, isLoading, status, isError, error, isSuccess } = useGetshopbyNameQuery(`products`)
  useEffect(() => {

    setProducts(data);
    console.log(data);

  }, [data])
  if (isLoading) {
    return (
      <div className='h-screen bg-purple-500  grid place-content-center text-center text-3xl uppercase  ' >
        <div className='flex' >
          loading <span className='animate-spin mx-5 tracking-widest ' >\</span>
        </div>
      </div>
    )
  }
  return (
    <div className='h-screen bg-slate-200 text-black dark:text-white dark:bg-slate-800 ' >

      <div>
        {isLoading ? <h1 className='text-white' >loading</h1> : products && products.map(p => {
          return (
            <div key={p.id} >
              {p.title}
            </div>
          )
        })}


      </div>
    </div>
  )
}

export default App
