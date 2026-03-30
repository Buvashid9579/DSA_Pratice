/*# Twitter

Given an `app.js` file and a database file `twitterClone.db` consisting of five tables `user`, `follower`, `tweet`, `reply`, and `like`.

Write APIs to perform operations on the tables `user`, `follower`, `tweet`, `reply`, and `like` containing the following columns,

**User Table**

| Column   | Type    |
| -------- | ------- |
| user_id  | INTEGER |
| name     | TEXT    |
| username | TEXT    |
| password | TEXT    |
| gender   | TEXT    |

**Follower Table**

| Column              | Type    |
| ------------------- | ------- |
| `follower_id`       | INTEGER |
| `follower_user_id`  | INTEGER |
| `following_user_id` | INTEGER |

Here, if user1 follows user2 then,

`follower_user_id` is the user ID of user1 and `following_user_id` is the user ID of user2.

**Tweet Table**

| Column    | Type     |
| --------- | -------- |
| tweet_id  | INTEGER  |
| tweet     | TEXT     |
| user_id   | INTEGER  |
| date_time | DATETIME |

**Reply Table**

| Column    | Type     |
| --------- | -------- |
| reply_id  | INTEGER  |
| tweet_id  | INTEGER  |
| reply     | TEXT     |
| user_id   | INTEGER  |
| date_time | DATETIME |

**Like Table**

| Column    | Type     |
| --------- | -------- |
| like_id   | INTEGER  |
| tweet_id  | INTEGER  |
| user_id   | INTEGER  |
| date_time | DATETIME |

#### Sample Valid User Credentials

```
{
  "username":"JoeBiden",
  "password":"biden@123"
}
```

<Section id="section1" >

### API 1

#### Path: `/register/`

#### Method: `POST`

**Request**

```
{
  "username": "adam_richard",
  "password": "richard_567",
  "name": "Adam Richard",
  "gender": "male"
}
```

- **Scenario 1**

  - **Description**:

    If the username already exists

  - **Response**
    - **Status code**
      ```
      400
      ```
    - **Body**
      ```
      User already exists
      ```

- **Scenario 2**

  - **Description**:

    If the registrant provides a password with less than 6 characters

  - **Response**
    - **Status code**
      ```
      400
      ```
    - **Body**
      ```
      Password is too short
      ```

- **Scenario 3**

  - **Description**:

    Successful registration of the registrant

  - **Response**

    - **Status code**

      ```
      200
      ```

    - **Body**
      ```
      User created successfully
      ```

</Section>

<Section id="section2">

### API 2

#### Path: `/login/`

#### Method: `POST`

**Request**

```
{
  "username":"JoeBiden",
  "password":"biden@123"
}
```

- **Scenario 1**

  - **Description**:

    If the user doesn't have a Twitter account

  - **Response**
    - **Status code**
      ```
      400
      ```
    - **Body**
      ```
      Invalid user
      ```

- **Scenario 2**

  - **Description**:

    If the user provides an incorrect password

  - **Response**
    - **Status code**
      ```
      400
      ```
    - **Body**
      ```
      Invalid password
      ```

- **Scenario 3**

  - **Description**:

    Successful login of the user

  - **Response**

    Return the JWT Token

    ```
    {
      "jwtToken": "ak2284ns8Di32......"
    }
    ```

</Section>

<Section id="authToken">

### Authentication with JWT Token

Write a middleware to authenticate the JWT token.

- **Scenario 1**

  - **Description**:

    If the JWT token is not provided by the user or an invalid JWT token is provided

  - **Response**
    - **Status code**
      ```
      401
      ```
    - **Body**
      ```
      Invalid JWT Token
      ```

- **Scenario 2**
  - After successful verification of JWT token, proceed to next middleware or handler

</Section>

<Section id="section3">

### API 3

#### Path: `/user/tweets/feed/`

#### Method: `GET`

#### Description:

Returns the latest tweets of people whom the user follows. Return 4 tweets at a time

#### Response

```
 [
   {
      username: "SrBachchan",
      tweet: "T 3859 - do something wonderful, people may imitate it ..",
      dateTime: "2021-04-07 14:50:19"
   },
   ...
 ]
```

</Section>

<Section id="section4">

### API 4

#### Path: `/user/following/`

#### Method: `GET`

#### Description:

Returns the list of all names of people whom the user follows

#### Response

```
[
  {
    "name": "Narendra Modi"
  },
  ...
]
```

</Section>

<Section id="section5">

### API 5

#### Path: `/user/followers/`

#### Method: `GET`

#### Description:

Returns the list of all names of people who follows the user

#### Response

```
[
  {
    "name": "Narendra Modi"
  },
  ...
]
```

</Section>

<Section id="section6">

### API 6

#### Path: `/tweets/:tweetId/`

#### Method: `GET`

- **Scenario 1**

  - **Description**:

    If the user requests a tweet other than the users he is following

  - **Response**
    - **Status code**
      ```
      401
      ```
    - **Body**
      ```
      Invalid Request
      ```

- **Scenario 2**

  - **Description**:

    If the user requests a tweet of the user he is following, return the tweet, likes count, replies count and date-time

  - **Response**
    ```
    {
       "tweet": "T 3859 - do something wonderful, people may imitate it ..",
       "likes": 3,
       "replies": 1,
       "dateTime": "2021-04-07 14:50:19"
    }
    ```

</Section>

<Section id="section7">

### API 7

#### Path: `/tweets/:tweetId/likes/`

#### Method: `GET`

- **Scenario 1**

  - **Description**:

    If the user requests a tweet other than the users he is following

  - **Response**
    - **Status code**
      ```
      401
      ```
    - **Body**
      ```
      Invalid Request
      ```

- **Scenario 2**

  - **Description**:

    If the user requests a tweet of a user he is following, return the list of usernames who liked the tweet

  - **Response**
    ```
    {
       "likes": ["albert", ]
    }
    ```

</Section>

<Section id="section8">

### API 8

#### Path: `/tweets/:tweetId/replies/`

#### Method: `GET`

- **Scenario 1**

  - **Description**:

    If the user requests a tweet other than the users he is following

  - **Response**
    - **Status code**
      ```
      401
      ```
    - **Body**
      ```
      Invalid Request
      ```

- **Scenario 2**

  - **Description**:

    If the user requests a tweet of a user he is following, return the list of replies.

  - **Response**

        ```
        {
           "replies": [
             {
               "name": "Narendra Modi",
               "reply": "When you see it.."
              },
            ...]
        }
        ```

    </Section>

<Section id="section9">

### API 9

#### Path: `/user/tweets/`

#### Method: `GET`

#### Description:

Returns a list of all tweets of the user

#### Response

```
[
  {
    "tweet": "Ready to don the Blue and Gold",
    "likes": 3,
    "replies": 4,
    "dateTime": "2021-4-3 08:32:44"
  },
  ...
]
```

</Section>

<Section id="section10">

### API 10

#### Path: `/user/tweets/`

#### Method: `POST`

#### Description:

Create a tweet in the tweet table

#### Request

```
{
   "tweet": "The Mornings..."
}
```

#### Response

```
Created a Tweet
```

</Section>

<Section id="section11">

### API 11

#### Path: `/tweets/:tweetId/`

#### Method: `DELETE`

- **Scenario 1**

  - **Description**:

    If the user requests to delete a tweet of other users

  - **Response**
    - **Status code**
      ```
      401
      ```
    - **Body**
      ```
      Invalid Request
      ```

- **Scenario 2**

  - **Description**:

    If the user deletes his tweet

  - **Response**
    ```
    Tweet Removed
    ```

</Section>

<br/>

Use `npm install` to install the packages.

**Export the express instance using the default export syntax.**

**Use Common JS module syntax.**
*/



