import Link from "next/dist/client/link";

function Blog({ posts }) {
    return (
        <>
            <Link href='/'>
                <a>Home</a>    
            </Link>
            <h1>Blog Page</h1>
            {posts.map((post) => {
                return (
                    <div key={post.id}>
                        <h2>
                            {post.id} {post.title}    
                        </h2>    
                        <hr />
                    </div>
                    
                )
            })}
        </>
    )
}

export default Blog;

export async function getStaticProps() {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts')
    const data = await response.json()

    return {
        props: {
            posts: data.slice(0,3)
        }
    }
}