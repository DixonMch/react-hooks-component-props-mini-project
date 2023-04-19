import React from "react";
import blogData from "../data/blog";

function Header(props) {
  return (
    <header>
      <h1>{props.name}</h1>
    </header>
  );
}

function About(props) {
  const imageSrc = props.image ? props.image : "https://via.placeholder.com/215";
  return (
    <aside>
      <img src={imageSrc} alt="blog logo" />
      <p>{props.about}</p>
    </aside>
  );
}

function ArticleList(props) {
  const articles = props.posts.map((post) => (
    <Article
      key={post.id}
      title={post.title}
      date={post.date ? post.date : "January 1, 1970"}
      preview={post.preview}
    />
  ));
  return <main>{articles}</main>;
}

function Article(props) {
  return (
    <article>
      <h3>{props.title}</h3>
      <small>{props.date}</small>
      <p>{props.preview}</p>
    </article>
  );
}

function App() {
  return (
    <div className="App">
      <Header name={blogData.name} />
      <About image={blogData.image} about={blogData.about} />
      <ArticleList posts={blogData.posts} />
    </div>
  );
}

export default App;

