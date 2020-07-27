// ACTIONS TO MODIFY VALUES IN STATE
const LOGIN_TO_TWITTER = "logIntoTwitter";
const LOGOUT_OF_TWITTER = "logoutOfTwitter";
const UPDATE_TWITTER_SCREEN_NAME = "updateTwitterScreenName";
const UPDATE_TWITTER_USER_ID = "updateTwitterUserId";
const UPDATE_USER_TWEETS = "updateUserTweets";
const UPDATE_USER_FAVORITES = "updateUserFavorites";
const UPDATE_TWITTER_USER_KEYS = "updateTwitterUserKeys";
const UPDATE_TWITTER_USER_CLIENT = "updateUserClient";
const UPDATE_WHITELISTED_TWEETS = "updateWhitelistedTweets";
const UPDATE_WHITELISTED_FAVORITES = "updateWhitelistedFavorites";
const UPDATE_TWITTER_TIME_RANGE_ENABLED = "updateTwitterTimeRangeEnabled";
const UPDATE_TWITTER_TIME_RANGE = "updateTwitterTimeRange";
const UPDATE_TWITTER_SCORE_ENABLED = "updateTwitterScoreEnabled";
const UPDATE_TWITTER_FAVORITES_SCORE = "updateTwitterFavoritesScore";
const UPDATE_TWITTER_RETWEETS_SCORE = "updateTwitterRetweetsScore";
const UPDATE_TWITTER_SCHEDULE_DELETION_ENABLED =
  "updateTwitterScheduleDeletionEnabled";
const UPDATE_TWITTER_SCHEDULE_TIME = "updateTwitterScheduleTime";

const LOGIN_TO_REDDIT = "loginToReddit";
const LOGOUT_OF_REDDIT = "logoutOfReddit";
const UPDATE_REDDIT_USER_NAME = "updateRedditUsername";
const UPDATE_REDDIT_ACCESS_TOKEN = "updateRedditAccessToken";
const UPDATE_REDDIT_REFRESH_TOKEN = "updateRedditRefreshToken";
const UPDATE_REDDIT_COMMENTS = "updateRedditComments";
const UPDATE_REDDIT_POSTS = "updateRedditPosts";
const UPDATE_REDDIT_WHITELISTED_COMMENTS = "updateRedditWhitelistedComments";
const UPDATE_REDDIT_WHITELISTED_POSTS = "updateRedditWhitelistedPosts";
const UPDATE_REDDIT_TIME_RANGE_ENABLED = "updatedRedditTimeRangeEnabled";
const UPDATE_REDDIT_TIME_RANGE = "updateRedditTimeRange";
const UPDATE_REDDIT_SCORE_ENABLED = "updateRedditScoreEnabled";
const UPDATE_REDDIT_UPVOTES_SCORE = "updatedRedditUpvotesScore";
const UPDATE_REDDIT_SCHEDULE_DELETION_ENABLED =
  "updateRedditScheduleDeletionEnabled";
const UPDATE_REDDIT_SCHEDULE_TIME = "updateRedditScheduleTime";

const INCREMENT_CURRENTLY_DELETING_ITEMS_DELETED =
  "incrementCurrentlyDeletingItemsDeleted";
const RESET_CURRENTLY_DELETING_ITEMS_DELETED =
  "resetCurrentlyDeletingItemsDeleted";
const UPDATE_CURRENTLY_DELETING_TOTAL_ITEMS =
  "updateCurrentlyDeletingTotalTweets";

// ACTUAL VALUES IN STATE
const TWITTER_LOGGED_IN = "twitterLoggedIn";
const TWITTER_SCREEN_NAME = "twitterScreenName";
const TWITTER_USER_ID = "twitterUserId";
const USER_TWEETS = "userTweets";
const USER_FAVORITES = "userFavorites";
const TWITTER_USER_KEYS = "twitterUserKeys";
const TWITTER_USER_CLIENT = "twitterUserClient";
const WHITELISTED_TWEETS = "whitelistedTweets";
const WHITELISTED_FAVORITES = "whitelistedFavorites";
const TWITTER_TIME_RANGE_ENABLED = "twitterTimeRangeEnabled";
const TWITTER_TIME_RANGE = "twitterTimeRange";
const TWITTER_SCORE_ENABLED = "twitterScoreEnabled";
const TWITTER_FAVORITES_SCORE = "twitterFavoritesScore";
const TWITTER_RETWEETS_SCORE = "twitterRetweetsScore";
const TWITTER_SCHEDULE_DELETION_ENABLED = "twitterScheduleDeletionEnabled";
const TWITTER_SCHEDULE_TIME = "twitterScheduleTime";

