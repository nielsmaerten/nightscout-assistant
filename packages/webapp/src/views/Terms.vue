<template>
  <div>
    <div class="is-pulled-right mt-4">
      <language-selector></language-selector>
      <router-link
        :to="`/${$store.state.languages.active}/`"
        class="button mx-4 is-small"
        >{{ $t("terms.back") }}</router-link
      >
    </div>

    <section id="tos" class="mx-4 mt-5 text-sm">
      <h2 class="mb-4 text-base">
        <span class="mr-5">{{ $t("terms.privacy-policy.title") }}</span>
      </h2>

      <i18next path="terms.privacy-policy.intro" tag="p">
        https://nielsmaerten.github.io/nightscout-assistant
      </i18next>

      <strong>{{ $t("terms.privacy-policy.collection-title") }}</strong>
      <p>{{ $t("terms.privacy-policy.collection-desc") }}</p>

      <strong>{{ $t("terms.privacy-policy.use-title") }}</strong>
      <p>{{ $t("terms.privacy-policy.use-desc") }}</p>

      <strong>{{ $t("terms.privacy-policy.sharing-title") }}</strong>
      <p v-html="$t('terms.privacy-policy.sharing-desc')"></p>

      <strong>{{ $t("terms.privacy-policy.deleting-title") }}</strong>
      <i18next path="terms.privacy-policy.deleting-desc" tag="p">
        <a href="https://myaccount.google.com/permissions">{{
          $t("terms.privacy-policy.deleting-google-account")
        }}</a>
      </i18next>

      <strong>{{ $t("terms.privacy-policy.analytics-title") }}</strong>
      <i18next path="terms.privacy-policy.analytics-desc" tag="p">
        <span>https://nielsmaerten.github.io/nightscout-assistant</span>
        <a href="https://tools.google.com/dlpage/gaoptout/"
          >https://tools.google.com/dlpage/gaoptout/</a
        >
      </i18next>

      <h2 class="mb-4 mt-10 text-base">{{ $t("terms.health.title") }}</h2>
      <p>{{ $t("terms.health.disclaimer") }}</p>

      <h2 class="mb-4 mt-10 text-base">{{ $t("terms.license-and-tos") }}</h2>
      <p>MIT License: Copyright 2019 Niels Maerten</p>

      <p>
        Permission is hereby granted, free of charge, to any person obtaining a
        copy of this software and associated documentation files (the
        "Software"), to deal in the Software without restriction, including
        without limitation the rights to use, copy, modify, merge, publish,
        distribute, sublicense, and/or sell copies of the Software, and to
        permit persons to whom the Software is furnished to do so, subject to
        the following conditions:
      </p>
      <p>
        The above copyright notice and this permission notice shall be included
        in all copies or substantial portions of the Software.
      </p>

      <p>
        THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
        OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
        MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
        IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY
        CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
        TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
        SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
      </p>
      <p class="has-text-right text-xs">
        <br />{{ $t("common.google-tm") }}
        <br />
        <i18next path="common.nightscout-no-affl">
          <a href="http://nightscout.info">
            {{ $t("common.nightscout-project") }}
          </a>
        </i18next>
      </p>
    </section>
  </div>
</template>

<style scoped>
p {
  margin-bottom: 0.7em;
}
</style>

<script>
import LanguageSelector from "@/components/language-selector";
export default {
  name: "terms",
  components: { LanguageSelector }
};
</script>
