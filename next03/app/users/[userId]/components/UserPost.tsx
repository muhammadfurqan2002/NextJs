type Props = {
  promise: Promise<Post[]>;
};

export default async function UserPost({ promise }: Props) {
  const posts = await promise;

  const content = posts.map((post, index) => {
    return (
      <article key={index}>
        <h2>{post.title}</h2>
        <p>{post.body}</p>
        <br />
      </article>
    );
  });
  return content;
}
