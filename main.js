const DEFAULT_SELECTED_OPTION = "-- Select a category --";

new Vue({
  el: "#feeds",
  data: {
    posts: [],
    selected: DEFAULT_SELECTED_OPTION,
    tags: [
      {
        id: 0,
        name: DEFAULT_SELECTED_OPTION,
      },
      {
        id: 1,
        name: "Memoir",
      },
    ],
  },
  created: function () {
    fetch("./map.json")
      .then((data) => data.json())
      .then((json) => {
        this.posts = json;
      })
      .catch(null);
  },
  methods: {
    onFilter(evt) {
      fetch("./map.json")
        .then((data) => data.json())
        .then((json) => {
          if (evt.target.value === DEFAULT_SELECTED_OPTION) {
            fetch("./map.json")
              .then((data) => data.json())
              .then((json) => {
                this.posts = json;
              })
              .catch(null);
            return;
          }

          this.posts = json.filter(
            (post) => post.category === evt.target.value
          );
        })
        .catch(null);
    },
  },
});
