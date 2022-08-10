<template>
  <div>
    <div class="tw-border-2 tw-py-6 tw-mx-4 tw-mt-5 tw-rounded-lg tw-px-10">
      <q-linear-progress
        :value="progress"
        rounded
        size="25px"
        color="accent"
        track-color="grey3"
        class="q-mt-sm"
      >
        <div class="absolute-full flex flex-center">
          <q-badge color="white" text-color="accent" :label="progressLabel" />
        </div>
      </q-linear-progress>
      <div class="tw-flex tw-justify-between tw-mt-2">
        <div>
          1st semester
        </div>
        <div>
          2nd semester
        </div>
        <div>
          3rd semester
        </div>
      </div>
    </div>
    <div class="tw-w-2/3 tw-mt-12 tw-ml-6">
      <q-media-player
        type="video"
        :sources="sources"
      />
    </div>
  </div>
</template>

<script>
import { computed, defineComponent, ref } from 'vue';

export default defineComponent({
  name: "VideosPage",
  setup() {
    const sources = [
      {
        src: 'http://www.peach.themazzone.com/durian/movies/sintel-2048-surround.mp4',
        type: 'video/mp4'
      }
    ]
    const progress = ref(0.3)

    return {
      sources,
      progress,
      progressLabel: computed(() => (progress.value * 100).toFixed(2) + '%'),
    }
  },
})
</script>
