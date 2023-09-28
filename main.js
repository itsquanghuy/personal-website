new Vue({
  el: "#feeds",
  data: {
    posts: [],
    selected: "-- Please select --",
    tags: [
      {
        id: 0,
        name: "-- Please select --",
      },
      {
        id: 1,
        name: "Personality",
      },
      {
        id: 2,
        name: "Humanity",
      },
      {
        id: 3,
        name: "Photography",
      },
      {
        id: 4,
        name: "Travelling",
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
          if (evt.target.value === "-- Please select --") {
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
