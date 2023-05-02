import React, { useState, useEffect, useRef, useMemo } from 'react';
import '../styles/statistics.css';
import Chart from 'chart.js/auto';

const Statistics = ({ data }) => {
  const [showStats, setShowStats] = useState(false);
  const canvasRef = useRef(null);

  // Compute the statistics
  const totalStudents = data.length;
  const totalFinalGrade = data.reduce((acc, curr) => acc + (0.6 * parseInt(curr.e_grade) + 0.4 * parseInt(curr.r_grade)), 0);
  const avgFinalGrade = (totalFinalGrade / totalStudents);
  const maxFinalGrade = Math.max(...data.map(student => 0.6 * parseInt(student.e_grade) + 0.4 * parseInt(student.r_grade)));
  const minFinalGrade = Math.round(Math.min(...data.map(student => 0.6 * parseInt(student.e_grade) + 0.4 * parseInt(student.r_grade))));

  const gradeCount = useMemo(() => {
    const obj = {};
    data.forEach(student => {
      const grade = Math.round(0.6 * parseInt(student.e_grade) + 0.4 * parseInt(student.r_grade));
      if (grade in obj) {
        obj[grade]++;
      } else {
        obj[grade] = 1;
      }
    });
    return obj;
  }, [data]);

  // Helper function to toggle the visibility of the statistics
  const handleToggle = () => {
    setShowStats(!showStats);
  }

  useEffect(() => {
    if (showStats) {
      const chartRef = canvasRef.current.getContext('2d');
      new Chart(chartRef, {
        type: 'pie',
        data: {
          labels: Object.keys(gradeCount),
          datasets: [{
            data: Object.values(gradeCount),
            backgroundColor: [
              '#FF292B',
              '#FF297D',
              '#FFFF5C',
              '#EE82EE',
              '#82FF7D',
              '#00FFFF',
              '#FF7800'
              // add more colors as needed
            ]
          }]
        },
        options: {
          responsive: true,
          animation: {
            animateScale: true
          }
        }
      });
    }
  }, [showStats, gradeCount]);
  

  // Render the statistics
  return (
    <div className='div'>
      <button className="statistics-button" onClick={handleToggle}>
        {showStats ? 'Hide' : 'Show'} Statistics
      </button>
      {showStats && (
        <div className="stats-container">
          <ul className="stats-list">
          <p className="stats-heading">No. of student with grade:</p>
            {Object.keys(gradeCount).map(grade => (
              <li className="stats-item-li" key={grade}>
                {gradeCount[grade]} - {grade} 
              </li>
            ))}
          </ul>
          <p className='stats-heading'>Other stats:</p>
          <p className="stats-item">Average Final Grade: {avgFinalGrade.toFixed(2)}<br /><br />
            Max Final Grade: {maxFinalGrade}<br /><br />
            Min Final Grade: {minFinalGrade}<br /><br />
            Total Number of Students: {totalStudents}</p>
        </div>
      )}

      {
        showStats && (
          <div className='graph'>
            <canvas ref={canvasRef}></canvas>
          </div>
      )}
    </div>
  );  
};

export default Statistics;
