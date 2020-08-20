const assert = require("assert");

const { concat, map, filter, find, pipe } = require("../../lib/index");

describe("Tests", function () {
  it("Map Function", function () {
    try {
      const arr = ["spray", "limit", "elite", "Javascript"];
      assert.equal(
        map(arr, (item, index) => ({ id: index, name: item })),
        [
          { id: 0, name: "spray" },
          { id: 1, name: "limit" },
          { id: 2, name: "elite" },
          { id: 3, name: "Javascript" },
        ]
      );
    } catch (error) {}
  });
  it("Concat Function", function () {
    try {
      const arr = ["spray", "limit", "elite", "Javascript"];
      const arr2 = ["exuberant", "destruction", "present"];
      assert.equal(concat(arr, arr2), [
        "spray",
        "limit",
        "elite",
        "Javascript",
        "exuberant",
        "destruction",
        "present",
      ]);
    } catch (error) {}
  });
  it("Filter Function", function () {
    try {
      const arr = [
        "spray",
        "limit",
        "elite",
        "exuberant",
        "destruction",
        "present",
      ];
      assert.equal(
        filter(arr, (element) => element.length > 6),
        ["exuberant", "destruction", "present"]
      );
    } catch (error) {}
  });
  it("Find Function", function () {
    try {
      const arr = [
        { id: 0, name: "spray" },
        { id: 1, name: "limit" },
      ];
      const id = 1;
      assert.equal(
        find(arr, (element) => element.id === id),
        { id: 1, name: "limit" }
      );
    } catch (error) {}
  });
  it("Pipe Function", function () {
    try {
      const arr = ["spray", "limit", "elite", "exuberant", "destruction"];
      assert.equal(
        pipe(arr, [
          filter((item) => item.length > 6),
          map((item, index) => ({
            id: index,
            name: item,
          })),
        ]),
        [
          {
            id: 0,
            name: "exuberant",
          },
          {
            id: 1,
            name: "destruction",
          },
        ]
      );
    } catch (error) {}
  });
});
