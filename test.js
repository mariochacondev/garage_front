import Vue from "vue";
import { withHooks, useState, useEffect } from "vue-hooks";


const CounterAPP = withHooks(h => {
  // state
  const [count, setCount] = useState(0);

  // effect
  useEffect(() => {
    document.title = "count is " + count;
  });

  return h("div", [
    ("span", `count is: ${count}`),
    (
      "button",
      {
        on: {
          click: () => setCount(count + 1)
        }
      },
      "+"
    ),
  ]);
});

// just so you know this is Vue...
new Vue({
  el: "#app",
  render() {
    return ("div", [(CounterAPP)]);
  }
});