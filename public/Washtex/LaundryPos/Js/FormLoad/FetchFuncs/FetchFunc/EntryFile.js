import UrlJson from './Url.json' with {type: 'json'};

let StartFunc = async () => {
  let jVarLocalFetchUrl = UrlJson.GetUrl;

  let response = await fetch(jVarLocalFetchUrl);
  let jVarLocalResponse = await response.json();

  return jVarLocalResponse;
};

export { StartFunc };
