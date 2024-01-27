const { connect, savePost, disconnect} = require("./db");
const Post = require("../model/postModel");

//jest 3 functions
//describe, test(), expect()
beforeALL(async () => {
    return await connect();
});

describe("Post Test Suite",  () => {
    test('as a user I want to post a post', async() => {
        const post = new Post({
            title: 'A tree grows in Brooklyn',
            post: 'It sure does',
        });
        const newPost = await savePost(post);

        expect(newPost.title).toEqual('A tree grows in Brooklyn');
        expect(newPost.post).toBe('It sure does');
    });

afterALL(async () => {
    return await disconnect();
});
});