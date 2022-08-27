<script lang="ts">
  let jsonText: string = `[
      {
        "message": {
          "type": "init",
          "timestamp": 0
        },
        "newState": {
          "a": "1",
          "b": "1",
          "c": "1"
        }
      },
      {
        "message": {
          "type": "add",
          "timestamp": 100000
        },
        "newState": {
          "a": "2",
          "b": "1",
          "c": "1"
        }
      },
      {
        "message": {
          "type": "add",
          "timestamp": 1000000
        },
        "newState": {
          "a": "2",
          "b": "3",
          "c": "1"
        }
      }
    ]`;

  import type { ServerEvent } from "../types/server-event.types";
  export let events: ServerEvent[];

  import { detailedDiff } from "deep-object-diff";

  $: {
    try {
      console.log(jsonText)
      events = JSON.parse(jsonText);

      // Add a property to each event.message with the delta timestamp from the previous one
      for (let i = 1; i < events.length; i++) {
        events[i].message.delta = events[i].message.timestamp - events[i - 1].message.timestamp;
        events[i].oldState = events[i-1].newState;
        events[i].diffState = detailedDiff(events[i].newState, events[i].oldState);
      }

    } catch (e) {
      console.error(e);
    }
  }
</script>

<h3>JSON Input</h3>
<textarea bind:value={jsonText}></textarea>

<style>
  :root {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: start;
    padding: 8px;
  }

  textarea { 
    height: 200px;
    width: 300px;
  }
</style>