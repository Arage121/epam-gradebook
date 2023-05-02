import React from 'react';
import '../styles/details.css';
import {GrClose} from 'react-icons/gr';

const Details = (props) => {
  const id = props.id;
  const onClose = props.onClose;
  const data = props.value;
  const val = data.filter((item)=> item.id===id);
  const { name, t_no, t_topic, r_grade, e_grade } = val[0];
  const fin_grade = Math.round(0.6 * e_grade + 0.4 * r_grade);
  const status = fin_grade > 4 ? 'Passed' : 'Failed';
  return (
    <>
      <div className="popup">
      { val.length>0 && 
          <div className="popup-content">
            <h2>Student Details</h2><br/>
            <p>Name: {name}</p>
            <p>Ticket's Number: {t_no}</p>
            {t_topic && <p>Ticket's Topic: {t_topic}</p>}
            <p>Rating Grade: {r_grade}</p>
            <p>Exam Grade: {e_grade}</p>
            <p>Final Grade: {fin_grade}</p>
            <p>Status: {status}</p>
            <button className="close-button" onClick={onClose}><GrClose id='gr'></GrClose></button>
          </div>
      }
      </div>
    </>
  );
};

export default Details;
