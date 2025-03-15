import {getCollection} from "astro:content";

export async function blogPosts() {
    return (await getCollection("blog")).filter(
        (post) => post.data.wip !== true || !import.meta.env.PROD
    );
}