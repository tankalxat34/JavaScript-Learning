const userProfile = {
    firstname: 'Alexander',
    commentsQty: 23,
    hasSignedAgreement: false
}

/* 
Берем свойства с именами такими то из значения, которое будет передано в аргумент функции

На основе указанных свойств из будут взяты значения этих свойств из переданного объекта, которые могут использоваться внутри функции
*/
const userInfo = ({ firstname, commentsQty }) => {
    if (!commentsQty) {
        return `User ${firstname} has no comments`
    }
    return `User ${firstname} has ${commentsQty} comments`
}

console.log(userInfo(userProfile)) // 'User Alexander has 23 comments'