

chrome.storage.sync.get("data", function (items) {
  console.log(items);
//   notes = items[notes];
  document.getElementById("notes").value = items.data;
});

document.getElementById("save").onclick = function () {
  var notes = document.getElementById("notes").value;
  console.log("saving!")
  chrome.storage.sync.set({"data" : notes}, function () {});
};
