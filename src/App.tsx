import React,{ useState} from 'react';
import Footer from './components/Footer';
import SearchField from './components/SearchField';
import SearchData from './components/SearchData';
import {NewModel} from './components/Interface';

const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'f3cb2bb4bdmsh6c1d749be359eafp1ea1ecjsn3c4d9e48fa16',
		'X-RapidAPI-Host': 'real-time-web-search.p.rapidapi.com'
	}
};



const App:React.FC = () => {
  const [darkTheme,setDarkTheme] = useState<boolean>(true);
  const [search,setSearch] = useState<string>('');
  const [searchKeyword,setSearchKeyword] = useState<string>('');
  const [data,setData] = useState<NewModel[]>([]);

  const searchData=async(searchText:string)=>{
  fetch(`https://real-time-web-search.p.rapidapi.com/search?q=${searchText}&limit=25`, options)
	.then(response => response.json())
	.then(response => setData(response.data))
	.catch(err => setData(err));
  }

  const handleSearch =(e:React.FormEvent)=>{
    e.preventDefault();

    if(search) searchData(search)

  }

    return (
      <div className={darkTheme ? 'dark':''}>
      <div className='max-w-screen min-h-screen overflow-x-hidden dark:bg-[#100F0F]'>
      <SearchField 
      searchKeyword={searchKeyword} setSearchKeyword={setSearchKeyword}
      search={search} setSearch={setSearch}
      darkTheme={darkTheme} setDarkTheme={setDarkTheme}
      handleSearch={handleSearch}
       />

      <SearchData data={data} />

      <Footer />
      </div>  
      </div>
    )
}

export default App
