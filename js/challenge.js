let counter = document.querySelector('#counter');
let count = 0;
let isPaused = false;
setInterval(function timer(){
    if(!isPaused){
        count++;
        counter.textContent = `${count}`;
    }
}, 1000);



const getCount = () => count;
function increaseCount(){
    count++;
    counter.textContent = `${count}`;
}
function decreaseCount(){
    count--;
    counter.textContent = `${count}`;
}
function togglePause(){
    isPaused = !isPaused;
    minus.disabled = isPaused;
    plus.disabled = isPaused;
    like.disabled = isPaused;
    if(isPaused){
        pause.textContent = "resume";
    }else{
        pause.textContent = "pause";
    }
}
let lastLiked = 0;
let likeCount = 0;
function likeFunc(){
    const likes = document.querySelector(".likes");
    if(lastLiked === getCount()){
        likeCount++;
        likes.lastChild.textContent = `${lastLiked} has been liked ${likeCount} times.`;
    }else{
        likeCount = 1;
        let p = document.createElement("p");
        p.textContent = `${getCount()} has been liked ${likeCount} times.`;
        likes.appendChild(p);
    }

    lastLiked = getCount();
}


const minus = document.querySelector("#minus");
minus.addEventListener("click", decreaseCount);
const plus = document.querySelector("#plus");
plus.addEventListener("click", increaseCount);
const pause = document.querySelector("#pause");
pause.addEventListener("click", togglePause);
const like = document.querySelector("#heart");
like.addEventListener("click", likeFunc);
const submit = document.querySelector("#comment_form");
submit.addEventListener("submit", (e) => {
    e.preventDefault();
    const comment = document.createElement("p");
    comment.textContent = `${getCount()}: ` + e.target.comment_input.value;
    document.querySelector(".comments").appendChild(comment);
    submit.reset();
});