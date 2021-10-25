import React, { useState } from 'react'
import { fetchJson } from '../../api'
import { Result } from '../../types'
import Person from '../Person'
import SearchPerson from '../SearchPerson/SearchPerson'

function People() {
  const [search, setSearch] = useState("")
  const [people, setPeople] = React.useState<Result[]>([])
  React.useEffect(() => {
    fetchJson<{ results: Result[] }>('people/?search=' + search)
      .then(peopleResponse => setPeople(peopleResponse.results))
  }, [search])

  function handleInputChange (e: any) {
    if (e.target.name === "search") {
    const search = e.target.value.toLowerCase();
    setSearch(search)
    }
  };
  return (
    <div>
      <SearchPerson 
        handleInputChange = {handleInputChange}
        search = {search}
      />
      <table className="table table-light">
      <tbody>
      <tr>
          <th>
            {people.map(person => <Person key={person.name} person={person} />)}
          </th>
      </tr>
      </tbody>
      </table>
    </div>
  )
}

export default People
