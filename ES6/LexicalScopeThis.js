//  lecxicalScopeThis === lost of this inside the lexicalScope
//  let data = {
//   list: "firends",
//   name: ["ram", "sam", "kam"],
//   getFriends: function () {
//     console.warn(this.list);
//     console.warn(this.name);
//     this.name.map(function (item) {
//       console.log(this.list, item);
//     });
//   },
// };
// data.getFriends();
let data = {
  list: "firends",
  name: ["ram", "sam", "kam"],
  getFriends: function () {
    console.warn(this.list);
    console.warn(this.name);
    this.name.map((item) => {
      console.log(this.list, item);
    });
  },
};
data.getFriends();
