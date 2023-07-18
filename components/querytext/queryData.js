import { useState } from 'react'
import { useQuery } from 'react-query'

export default function QueryData() {
  const fetchAPI = async ({ queryKey }) => {
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${queryKey[1]}/`)
    const data = await res.json()
    return data
  }

  const [page, setPage] = useState(1)
  const { data, isSuccess, isError, error, isLoading } = useQuery(
    'PokeAPI',
    fetchAPI,
    {
      enabled: false,
    }
  )

  if (isError) {
    return <h1>{error.message}</h1>
  }

  if (isLoading) {
    return <h1>Loading...</h1>
  }

  return (
    <div className="box">
      <h3>目前頁數 {page}</h3>
      <div>
        <button onClick={() => setPage((prev) => prev - 1)}>Prev</button>
        <button onClick={() => setPage((prev) => prev + 1)}>Next</button>
      </div>
      <div>
        <div className="card">
          <p className="dexId">
            No.00{data.id} {data.name}
          </p>
          <img src={data?.sprites?.front_default} />
          <div className="typeflex">
            {data?.types?.map((type) => (
              <div className={`types ${type.type.name}`} key={type.type.name}>
                <span className="mt-1">{type.type.name.toUpperCase()}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

render()
{
  return (
    <>
      <ul>
        {data.map((v, i) => {
          return (
            <li key={v.id}>
              {v.id} / {v.name}
            </li>
          )
        })}
      </ul>
    </>
  )
}
