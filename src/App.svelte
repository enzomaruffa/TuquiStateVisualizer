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

  .left-side {
    height: 100%;
  }

  .right-side {
    display: flex;
    flex: 1 1 auto;
    margin-left: 2rem;
    padding: 1rem 4rem;
    padding-left: 2rem;

    border-left: 1px solid #ccc;

    height: 100%;
  }
</style>