const express = require('express')
const sqlite3 = require('sqlite3')
const {open} = require('sqlite')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const path = require('path')

const app = express()
app.use(express.json())

const dbPath = path.join(__dirname, 'twitterClone.db')
let db = null

const initializeDBAndServer = async () => {
  try {
    db = await open({
      filename: dbPath,
      driver: sqlite3.Database,
    })
    app.listen(3000, () =>
      console.log('Server Running at http://localhost:3000/'),
    )
  } catch (e) {
    console.log(`DB Error: ${e.message}`)
  }
}
initializeDBAndServer()

/* ================= JWT AUTH MIDDLEWARE ================= */

const authenticateToken = (request, response, next) => {
  const authHeader = request.headers['authorization']
  if (authHeader === undefined) {
    response.status(401).send('Invalid JWT Token')
  } else {
    const jwtToken = authHeader.split(' ')[1]
    jwt.verify(jwtToken, 'SECRET_KEY', (error, payload) => {
      if (error) {
        response.status(401).send('Invalid JWT Token')
      } else {
        request.userId = payload.userId
        next()
      }
    })
  }
}

/* ================= API 1 : REGISTER ================= */

app.post('/register/', async (request, response) => {
  const {username, password, name, gender} = request.body

  const userQuery = `
    SELECT * FROM user WHERE username = ?
  `
  const dbUser = await db.get(userQuery, [username])

  if (dbUser !== undefined) {
    response.status(400).send('User already exists')
  } else if (password.length < 6) {
    response.status(400).send('Password is too short')
  } else {
    const hashedPassword = await bcrypt.hash(password, 10)
    const createUserQuery = `
      INSERT INTO user (username, password, name, gender)
      VALUES (?, ?, ?, ?)
    `
    await db.run(createUserQuery, [username, hashedPassword, name, gender])
    response.send('User created successfully')
  }
})

