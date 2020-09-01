<script lang="ts">
import { defineComponent } from '@vue/composition-api'

export default defineComponent({
  name: 'Header',
})
</script>

<template>
  <v-app-bar app hide-on-scroll>
    <v-app-bar-nav-icon />
    <v-spacer />
    <v-toolbar-title>
      <v-btn to="/" nuxt exact tile block depressed x-large>
        Brandon Eichler
      </v-btn>
    </v-toolbar-title>
    <v-spacer />
  </v-app-bar>
</template>
