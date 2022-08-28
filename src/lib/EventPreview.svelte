<script lang="ts">
  import type { ServerEvent }  from "../types/server-event.types";
  export let event: ServerEvent
  export let selected: boolean = false;
</script>

  <div class="event-card" 
        class:selected={selected}>
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

<style>
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