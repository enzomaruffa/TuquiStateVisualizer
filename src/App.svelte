<script lang="ts">
import EventList from "./lib/EventList.svelte";
import EventVisualizer from "./lib/EventVisualizer.svelte";
import JsonInput from "./lib/JSONInput.svelte";

import type { ServerEvent }  from "./types/server-event.types";
export let events: ServerEvent[] = [];
export let selectedEvent: ServerEvent | undefined;
</script>

<main>
  <div class="container">
    <div class="left-side">
      <JsonInput bind:events={events}></JsonInput>
      <EventList bind:events={events} bind:selectedEvent={selectedEvent}></EventList>
    </div>
    <div class="right-side">
      <EventVisualizer bind:selectedEvent={selectedEvent}></EventVisualizer>
    </div>
  </div>
</main>

<style>
  .container { 
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: start;
    height: 100vh;
    width: 100vw;
  }

  /* .left-side {
    width: 20%;
  } */

  .right-side {
    display: flex;
    flex: 1 1 auto;
    margin-left: 0px;
    padding: 16px 64px;
  }
</style>