/* ================= API 2 : LOGIN ================= */

app.post('/login/', async (request, response) => {
  const {username, password} = request.body

  const userQuery = `
    SELECT * FROM user WHERE username = ?
  `
  const dbUser = await db.get(userQuery, [username])

  if (dbUser === undefined) {
    response.status(400).send('Invalid user')
  } else {
    const isPasswordMatched = await bcrypt.compare(password, dbUser.password)
    if (!isPasswordMatched) {
      response.status(400).send('Invalid password')
    } else {
      const payload = {userId: dbUser.user_id}
      const jwtToken = jwt.sign(payload, 'SECRET_KEY')
      response.send({jwtToken})
    }
  }
})

/* ================= API 3 : USER FEED ================= */

app.get('/user/tweets/feed/', authenticateToken, async (request, response) => {
  const {userId} = request

  const query = `
    SELECT user.username, tweet.tweet, tweet.date_time AS dateTime
    FROM tweet
    INNER JOIN follower 
      ON tweet.user_id = follower.following_user_id
    INNER JOIN user 
      ON user.user_id = tweet.user_id
    WHERE follower.follower_user_id = ?
    ORDER BY tweet.date_time DESC
    LIMIT 4;
  `
  const tweets = await db.all(query, [userId])
  response.send(tweets)
})

/* ================= API 4 : FOLLOWING ================= */

app.get('/user/following/', authenticateToken, async (request, response) => {
  const {userId} = request

  const query = `
    SELECT name
    FROM user
    INNER JOIN follower 
      ON user.user_id = follower.following_user_id
    WHERE follower.follower_user_id = ?;
  `
  const following = await db.all(query, [userId])
  response.send(following)
})

/* ================= API 5 : FOLLOWERS ================= */

app.get('/user/followers/', authenticateToken, async (request, response) => {
  const {userId} = request

  const query = `
    SELECT name
    FROM user
    INNER JOIN follower 
      ON user.user_id = follower.follower_user_id
    WHERE follower.following_user_id = ?;
  `
  const followers = await db.all(query, [userId])
  response.send(followers)
})

/* ============ HELPER FUNCTION (TWEET ACCESS) ============ */

