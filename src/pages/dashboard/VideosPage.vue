<template>
  <div>
    <div class="tw-w-2/3 tw-mt-12 tw-ml-6">
      <q-media-player
        type="video"
        :sources="sources"
      />
    </div>
  </div>
</template>

<script>
import { defineComponent } from 'vue';
import { QMediaPlayer } from '@quasar/quasar-ui-qmediaplayer';
import '@quasar/quasar-ui-qmediaplayer/src/index.sass';

export default defineComponent({
  name: "VideosPage",
  // components: {
  //   QMediaPlayer
  // },
  setup() {
    const sources = [
      {
        src: 'http://www.peach.themazzone.com/durian/movies/sintel-2048-surround.mp4',
        type: 'video/mp4'
      }
    ]

    return {
      sources
    }
  },
})
</script>
