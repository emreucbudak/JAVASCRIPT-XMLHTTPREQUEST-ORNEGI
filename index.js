function getComments (url,id) {
  const b = prepareUrl(url,id);
  const a = new XMLHttpRequest();
  a.onreadystatechange = () => {
    if(a.readyState === 4 && a.status === 200) {
      console.log(JSON.parse(a.responseText));
    }

  }
  a.open("GET",b);
  a.send();
}
function prepareUrl (url,id) {
  if (id === null ) {
    return url;
  }
  else {
    return `${url}?postId=${id}`;
  }
}
getComments("https://jsonplaceholder.typicode.com/comments",1);
