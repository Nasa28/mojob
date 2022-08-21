/* eslint-disable camelcase */
import React, {FC} from 'react';
import { useEffect, useState } from 'react';
import axios from 'axios';
// import Loading from '../components/Loading'
import { JobListing} from './interface';
import PageFilter from '../components/PageFilter';
import Filter from '../components/Filter';


const GetJobListings:FC<JobListing> = () => {
  const [size, setSize]= useState(5)
    const [state, setState] = useState('');

  const [jobLists, setJobLists] = useState([])
  useEffect(() => {
    const fetchjobs = async () => {
    try {
      const url =
        `https://test-api.mojob.io/public/job/listings/?include_open=False&page=1&page_size=${size}&use_mojob_feed_filter=False&use_pagination=True`;

      const response = await axios.get(url);
      setJobLists(response.data.results)
    } catch (error) {
      console.log(error);
    }
  };

    fetchjobs();
  }, [size]);
  
const handleFilterChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setState(e.target.value);
  };
  const handlePageSizeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    e.preventDefault();
    if(e.target.value==='5 per page'){
      setSize(5)
      e.target.value.toUpperCase()
    }else if(e.target.value==='25 per page'){
      setSize(25)
      e.target.value.toUpperCase()

    }else if(e.target.value){
      setSize(10000)
      e.target.value.toUpperCase()

    }
  };

  let filtered;
    
  const filteredList = jobLists.filter((ele: JobListing)=> ele.job?.position_function?.name_en === state)
  if(state !== ''){
     filtered = filteredList
  }else{
       filtered = jobLists
  }
  return (
    
      <div>
        <div className='main'>
          <Filter handleFilterChange={handleFilterChange}/>
          <div>
          <PageFilter handlePageSizeChange={handlePageSizeChange} />
        </div>
        </div>
        <div>
           {filtered.length> 0? filtered.map((ele:JobListing ) => {
          const {id, job} = ele
            {
              return (
                
                <div key = {id} className= 'job container-fluid ' >
                  
                  <h6>{job?.title}</h6>
                  <div className='content'>
                    <p>{job?.unit?.display_name}</p>
                    <li>{job?.position_function?.name_en}</li>
                    <li>{job?.due_date}</li>
                  </div>
                </div>
                  );
            }
          }): <p className= 'job container-fluid text-danger '>No Job found, Click on Logo to continue on increase page size</p>
}
        </div>
        
      </div>
    
  );
};

export default GetJobListings;
