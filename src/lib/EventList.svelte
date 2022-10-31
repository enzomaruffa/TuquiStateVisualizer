<script lang="ts">
  import type { ServerEvent }  from "../types/server-event.types";
import EventPreview from "./EventPreview.svelte";
  export let events: ServerEvent[];
  export let selectedEvent: ServerEvent | undefined
  let selectedEventIndex: number | undefined

  function selected(i) {
    selectedEvent = events[i];
    selectedEventIndex = i;
	}
</script>

<h3>Events List ({events?.length} events)</h3>
<div class="events-list">
  {#each events as event, i}
    <div class="wrapper" on:click="{() => selected(i)}">
      <EventPreview event={event} selected={selectedEventIndex === i}></EventPreview>
    </div>
  {/each}
</div>

<style>
  :root {
    /* height: 100%; */
    display: flex;
    padding: 8px;
  }

  .events-list {
    display: flex;
    flex-direction: column;
    align-items: start;
    overflow-y: auto; 
    max-height: 600px;
  }

  .wrapper { 
    width: -webkit-fill-available;
  }
</style>
