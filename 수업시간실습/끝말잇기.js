

while(word<5){
  let count=1;
  let first="비행기"
  let word=prompt(first);
  if(word[0]===first[first.length]){
    alert("딩동댕");
    first=prompt(word);
    count++;
  }
  else{
    alert("땡");
    count++;
  }
}

alert("문제 기회를 다 사용하셨습니다");
