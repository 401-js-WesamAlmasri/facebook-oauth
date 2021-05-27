'use strict';

const authorizationUrl = 'https://www.facebook.com/v10.0/dialog/oauth';

const options = {
  client_id: 334556438064324,
  redirect_uri: 'https://fb-oauth-api.herokuapp.com/oauth',
  state: 'somestatuscode',
};

const stringifiedParams = Object.keys(options)
  .map((key) => {
    return `${key}=${encodeURIComponent(options[key])}`;
  })
  .join('&');

const loginUrl = `${authorizationUrl}?${stringifiedParams}`;

const a = document.getElementById('oauth');
a.setAttribute('href', loginUrl);