const REDDIT_LOGGED_IN = "redditLoggedIn";
const REDDIT_USER_NAME = "redditUserName";
const REDDIT_ACCESS_TOKEN = "redditAccessToken";
const REDDIT_REFRESH_TOKEN = "redditRefreshToken";
const REDDIT_COMMENTS = "redditComments";
const REDDIT_POSTS = "redditPosts";
const REDDIT_WHITELISTED_COMMENTS = "redditWhitelistedComments";
const REDDIT_WHITELISTED_POSTS = "redditWhitelistedPosts";
const REDDIT_TIME_RANGE_ENABLED = "redditTimeRangeEnabled";
const REDDIT_TIME_RANGE = "redditTimeRange";
const REDDIT_SCORE_ENABLED = "redditScoreEnabled";
const REDDIT_UPVOTES_SCORE = "redditUpvotesScore";
const REDDIT_SCHEDULE_DELETION_ENABLED = "redditScheduleDeletionEnabled";
const REDDIT_SCHEDULE_TIME = "redditScheduleTime";

const CURRENTLY_DELETING = "currentlyDeleting";

// other constants
const TWEETS_ROUTE = "statuses/user_timeline";
const FAVORITES_ROUTE = "favorites/list";

const constants = {
  LOGIN_TO_TWITTER,
  LOGOUT_OF_TWITTER,
  UPDATE_TWITTER_SCREEN_NAME,
  UPDATE_TWITTER_USER_ID,
  UPDATE_USER_TWEETS,
  UPDATE_USER_FAVORITES,
  UPDATE_TWITTER_USER_KEYS,
  UPDATE_TWITTER_USER_CLIENT,
  UPDATE_WHITELISTED_TWEETS,
  UPDATE_WHITELISTED_FAVORITES,
  INCREMENT_CURRENTLY_DELETING_ITEMS_DELETED,
  RESET_CURRENTLY_DELETING_ITEMS_DELETED,
  UPDATE_CURRENTLY_DELETING_TOTAL_ITEMS,
  UPDATE_TWITTER_TIME_RANGE_ENABLED,
  UPDATE_TWITTER_TIME_RANGE,
  UPDATE_TWITTER_SCORE_ENABLED,
  UPDATE_TWITTER_FAVORITES_SCORE,
  UPDATE_TWITTER_RETWEETS_SCORE,
  UPDATE_TWITTER_SCHEDULE_DELETION_ENABLED,
  UPDATE_TWITTER_SCHEDULE_TIME,
  LOGIN_TO_REDDIT,
  LOGOUT_OF_REDDIT,
  UPDATE_REDDIT_USER_NAME,
  UPDATE_REDDIT_ACCESS_TOKEN,
  UPDATE_REDDIT_REFRESH_TOKEN,
  UPDATE_REDDIT_COMMENTS,
  UPDATE_REDDIT_POSTS,
  UPDATE_REDDIT_WHITELISTED_COMMENTS,
  UPDATE_REDDIT_WHITELISTED_POSTS,
  UPDATE_REDDIT_TIME_RANGE_ENABLED,
  UPDATE_REDDIT_TIME_RANGE,
  UPDATE_REDDIT_SCORE_ENABLED,
  UPDATE_REDDIT_UPVOTES_SCORE,
  UPDATE_REDDIT_SCHEDULE_DELETION_ENABLED,
  UPDATE_REDDIT_SCHEDULE_TIME,
  TWITTER_LOGGED_IN,
  TWITTER_SCREEN_NAME,
  TWITTER_USER_ID,
  USER_TWEETS,
  USER_FAVORITES,
  TWITTER_USER_KEYS,
  TWITTER_USER_CLIENT,
  WHITELISTED_TWEETS,
  WHITELISTED_FAVORITES,
  CURRENTLY_DELETING,
  TWITTER_TIME_RANGE_ENABLED,
  TWITTER_TIME_RANGE,
  TWITTER_SCORE_ENABLED,
  TWITTER_FAVORITES_SCORE,
  TWITTER_RETWEETS_SCORE,
  TWITTER_SCHEDULE_DELETION_ENABLED,
  TWITTER_SCHEDULE_TIME,
  REDDIT_LOGGED_IN,
  REDDIT_USER_NAME,
  REDDIT_ACCESS_TOKEN,
  REDDIT_REFRESH_TOKEN,
  REDDIT_COMMENTS,
  REDDIT_POSTS,
  REDDIT_WHITELISTED_COMMENTS,
  REDDIT_WHITELISTED_POSTS,
  REDDIT_TIME_RANGE_ENABLED,
  REDDIT_TIME_RANGE,
  REDDIT_SCORE_ENABLED,
  REDDIT_UPVOTES_SCORE,
  REDDIT_SCHEDULE_DELETION_ENABLED,
  REDDIT_SCHEDULE_TIME,
  TWEETS_ROUTE,
  FAVORITES_ROUTE
};

export default constants;