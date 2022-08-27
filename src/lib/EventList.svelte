<script lang="ts">
  import type { ServerEvent }  from "../types/server-event.types";
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
    <div class="event-card" 
          class:selected={selectedEventIndex === i}
          on:click="{() => selected(i)}">
      <div class="event-header">
        <div class="event-tag tag-{event.message?.type}">
          <b>{event.message?.type}</b>
        </div>

        <div class="event-date">
          {new Date(event.message?.timestamp).toLocaleTimeString()}
        </div>

        {#if event.message?.delta}
          <span class="delta"
                class:delta-ok="{event.message?.delta > 20}"
                class:delta-small="{event.message?.delta <= 20}">(+{event.message?.delta}ms)</span>
        {/if}
      </div>
    </div>
  {/each}
</div>

<style>
  :root {
    height: 100%;
    display: flex;
    padding: 8px;
  }

  .events-list {
    display: flex;
    flex-direction: column;
    align-items: start;
    height: 100%;
  }

  .event-card {
    /* width: 100%; */
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: start;
    width: -webkit-fill-available;
    flex-grow: 1;
    flex-shrink: 0;
    background-color: #333;
    margin: 8px;
    padding: 8px;
    border-radius: 8px;
    border: 1px solid #333;
  }

  .selected { 
    background-color: #444;
    border: 1px solid #999;
  }

  .event-header {
    display: flex;
    flex-direction: row;
    justify-content: start;
    align-items: end;

    /* margin-bottom: 8px; */
  }

  .event-tag {
    background-color: blueviolet;

    padding: 2px 4px;
    border-radius: 4px;
    margin-right: 8px;
  }

  .event-date { 
    margin-right: 8px;
  }

  .delta-ok {
    color: #666
  }

  .delta-small {
    color: red;
  }

  .tag-init { 
    background-color: #00ff00;
  }

  .tag-add {
    background-color: #ff0000;
  }
</style>