const appRoot = document.getElementById('app-root');

let selectedList;
let isSortByCountry = false;
let isSortByArea = false;
const tableColumns = [
  'Country name',
  'Capital',
  'World Region',
  'Language',
  'Area',
  'Flag',
];
const regions = externalService.getRegionsList();
const languages = externalService.getLanguagesList();
const h1 = document.createElement('h1');
h1.innerText = 'Countries Search';
appRoot.appendChild(h1);

const searchBox = document.createElement('div');
searchBox.setAttribute('class', 'searchBox');

let p = document.createElement('p');
p.innerText = 'Pleasee choose type of search';
searchBox.appendChild(p);

const radioBtnBox = document.createElement('div');
radioBtnBox.setAttribute('id', 'radioBtnBox');

const regionRadio = document.createElement('input');
regionRadio.setAttribute('type', 'radio');
regionRadio.setAttribute('onclick', 'byRegion()');
regionRadio.setAttribute('name', 'radioBtn');

radioBtnBox.appendChild(regionRadio);

const regionLabel = document.createElement('label');
regionLabel.innerText = 'By Region';
radioBtnBox.appendChild(regionLabel);

const br = document.createElement('br');
radioBtnBox.appendChild(br);

const languageRadio = document.createElement('input');
languageRadio.setAttribute('type', 'radio');
languageRadio.setAttribute('onclick', 'byLanguage()');
languageRadio.setAttribute('name', 'radioBtn');

const languageLabel = document.createElement('label');
languageLabel.innerText = 'By Language';

radioBtnBox.appendChild(languageRadio);
radioBtnBox.appendChild(languageLabel);

searchBox.appendChild(radioBtnBox);

const queryBox = document.createElement('div');
queryBox.setAttribute('class', 'queryBox');

p = document.createElement('p');
p.innerText = 'Please choose search query ';

queryBox.appendChild(p);

let select = document.createElement('select');
select.disabled = true;
let option = document.createElement('option');
option.innerText = 'Select Value';
option.selected = true;
select.appendChild(option);
queryBox.appendChild(select);

appRoot.appendChild(searchBox);
appRoot.appendChild(queryBox);

function byRegion() {
  isSelectedBy = 'Region';
  select.disabled = false;
  select.innerHTML = '';
  option = document.createElement('option');
  option.innerText = 'Select Value';
  select.appendChild(option);
  select.setAttribute('onchange', 'showRegionTable()');
  select.setAttribute('id', 'region-select');

  regions.forEach((country) => {
    option = document.createElement('option');
    option.value = country;
    option.innerText = country;
    select.appendChild(option);
  });
}

function byLanguage() {
  isSelectedBy = 'Language';
  select.disabled = false;
  select.innerHTML = '';
  option = document.createElement('option');
  option.innerText = 'Select Value';
  select.appendChild(option);
  select.setAttribute('onchange', 'showLanguageTable()');
  select.setAttribute('id', 'language-select');

  languages.forEach((language) => {
    option = document.createElement('option');
    option.value = language;
    option.innerText = language;
    select.appendChild(option);
  });
}

function showRegionTable() {
  const selectBox = document.getElementById('region-select');
  const selectedValue = selectBox.options[selectBox.selectedIndex].value;
  const countryByRegion = externalService.getCountryListByRegion(selectedValue);
  selectedList = countryByRegion;
  const table = document.getElementsByTagName('table')[0];
  if (table) {
    appRoot.removeChild(table);
  }
  showTable(countryByRegion);
}

function showLanguageTable() {
  const selectBox = document.getElementById('language-select');
  const selectedValue = selectBox.options[selectBox.selectedIndex].value;
  const countryByLanguage =
    externalService.getCountryListByLanguage(selectedValue);
  selectedList = countryByLanguage;
  const table = document.getElementsByTagName('table')[0];
  if (table) {
    appRoot.removeChild(table);
  }
  showTable(countryByLanguage);
}

function showTable(val) {
  let table = document.getElementsByTagName('table')[0];
  if (table) {
    appRoot.removeChild(table);
  }
  table = document.createElement('table');
  let tr = document.createElement('tr');
  let td = document.createElement('td');
  tableColumns.forEach((column) => {
    const th = document.createElement('th');
    if (column === 'Country name') {
      th.setAttribute('onclick', 'sortByCountry()');
      th.setAttribute('class', 'sort-country');

      th.innerHTML = `${column}<span>&#8593;</span>`;
    } else if (column === 'Area') {
      th.setAttribute('onclick', 'sortByArea()');
      th.setAttribute('class', 'sort-country');
      th.innerHTML = `${column}<span>&#8593;</span>`;
    } else {
      th.innerHTML = column;
    }
    tr.appendChild(th);
  });
  table.appendChild(tr);

  val.forEach((element) => {
    tr = document.createElement('tr');
    td = document.createElement('td');
    td.innerText = element.name;
    tr.appendChild(td);

    td = document.createElement('td');
    td.innerText = element.capital;
    tr.appendChild(td);

    td = document.createElement('td');
    td.innerText = element.region;
    tr.appendChild(td);

    let allLanguage = [];
    Object.keys(element.languages).forEach((lang) => {
      td = document.createElement('td');

      allLanguage.push(element.languages[lang]);
    });
    td.innerText = allLanguage.join(',');
    tr.appendChild(td);

    td = document.createElement('td');
    td.innerText = element.area;
    tr.appendChild(td);

    td = document.createElement('td');
    let img = document.createElement('img');
    img.setAttribute('src', element.flagURL);
    td.appendChild(img);
    tr.appendChild(td);

    table.appendChild(tr);
  });
  appRoot.appendChild(table);
}

function compareByCountry(a, b) {
  let minusOne = -1;
  if (a.name > b.name) {
    let val = isSortByCountry ? 1 : minusOne;
    return val;
  } else {
    let val = isSortByCountry ? minusOne : 1;
    return val;
  }
}
function compareByArea(a, b) {
  let minusOne = -1;
  if (a.area > b.area) {
    let val = isSortByArea ? 1 : minusOne;
    return val;
  } else {
    let val = isSortByArea ? minusOne : 1;
    return val;
  }
}
function sortByCountry() {
  isSortByCountry = !isSortByCountry;
  console.log(selectedList);
  selectedList.sort(compareByCountry);
  showTable(selectedList);
  let spanVal = document.getElementsByTagName('span')[0];
  if (isSortByCountry) {
    spanVal.innerHTML = '&#8595;';
  } else {
    spanVal.innerHTML = '&#8593';
  }
}
function sortByArea() {
  isSortByArea = !isSortByArea;
  let spanVal = document.getElementsByTagName('span')[1];
  selectedList.sort(compareByArea);
  showTable(selectedList);
  if (isSortByCountry) {
    spanVal.innerHTML = '&#8595;';
  } else {
    spanVal.innerHTML = '&#8593';
  }
}
