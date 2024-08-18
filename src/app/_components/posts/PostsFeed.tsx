import Post from "./Post";
export default function PostsFeed() {
  return (
    <div className="h-full p-5 bg-background text-foreground max-w-lg ">
      <Post
        username="Hamza Alhaj"
        UserImage="null"
        id={1}
        content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati similique quidem eos sed quia perspiciatis, voluptatem quisquam architecto aliquid blanditiis!"
        image={null}
        createdAt={new Date()}
        updatedAt={new Date()}
        userId={1}
      />
    </div>
  );
}
