const a = {
  // `url` is the server URL that will be used for the request
  url: "/user",

  // `method` is the request method to be used when making the request
  method: "get", // default

  baseURL: "https://some-domain.com/api",

  transformRequest: [
    function (data, headers) {
      // Do whatever you want to transform the data

      return data;
    },
  ],

  transformResponse: [
    function (data) {
      return data;
    },
  ],

  headers: { "X-Requested-With": "XMLHttpRequest" },

  params: {
    ID: 12345,
  },

  paramsSerializer: function (params) {
    return Qs.stringify(params, { arrayFormat: "brackets" });
  },

  data: {
    firstName: "Fred",
  },

  data: "Country=Brasil&City=Belo Horizonte",

  timeout: 1000, // default is `0` (no timeout)

  withCredentials: false, // default

  adapter: function (config) {
    /* ... */
  },

  auth: {
    username: "janedoe",
    password: "s00pers3cret",
  },

  responseType: "json", // default

  responseEncoding: "utf8", // default

  xsrfCookieName: "XSRF-TOKEN", // default

  xsrfHeaderName: "X-XSRF-TOKEN", // default

  onUploadProgress: function (progressEvent) {},

  onDownloadProgress: function (progressEvent) {},

  maxContentLength: 2000,

  maxBodyLength: 2000,

  validateStatus: function (status) {
    return status >= 200 && status < 300; // default
  },

  maxRedirects: 5, // default

  socketPath: null, // default

  httpAgent: new http.Agent({ keepAlive: true }),
  httpsAgent: new https.Agent({ keepAlive: true }),

  proxy: {
    protocol: "https",
    host: "127.0.0.1",
    port: 9000,
    auth: {
      username: "mikeymike",
      password: "rapunz3l",
    },
  },

  cancelToken: new CancelToken(function (cancel) {}),

  decompress: true, // default
};
