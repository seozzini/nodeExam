// 10_async_await.js
async function getPostInfo() {
  let postList = await fetch('https://jsonplaceholder.typicode.com/posts')
    .then((res) => res.json())
    .catch((err) => console.log(err));

  let postId = postList[0].id;

  let post = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
    .then((res) => res.json())
    .catch((err) => console.log(err));

  let commentList = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${postId}/comments`
  )
    .then((res) => res.json())
    .catch((err) => console.log(err));

  post.comments = commentList;
  console.log(post);
}

getPostInfo();
console.log('코드 종료');