const checkTweetAccess = async (tweetId, userId) => {
  const query = `
    SELECT *
    FROM tweet
    WHERE tweet_id = ?
      AND user_id IN (
        SELECT following_user_id
        FROM follower
        WHERE follower_user_id = ?
      );
  `
  return await db.get(query, [tweetId, userId])
}

/* ================= API 6 : TWEET DETAILS ================= */

app.get('/tweets/:tweetId/', authenticateToken, async (request, response) => {
  const {tweetId} = request.params
  const {userId} = request

  const tweet = await checkTweetAccess(tweetId, userId)
  if (tweet === undefined) {
    response.status(401).send('Invalid Request')
  } else {
    const likesQuery = `
      SELECT COUNT(*) AS likes FROM like WHERE tweet_id = ?
    `
    const repliesQuery = `
      SELECT COUNT(*) AS replies FROM reply WHERE tweet_id = ?
    `
    const likes = await db.get(likesQuery, [tweetId])
    const replies = await db.get(repliesQuery, [tweetId])

    response.send({
      tweet: tweet.tweet,
      likes: likes.likes,
      replies: replies.replies,
      dateTime: tweet.date_time,
    })
  }
})

/* ================= API 7 : TWEET LIKES ================= */

app.get(
  '/tweets/:tweetId/likes/',
  authenticateToken,
  async (request, response) => {
    const {tweetId} = request.params
    const {userId} = request

    const tweet = await checkTweetAccess(tweetId, userId)
    if (tweet === undefined) {
      response.status(401).send('Invalid Request')
    } else {
      const query = `
        SELECT username
        FROM user
        INNER JOIN like 
          ON user.user_id = like.user_id
        WHERE like.tweet_id = ?;
      `
      const likes = await db.all(query, [tweetId])
      response.send({likes: likes.map(u => u.username)})
    }
  },
)

/* ================= API 8 : TWEET REPLIES ================= */

app.get(
  '/tweets/:tweetId/replies/',
  authenticateToken,
  async (request, response) => {
    const {tweetId} = request.params
    const {userId} = request

    const tweet = await checkTweetAccess(tweetId, userId)
    if (tweet === undefined) {
      response.status(401).send('Invalid Request')
    } else {
      const query = `
        SELECT user.name, reply.reply
        FROM reply
        INNER JOIN user 
          ON reply.user_id = user.user_id
        WHERE reply.tweet_id = ?;
      `
      const replies = await db.all(query, [tweetId])
      response.send({replies})
    }
  },
)

/* ================= API 9 : USER TWEETS ================= */

app.get('/user/tweets/', authenticateToken, async (request, response) => {
  const {userId} = request

  const query = `
    SELECT 
      tweet.tweet,
      (SELECT COUNT(*) FROM like WHERE like.tweet_id = tweet.tweet_id) AS likes,
      (SELECT COUNT(*) FROM reply WHERE reply.tweet_id = tweet.tweet_id) AS replies,
      tweet.date_time AS dateTime
    FROM tweet
    WHERE tweet.user_id = ?;
  `
  const tweets = await db.all(query, [userId])
  response.send(tweets)
})

/* ================= API 10 : CREATE TWEET ================= */

app.post('/user/tweets/', authenticateToken, async (request, response) => {
  const {tweet} = request.body
  const {userId} = request

  const query = `
    INSERT INTO tweet (tweet, user_id, date_time)
    VALUES (?, ?, datetime('now'));
  `
  await db.run(query, [tweet, userId])
  response.send('Created a Tweet')
})

/* ================= API 11 : DELETE TWEET ================= */

app.delete(
  '/tweets/:tweetId/',
  authenticateToken,
  async (request, response) => {
    const {tweetId} = request.params
    const {userId} = request

    const query = `
      SELECT * FROM tweet WHERE tweet_id = ? AND user_id = ?
    `
    const tweet = await db.get(query, [tweetId, userId])

    if (tweet === undefined) {
      response.status(401).send('Invalid Request')
    } else {
      await db.run(`DELETE FROM tweet WHERE tweet_id = ?`, [tweetId])
      response.send('Tweet Removed')
    }
  },
)

module.exports = app
