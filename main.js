class Comment {
    constructor(text) {
        /* конструктор класса. Определяет сам класс. Аналог __init__ класса в Python */
        this.text = text
        this.votesQty = 0
    }

    upvote() {
        this.votesQty += 1
    }

    static mergeComments(first, second) {
        return `${first} ${second}`
    }
}

const firstComment = new Comment('first comment')

console.log(Comment.prototype === firstComment.__proto__)