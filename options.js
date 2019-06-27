function save_options() {
  var color = document.getElementById('color').value;
  chrome.storage.sync.set({
    color: color,
  }, function() {
    var status = document.getElementById('status');
    status.textContent = 'Options saved.';
    document.getElementsByTagName("body")[0].style.backgroundColor = color;
    setTimeout(function() {
      status.textContent = '';
    }, 750);
  });
}
function restore_options() {
  chrome.storage.sync.get({
    color: '#ffffff',
  }, function(items) {
    document.getElementsByTagName("body")[0].style.backgroundColor = items.color
    document.getElementById('color').value = items.color;
  });
}
document.addEventListener('DOMContentLoaded', restore_options);
document.getElementById('save').addEventListener('click', save_options);
    