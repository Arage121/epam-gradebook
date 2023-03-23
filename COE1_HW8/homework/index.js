/* TASK 1 */

const td = document.querySelectorAll('td');
let selectedCell = [];
td.forEach((eachTd) => {
  eachTd.addEventListener('click', (e) => {
    if (e.target.id === '5') {
      td.forEach((element) => {
        if (!selectedCell.includes(element.id)) {
          element.style.backgroundColor = 'yellow';
        }
      });
    }
    if (e.target.id === '1' || e.target.id === '4' || e.target.id === '7') {
      e.target.bgColor = 'blue';
      selectedCell.push(e.target.id);
    } else {
      e.target.bgColor = 'yellow';
      selectedCell.push(e.target.id);
    }
  });
});

/* TASK 2 */

const inputBox = document.getElementById('input-box');

function activeWarningBox() {
  let warningDiv = document.getElementById('warning-box');
  let submitBtn = document.getElementById('submit-btn');
  let inputBox = document.getElementById('input-box');
  warningDiv.innerHTML = `<p>Type number does not follow format +380***********</p>`;
  submitBtn.disabled = true;
  warningDiv.classList = 'red';
  inputBox.style.border = '2px solid red';
}
function noWarningBox() {
  let warningDiv = document.getElementById('warning-box');
  let submitBtn = document.getElementById('submit-btn');
  let inputBox = document.getElementById('input-box');
  submitBtn.disabled = false;
  warningDiv.innerHTML = '';
  warningDiv.classList = '';
  inputBox.style.border = '2px solid black';
}
inputBox.onkeyup = function () {
  const val = document.getElementById('input-box').value;
  let inputLength = 4;
  let two = 2,
    three = 3,
    four = 4;
  if (val.length < inputLength) {
    if (val.length === 1 && val === '+') {
      noWarningBox();
    } else if (val.length === two && val === '+3') {
      noWarningBox();
    } else if (val.length === three && val === '+38') {
      noWarningBox();
    } else if (val.length === four && val === '+380') {
      noWarningBox();
    } else {
      activeWarningBox();
    }
  } else {
    if (val.slice(0, inputLength) !== '+380') {
      activeWarningBox();
    }
  }
};
function saveData() {
  let warningBox = document.getElementById('warning-box');
  warningBox.innerHTML = `<p>Data was successfully sent</p>`;
  warningBox.classList = 'green';
}
/* END TASK 2 */

/* START TASK 3: Your code goes here */

/* END TASK 3 */
