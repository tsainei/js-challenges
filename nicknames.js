const duplicates = (names) => {
  const counts = {};
  names.forEach(function ([first, last]) {
    counts[first] = (counts[first] || 0) + 1;
    if (first != last) {
      counts[last] = (counts[last] || 0) + 1;
    }
  });
  return counts;
};

const set_nicknames = (arr) => {
  const names = arr.map((x) => x.split(" "));
  const usageCount = duplicates(names);

  return names.map(([first, last]) => {
    if (usageCount[first] == 1) {
      return first;
    } else if (usageCount[last] == 1) {
      return last;
    } else {
      throw new Error("impossible to assign nicknames");
    }
  });
};

console.log(
  set_nicknames([
    "Alan Appleseed",
    "James Oliver",
    "Oliver Twister",
    "Ni Yuan",
    "David Yuan",
  ])
);

console.log(
  set_nicknames(["Alan Alan", "James Oliver", "Oliver Twister"])
)
