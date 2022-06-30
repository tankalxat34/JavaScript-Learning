function rnd(start, end) {
    /* простой генератор псевдослучайных чисел */
    return Date.now() % end + start;
}

console.log(rnd(0, 10))

function newPost(post, addedAt = Date()) {
    return {
        ...post,
        addedAt,
    }
}

const firstPost = {
    id: 1,
    author: 'Bogdan'
}

console.log(newPost(firstPost))