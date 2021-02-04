const tweetContainer = document.querySelector('#tweetsList')
const tweetForm = document.querySelector('#tweet')
tweetForm.addEventListener('submit', function (e) {
    e.preventDefault();
    const usernameInput = this.elements.username;
    const tweetInput = this.elements.tweet;
    addTweet(usernameInput.value, tweetInput.value);
    usernameInput.value = '';
    tweetInput.value = '';
})

const addTweet = (username, tweet) => {
    const newTweet = document.createElement('li');
    const bTag = document.createElement('b');
    bTag.append(username);
    newTweet.append(bTag);
    newTweet.append(` - ${tweet}`);
    tweetContainer.append(newTweet);
}