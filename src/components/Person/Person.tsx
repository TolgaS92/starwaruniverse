import { Result } from '../../types';
import { Link } from 'react-router-dom';

interface PersonProps {
  person: Result
}

function Person({ person }: PersonProps) {
  return<div className="mb-5 mt-5 text-center d-flex justify-content-center">
  <div className="card col-4">
    <div className="card-header">
      {person.name}
    </div>
    <ul className="list-group list-group-flush">
      <li className="list-group-item">Height : {person.height} cm</li>
      <li className="list-group-item">Mass : {person.mass} kg</li>
      <li className="list-group-item">Hair Color : {person.hair_color}</li>
      <li className="list-group-item">Skin Color : {person.skin_color}</li>
      <li className="list-group-item">Eye Color : {person.eye_color}</li>
      <li className="list-group-item">BoD : {person.birth_year}</li>
      <li className="list-group-item">Gender : {person.gender}</li>
      Films : 
      {person.films.map((movie, index) => {
        return<li className="list-group" key= {index}>
        <Link to="/starwaruniverse">Movie {index+1 } Click for details!</Link>
        </li>
      })}
    </ul>
    </div>
  </div>
}

export default Person
