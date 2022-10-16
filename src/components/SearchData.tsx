import React from 'react';
import {NewModel} from './Interface';

interface Props{
    data:NewModel[]
}

const SearchData:React.FC<Props> = ({data}:Props) => {

  return (
    <div className='w-full flex justify-center items-start mt-3 dark:text-slate-300'>

       <div className='w-4/5'>
      {
        data?.map((news,ind)=>(
            <div key={ind} className='mb-3'>
                <a href={news.domain} target="_blank" rel="noreferrer" className='text-blue-500 italic text-sm'>{news.domain}</a>
                <h5 className='font-semibold text-lg'>{news.title}</h5>
                <p className='italic'>
                    source: <a  href={news.url} target="_blank" rel="noreferrer" className='text-blue-600'>{news.url}</a>
                </p>

                <div className='flex'>
                <p className='py-2'>{news.snippet}</p>
                </div>
            </div>
        ))
      }
      </div>
    </div>
  )
}

export default SearchData