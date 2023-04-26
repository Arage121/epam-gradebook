import React, { useState } from 'react';
import '../styles/main.css';
import { FcSearch } from 'react-icons/fc';
import data from '../data/data.json';
import Details from './Details';
import Statistics from './Statistics';


const Main = () => {
  const [tableRows, setTableRows] = useState(data);
  const [activeButton, setActiveButton] = useState('');
  const [sortOrder, setSortOrder] = useState('asc');
  const [selectedRow, setSelectedRow] = useState(null);
  const [showDetails, setShowDetails] = useState(false);
  const [DetailId, setDetailId] = useState(0);

  const handleAll = () => {
    setTableRows(data);
    setActiveButton('all');
  };

  const handlePass = () => {
    const passedData = data.filter(({ e_grade, r_grade }) => ((0.6 * e_grade + 0.4 * r_grade) > 4));
    setTableRows(passedData);
    setActiveButton('pass');
  };

  const handleFail = () => {
    const failedData = data.filter(({ e_grade, r_grade }) => ((0.6 * e_grade + 0.4 * r_grade) <= 4));
    setTableRows(failedData);
    setActiveButton('fail');
  };

  const handleAZ = () => {
    setActiveButton(sortOrder === 'asc' ? 'az' : 'za');
    const sortedData = tableRows.sort((a, b) => {
      if (sortOrder === 'asc') {
        return a.name.localeCompare(b.name);
      } else {
        return b.name.localeCompare(a.name);
      }
    });
    setTableRows(sortedData);
    setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
  };


  const handle1to10 = () => {
    setActiveButton(sortOrder === 'asc' ? '1to10' : '10to1');
    const sortedData = tableRows.sort((a, b) => {
      if (sortOrder === 'asc') {
        return (0.6 * a.e_grade + 0.4 * a.r_grade) - (0.6 * b.e_grade + 0.4 * b.r_grade);
      } else {
        return (0.6 * b.e_grade + 0.4 * b.r_grade) - (0.6 * a.e_grade + 0.4 * a.r_grade);
      }
    });
    setTableRows(sortedData);
    setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
  };

  const handleSearch = event => {
    const { value } = event.target;
    const filteredData = data.filter(({ name }) => name.toLowerCase().startsWith(value.toLowerCase()));
    setTableRows(filteredData);
    setActiveButton('');
  };

  const handleDetailsClick = (event) => {
    event.stopPropagation(); // Prevent the row click event from firing
    setShowDetails(!showDetails);
    const id = event.target.id;
    setDetailId(id);
  };

  return (
    <>
      <div>

        <button className={activeButton === 'all' ? 'active' : ''} onClick={handleAll}>
          All
        </button>

        <button className={activeButton === 'pass' ? 'active' : ''} onClick={handlePass}>
          Passed
        </button>

        <button className={activeButton === 'fail' ? 'active' : ''} onClick={handleFail}>
          Failed
        </button>

        <button className={activeButton === 'az' || activeButton === 'za' ? 'active' : ''} onClick={handleAZ}>
          {activeButton === 'az' ? 'Z-A' : 'A-Z'}
        </button>

        <button className={activeButton === '1to10' || activeButton === '10to1' ? 'active' : ''} onClick={handle1to10}>
          {activeButton === '1to10' ? '10-1' : '1-10'}
        </button>

        <FcSearch id="icon" />

        <input className="inp" type="text" placeholder="Search here..." onChange={handleSearch} />
        
        <button id="btn">Download</button>
      </div>
      <table name='grades'>
        <thead>
          <tr>
            <th>No</th>
            <th>Name</th>
            <th>Ticket's Number</th>
            <th>Rating Grade</th>
            <th>Exam Grade</th>
            <th>Final Grade</th>
            <th>Status</th>
            <th>Details</th>
          </tr>
        </thead>
        <tbody id="body">
        {tableRows.length > 0 &&
          tableRows.map(({ id, name, t_no, r_grade, e_grade, d_btn }) => {
            const fin_grade = Math.round(0.6 * e_grade + 0.4 * r_grade);
            const status = fin_grade > 4 ? 'Passed' : 'Failed';
            return (
              <tr key={id} onClick={() => setSelectedRow(id)} className={ selectedRow === id ? 'rowcol' : 'whiterow' }>
                <td>{id}</td>
                <td className={ selectedRow === id ? 'uppercase' : 'none' }>{name}</td>
                <td>{t_no}</td>
                <td>{r_grade}</td>
                <td>{e_grade}</td>
                <td>{fin_grade}</td>
                <td>{status}</td>
                <td>
                  <button id={id} className='tbtn' onClick={handleDetailsClick}>{d_btn}</button>
                </td>
              </tr>
              );
         })
         }
        </tbody>
      </table>
      {showDetails && (
        <Details id={DetailId} value={data} onClose={handleDetailsClick}/>
)}
      <Statistics data={data}/>
    </>
  );
};

export default Main;
