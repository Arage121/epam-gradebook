const appRoot = document.getElementById('app-root');
const header = document.createElement('h1')
header.textContent = 'Countries Search'
appRoot.appendChild(header)
const p = document.createElement('p')
p.textContent = 'Please choose type of search: '
const byRegionLabel = document.createElement('label');
const byRegionInput = document.createElement('input');
byRegionInput.type = 'radio';
byRegionInput.name = 'search-option';
byRegionInput.value = 'region';
byRegionLabel.appendChild(byRegionInput);
byRegionLabel.appendChild(document.createTextNode('By Region'));
const byLanguageLabel = document.createElement('label');
const byLanguageInput = document.createElement('input');
byLanguageInput.type = 'radio';
byLanguageInput.name = 'search-option';
byLanguageInput.value = 'language';
byLanguageLabel.appendChild(byLanguageInput);
byLanguageLabel.appendChild(document.createTextNode('By Language'));
const span = document.createElement('span')
span.appendChild(p)
p.appendChild(byRegionLabel)
p.appendChild(document.createElement('br'))
p.appendChild(byLanguageLabel)
byLanguageLabel.setAttribute('id','lng-lb')
appRoot.appendChild(span)
