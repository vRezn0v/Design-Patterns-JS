const Post = title => ({
    title
})


/**
 * Here is the Observable class for our example
 * Suppose, a YouTube channel
 * The channel maintains a list of the subscribers
 * and notifies them whenever a new post is created
 */
class Channel {
    constructor() {
        this._posts = []
        this._subscribers = []
    }
    subscribe(subscriber) {
        if (!this._subscribers.includes(subscriber)) {
            this._subscribers.push(subscriber)
            console.log(subscriber.name + " subscribed to the channel.")
            console.log("---")
        }
    }
    createPost(post) {
        this._posts.push(post)
        this._subscribers.forEach(subscriber => {
            subscriber.notify(post)
        });
        console.log(`${this._subscribers.length} users notified.`)
        console.log("---")
    }
}

/**
 * And here is an Observer, the end user
 * Who gets notified whenever a channel makes a new post
 */
class Subscriber {
    constructor(name) {
        this.name = name
    }
    notify(post) {
        console.log(`${this.name}: Example Channel created a new post: ${post.title}`)
    }
}

const User1 = new Subscriber("Wez")
const User2 = new Subscriber("Bez")
const User3 = new Subscriber("Rez")

const exampleChannel = new Channel("Example Channel")

exampleChannel.subscribe(User1)
exampleChannel.createPost(Post("Is this a post?"))
exampleChannel.subscribe(User2)
exampleChannel.createPost(Post("Yes, this is a post"))
exampleChannel.subscribe(User3)

exampleChannel.createPost(Post("Everyone's subscribed by now, so everyone recieves the post"))

/**
 * Generally, we see use of this pattern with Redux, whenever the Store is updated, the Components consuming the provider get updated of changes
 * or in our day to day life, anything that involves a subscription, be in newsletters, youtube channels, etc
 */