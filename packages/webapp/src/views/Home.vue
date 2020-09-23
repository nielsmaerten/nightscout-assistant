<template>
  <div>
    <!-- <ns-notification></ns-notification> -->
    <ns-header></ns-header>
    <ns-example-conversation></ns-example-conversation>
    <ns-user-settings
      v-if="$store.state.user.isAuthenticated"
    ></ns-user-settings>
    <ns-user-signin v-if="!$store.state.user.isAuthenticated"></ns-user-signin>
    <ns-footer></ns-footer>
    <github-ribbon></github-ribbon>
  </div>
</template>

<script>
import nsNotification from "@/components/ns-notification.vue";
import nsHeader from "@/components/ns-header.vue";
import nsExampleConversation from "@/components/ns-example-conversation.vue";
import nsUserSettings from "@/components/ns-user-settings.vue";
import nsUserSignin from "@/components/ns-user-signin.vue";
import nsFooter from "@/components/ns-footer.vue";
import githubRibbon from "@/components/github-ribbon";

export default {
  name: "home",
  components: {
    nsHeader,
    nsExampleConversation,
    nsUserSettings,
    nsUserSignin,
    nsFooter,
    nsNotification,
    githubRibbon
  }
};
</script>
