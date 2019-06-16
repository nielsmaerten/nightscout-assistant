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
                  <strong>{{$t("index.example-conversation.hey-google")}}</strong>
                  <br />
                  <i18next 
                  path="index.example-conversation.ask-google" 
                  tag="span">
                  <em>{{$t("common.invocation")}}</em>
                  </i18next>
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
                  <strong>{{$t("common.invocation")}}</strong>
                  <br />
                  {{$t("index.example-conversation.nightscout-status-resp")}}
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
