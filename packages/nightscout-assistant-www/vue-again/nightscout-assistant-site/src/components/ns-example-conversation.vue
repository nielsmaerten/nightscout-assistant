<template>
  <div class="mt-8 mx-10">
    <div class="columns">
      <div class="column is-offset-one-quarter is-half">
        <div class="box">
          <article class="media">
            <div class="media-left">
              <figure class="image is-64x64">
                <img src="@/assets/assistant.png" alt="Google Assistant logo" />
              </figure>
            </div>
            <div class="media-content">
              <div class="content">
                <p>
                  <strong>Hey Google,</strong>
                  <br />ask <em>Nightscout Status</em> what my glucose is
                </p>
              </div>
            </div>
          </article>
        </div>
        <div class="box">
          <article class="media">
            <div class="media-left">
              <figure class="image is-64x64">
                <img src="@/assets/nightscout.png" alt="Nightscout logo" />
              </figure>
            </div>
            <div class="media-content">
              <div class="content">
                <p>
                  <strong>Nightscout Status</strong>
                  <br />120 and slowly rising as of 4 minutes ago
                </p>
              </div>
            </div>
          </article>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ns-example-conversation"
};
</script>

<style></style>
