import { Result } from '../../types';

interface PersonProps {
  person: Result
}

function Person({ person }: PersonProps) {
  return<div className="mb-5 mt-5">
    <li> Name : {person.name}</li>
    <li> height : {person.height}</li>
    <li> mass : {person.mass}</li>
    <li> hair_color : {person.hair_color}</li>
    <li> skin_color : {person.skin_color}</li>
    <li> eye_color : {person.eye_color}</li>
    <li> birth_year : {person.birth_year}</li>
    <li> gender : {person.gender}</li>
    <li> homeworld : {person.homeworld}</li>
    <li> films : {person.films}</li>
    <li> species : {person.species}</li>
    <li> vehicles : {person.vehicles}</li>
    <li> starships : {person.starships}</li>
    <li> created : {person.created}</li>
    <li> edited : {person.edited}</li>
    <li> url : {person.url}</li>
    </div>
}

export default Person
