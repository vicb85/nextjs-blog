import getPosts from "@/services/getPosts";
import Link from "../../node_modules/next/link";

const HomePage = () => {
    const posts = getPosts();

      return (
        <div className="flex flex-col space-y-2">
          {posts.map(post => (
            <div>
              <Link href={post.slug}>
                <h2>{post.title}</h2>
              </Link><p>{post.description}</p>
            </div>

          ))}
        </div>
      );
};

export default HomePage;
