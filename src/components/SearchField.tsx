import React from 'react';
import {VscSearch} from 'react-icons/vsc';
import {BsFillSunFill,BsMoonStarsFill} from 'react-icons/bs';

type Props ={
    search:string,
    searchKeyword:string,
    darkTheme:boolean,
    setDarkTheme:React.Dispatch<React.SetStateAction<boolean>>,
    setSearchKeyword:React.Dispatch<React.SetStateAction<string>>,
    setSearch:React.Dispatch<React.SetStateAction<string>>,
    handleSearch:(e:React.FormEvent)=>void
}

const SearchField:React.FC<Props> = ({searchKeyword,setSearchKeyword,setSearch,search,handleSearch,darkTheme,setDarkTheme}:Props) => {

  return (
    <div className='max-w-screen h-16 flex justify-center items-end relative'>


        <form className='md:w-2/5' onSubmit={handleSearch}>
            <div style={{border:darkTheme ? '1px solid #355764':'1px solid rgba(32,32,32,1)'}} className='flex rounded-full bg-slate-200 overflow-hidden dark:bg-transparent dark:text-white'>
            <input type='text' className='border-none outline-none flex-1 bg-transparent p-2' value={search} onChange={e=>setSearch(e.target.value)} />

            <button className='border-none outline-none ml-1 hover:bg-blue-500 h-full p-2 w-10 h-full flex justify-center items-center hover:text-white'>
              <VscSearch className='text-md h-full w-full'/>
              </button>
            </div>
        </form>

        <div className="w-10 h-10 rounded-full bg-white dark:bg-slate-600 dark:text-white drop-shadow-lg flex justify-center items-center fixed right-10 text-2xl cursor-pointer" onClick={()=>setDarkTheme(prev=>!prev)}>
         {darkTheme ? <BsFillSunFill/>:<BsMoonStarsFill />}
        </div>
    </div>
  )
}

export default SearchField