const root = document.getElementById('root'),
 tweetItemsdiv = document.getElementById('tweetItems'),
 modifyItemdiv = document.getElementById('modifyItem'),
 addBtn = document.getElementsByClassName('addTweet')[0],
 saveBtn = document.getElementById('saveModifiedItem'),
 cancelBtn = document.getElementById('cancelModification'),
 ul = document.getElementById('list'),
 alertMsg = document.getElementById('alertMessageText'),
 navDiv = document.getElementById('navigationButtons'),
 GoLikeBtn = document.createElement('button');
GoLikeBtn.textContent = 'Go to liked'
GoLikeBtn.classList.add('liked')
navDiv.appendChild(GoLikeBtn)
GoLikeBtn.style.display = 'none'
let liked = [],
 like = false,
 islike = false;
const t = 2000,
      a = 140;


alertMsg.classList.add('alert');

let count = localStorage.length;
let isTweetDiv = true;
let isModifyDiv = false;

addBtn.addEventListener('click', () => {
  hidden();
  window.location.hash = '#/add';
});
const tname = document.getElementById('modifyItemHeader')
tname.textContent = 'Add tweet'
window.addEventListener('hashchange', () => {
  if (window.location.hash === '') {
    cancelModification();
  }
});

saveBtn.addEventListener('click', saveItem);
cancelBtn.addEventListener('click', cancelModification);

function hidden() {
  if(tname.textContent === 'Edit tweet') {
    tname.textContent = 'Add tweet'
  }
  isTweetDiv = !isTweetDiv;
  isModifyDiv = !isModifyDiv;
  tweetItemsdiv.style.display = isTweetDiv ? 'block' : 'none';
  modifyItemdiv.style.display = isModifyDiv ? 'block' : 'none';
}
function hidden1() {
  if(tname.textContent === 'Add tweet') {
    tname.textContent = 'Edit tweet'
  }
  isTweetDiv = !isTweetDiv;
  isModifyDiv = !isModifyDiv;
  tweetItemsdiv.style.display = isTweetDiv ? 'block' : 'none';
  modifyItemdiv.style.display = isModifyDiv ? 'block' : 'none';
}

function onLiClick(event) {
  const tweetId = event.target.id;
  window.location.hash = `#/edit/:${tweetId}`
  hidden1();
}

function saveItem() {
  const data = document.getElementById('modifyItemInput').value;
  if (!data) {

    alertMsg.textContent = 'Error! You cannot tweet empty content.';
    root.appendChild(alertMsg);
    setTimeout(() => {
      root.removeChild(alertMsg);
    }, t);

  } else if (isDuplicate(data)) {

    alertMsg.textContent = 'Error! You cannot tweet a duplicate content.';
    root.appendChild(alertMsg);
    setTimeout(() => {
      root.removeChild(alertMsg);
    }, t);

  } else if (data.length > a) {

    alertMsg.textContent = 'Error! You cannot tweet more than 140 characters.';
    root.appendChild(alertMsg);
    setTimeout(() => {
      root.remveChild(alertMsg);
    }, t);

  } else {
    localStorage.setItem(count, data);
    count++;
    const li = document.createElement('li');
    const p = document.createElement('p')
    p.textContent = data;
    p.classList.add('p')
    li.appendChild(p)
    li.id = `${count}`;
    const removeBtn = document.createElement('button');
    removeBtn.classList.add('remove');
    removeBtn.textContent = 'Remove';
    removeBtn.addEventListener('click', () => {
      localStorage.removeItem(count-1);
      li.remove();
      count--;
      if(localStorage.length === 0){ 
        GoLikeBtn.style.display = 'none' 
    }
    });
    const likeBtn = document.createElement('button');
    likeBtn.classList.add('like');
    likeBtn.textContent = 'Like';
    likeBtn.addEventListener('click', (event) => {
      if(!islike){
      likeBtn.textContent = 'Unlike'
      islike = true
      like = true
      const tweetId = event.target.parentNode.id;
      alertMsg.textContent = `Hooray! You liked the tweet with id ${tweetId}!`;
      root.appendChild(alertMsg);
      setTimeout(() => {
      root.removeChild(alertMsg);
      }, t);
      const val = localStorage.getItem(localStorage.key(tweetId-1))
      isLiked(val);
    }else{
      likeBtn.textContent = 'Like'
      islike = false
      const tweetId = event.target.parentNode.id;
      alertMsg.textContent = `Sorry you no longer liked the tweet with id ${tweetId}`;
      root.appendChild(alertMsg);
      setTimeout(() => {
      root.removeChild(alertMsg);
      }, t);
      const val = localStorage.getItem(localStorage.key(tweetId-1))
      isUnliked(val)
    }
    })
    li.appendChild(removeBtn);
    li.appendChild(likeBtn);
    li.classList.add('li');
    ul.appendChild(li);
    ul.classList.add('ul');
    cancelModification();
    window.location.hash = '#/';
    p.addEventListener('click', onLiClick)
  }
}

function isLiked(val) {
  if (!liked.includes(val) && like === true && liked !== [] && localStorage.length !== 0) {
    GoLikeBtn.style.display = 'block'
    liked.push(val);
    console.log(liked);
    GoLikeBtn.addEventListener('click', likedTweets)
  }else{
    GoLikeBtn.style.display = 'none'
  }
}

function isUnliked(val){
  like = false
  liked.pop(val)
  console.log(liked)
}

function likedTweets(){
    if(liked !== []){
      window.location.hash = '#/liked'
      tweetItemsdiv.style.display = 'none'
      const div = document.createElement('div')
      const ul = document.createElement('ul')
      for(let i=0;i<liked.length;i++){
        const li = document.createElement('li')
        const r = document.createElement('button')
        r.innerText = 'Remove'
        r.classList.add('remove')
        const u = document.createElement('button')
        u.innerText = 'Unlike'
        u.classList.add('like')
        li.innerText = liked[i]
        li.appendChild(r)
        li.appendChild(u)
        ul.appendChild(li)
      }
      ul.classList.add('ul1')
      const backbtn = document.createElement('button')
      backbtn.innerText = 'back'
      backbtn.classList.add('back')
      backbtn.addEventListener('click', () => {
        tweetItemsdiv.style.display = 'block'
        div.style.display = 'none'
        window.location.hash = '#/'
      })
      ul.appendChild(backbtn)
      div.appendChild(ul)
      root.appendChild(div)
    }
}

function cancelModification() {
  document.getElementById('modifyItemInput').value = '';
  isTweetDiv = true;
  isModifyDiv = false;
  tweetItemsdiv.style.display = isTweetDiv ? 'block' : 'none';
  modifyItemdiv.style.display = isModifyDiv ? 'block' : 'none';
  window.location.hash = '#/';
}

function isDuplicate(data) {
  const localStorageLength = localStorage.length;
  for (let i = 0; i < localStorageLength; i++) {
    const val = localStorage.getItem(localStorage.key(i));
    if (val === data) {
      return true;
    }
  }
  return false;
}

window.onbeforeunload = function(){
  localStorage.clear()
}