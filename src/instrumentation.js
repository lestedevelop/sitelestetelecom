export async function register() {
    if (process.env.NEXT_RUNTIME !== "nodejs") return;

    const {startLestePlayChannelsSync} = await import("@/lib/lestePlayChannelsSync.mjs");
    startLestePlayChannelsSync();

    const {startBlogSync} = await import("@/lib/blogSync.mjs");
    startBlogSync();
}
