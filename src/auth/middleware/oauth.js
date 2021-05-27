'use strict';

const superAgent = require('superagent');
const User = require('../models/users');

const redirectUri = 'https://fb-oauth-api.herokuapp.com/oauth';
const remotTokenLink = 'https://graph.facebook.com/v10.0/oauth/access_token';
const remoteUsreLink = 'https://graph.facebook.com/me';

module.exports = async (req, res, next) => {
  try {
    const authorizationCode = req.query.code;
    const accessToken = await getAccessTokenFromCode(authorizationCode);
    const remoteUser = await getRemoteUserData(accessToken);

    let localUser = await getLocalUser(remoteUser);
    req.user = localUser;
    req.token = localUser.token;
    next();
  } catch (e) {
    next(e);
  }
};

async function getAccessTokenFromCode(code) {
  try {
    const response = await superAgent.get(remotTokenLink).query({
      client_id: process.env.CLIENT_ID,
      client_secret: process.env.CLIENT_SECRET,
      redirect_uri: redirectUri,
      code: code,
    });
    return response.body.access_token;
  } catch (e) {
    console.log('ERROR IN GET ACCESS TOKENF ROM CODE : ', e);
    throw new Error(e.message);
  }
}

async function getRemoteUserData(accesstoken) {
  try {
    const response = await superAgent
      .get(remoteUsreLink)
      .set('Authorization', `Bearer ${accesstoken}`)
      .set('Accept', 'application/json');
    return response.body;
  } catch (e) {
    console.log('ERROR IN GET REMOTE USER : ', e);
    throw new Error(e.message);
  }
}

async function getLocalUser(remoteUser) {
  try {
    const userRecord = {
      username: remoteUser.name,
      password: 'somepassword',
    };
    // Check if this user we have before
    const user = await User.findOne({ username: remoteUser.name });
    if (user) {
      return user;
    } else {
      let newUser = new User(userRecord);
      newUser = await newUser.save();
      return newUser;
    }
  } catch (error) {
    throw new Error(error.message);
  }
}
