import * as React from 'react'

export default class MatchList extends React.Component {
  render() {
    return (
      <div className='matchListBox'>
        <ul className='matchesRow'>
          <li className='match'>
            <img src="images/stella.jpg" alt="match"/>
            <h1>Stella</h1>
          </li>
        </ul>
      </div>
    )
  }
}