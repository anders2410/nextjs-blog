import React from 'react';

type Post = {
    title: string;
    excerpt: string;
}

type Props = {
    post: Post;
}

const PostCard = ({ post }: Props) => {
    return (
        <div>
            {post.title}
            {post.excerpt}
        </div>
    );
};

export default PostCard;
