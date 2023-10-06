import getPosts from "@/services/getPosts";

export async function GET(request: Request) {
    const posts = getPosts();

    return Response.json(posts);
}