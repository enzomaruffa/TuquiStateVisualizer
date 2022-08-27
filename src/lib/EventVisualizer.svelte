<script lang="ts">
  import type { ServerEvent }  from "../types/server-event.types";
  export let selectedEvent: ServerEvent | undefined

  import JSONTree from 'svelte-json-tree';
</script>

<div class="columns">
  <div class="column">
    <div class="object-view">
      <h3>Message</h3>
      <div class="code">
        <JSONTree defaultExpandedLevel={2} value={selectedEvent?.message || {}}/>
      </div>
    </div>
    <div class="object-view">
      <h3>State Diff</h3>
      <div class="code">
        <JSONTree defaultExpandedLevel={2} value={selectedEvent?.diffState || {}}/>
      </div>
    </div>
  </div>
  <div class="column">
    <div class="object-view">
      <h3>New State</h3>
      <div class="code">
        <JSONTree defaultExpandedLevel={0} value={selectedEvent?.newState || {}}/>
      </div>
    </div>
  </div>
  <div class="column">
    <div class="object-view">
      <h3>Old State</h3>
      <div class="code">
        <JSONTree defaultExpandedLevel={0} value={selectedEvent?.oldState || {}}/>
      </div>
    </div>
  </div>
</div>

<style>
  :root {
    width: 100%;
    height: 100%;
    display: flex;
    padding: 8px;
  }

  .columns {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: start;
    flex: 1 1 auto;
    margin-left: 64px;
  }

  .column {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: start;
    flex: 1 1 auto;
  }

  .object-view {
    display: flex;
    flex-direction: column;
    align-items: start;
    text-align: left;
    flex: 1 1 auto;
    width: -webkit-fill-available;
  }

  .code { 
    background-color: #fff;
    padding: 16px;
    border-radius: 8px;
    margin-right: 8px;
    display: flex;
    flex: 1 1 auto;
    width: -webkit-fill-available;
  }
</style>
