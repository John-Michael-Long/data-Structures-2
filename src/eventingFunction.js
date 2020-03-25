const mixEvents = function (obj) {
  const events = {};
  obj.trigger = function (event, ...args) {
    if (!events[event]) return;
    events[event].forEach(callback => callback.apply(obj, args));
  };
  obj.on = function (event, callback) {
    events[event] = events[event] || [];
    events[event].push(callback);
  };
  return obj;
};
