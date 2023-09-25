new Vue({
  el: "#feeds",
  data: {
    posts: [],
  },
  created: function () {
    fetch("./map.json")
      .then((data) => data.json())
      .then((json) => {
        this.posts = json;
      })
      .catch(null);
  },
});
