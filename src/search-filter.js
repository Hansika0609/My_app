import React, { useEffect, useState} from 'react'

export default function Searchfilter() {
    const [data, setData] = useState([]);
    const [searchApiData, setSearchApiData] =useState([]);
    const [filterVal, setFilterVal] = useState('');
    useEffect(()=> {
        const fetchData=()=>{
            fetch('https://jsonplaceholder.typicode.com/users')
                .then(response => response.json())
                .then(json => {
                    setData(json)
                    setSearchApiData(json)
                })
                    
        }
        fetchData();
    }, [])
    const handleFilter=(e)=>{
        if(e.target.value == ''){
            setData(searchApiData)
        }

        
        else{
            const filterResult = searchApiData.filter(item => item.name.toLowerCase().includes(e.target.value.toLowerCase()))
            setData(filterResult)
        }
        setFilterVal(e.target.value)
    }

  return (
    <div style = {{margin: '20px 50px'}}>
        <div className='.p-input-icon-right '> 
            <input placeholder='Search' value={filterVal} onInput={(e) => handleFilter(e)}/>
        </div>
        <table>
            <th>Name</th>
            <th>User Name</th>
            <th>Email</th>
            <th>Phone</th>
            {
                data.map(item => {
                    return(
                        <tr>
                            <td>{item.name}</td>
                            <td>{item.username}</td>
                            <td>{item.email}</td>
                            <td>{item.phone}</td>
                        </tr>
                    )
                })
            }
        </table>
    </div>
  )
}
