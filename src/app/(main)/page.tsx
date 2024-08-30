import PostsFeed from "../_components/posts/PostsFeed";
import PostUploader from "../_components/posts/PostUploader";

export default function Home() {
  return (
    <>
      <main className="">
        <div>
          <PostUploader />
          <PostsFeed />
        </div>
      </main>
    </>
  );
}
