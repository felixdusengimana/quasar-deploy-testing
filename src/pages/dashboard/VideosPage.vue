<template>
  <div>
    <div class="tw-border-2 tw-py-6 tw-mx-4 tw-mt-5 tw-rounded-lg tw-px-10">
      <div class="tw-text-base">
        UI/UX Design
      </div>
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
    <div class="tw-flex">
      <div class="tw-w-2/3 tw-mt-12 tw-ml-6">
        <q-media-player
          type="video"
          :source="active.src"
        />
      </div>
      <div class="tw-mt-14 tw-w-1/3 tw-mx-10">
        <div class="tw-flex tw-justify-center">
          <q-btn unelevated color="accent" label="Previous" no-caps class="tw-h-10 tw-w-24 tw-rounded-full" />
          <div class="tw-w-24 tw-h-10 tw-mx-4 tw-border-2 tw-border-primary-bg-color tw-rounded-full">
            <q-btn flat color="accent" label="Next" no-caps class="tw-h-10 tw-w-24 tw-rounded-full" />
          </div>
        </div>
        <div class="tw-text-base tw-pt-5">
          First semester - month 1
        </div>
        <q-scroll-area 
          :thumb-style="thumbStyle"
          style="height: 250px;" class="tw-mt-3"
        >
          <div class="tw-text-gray-600">
            week1
          </div>
          <div class="q-py-xs tw-mx-4 tw-border-l-2 tw-pt-4">
            <q-expansion-item
              v-model="expanded"
              label="Introduction to UI/UX design"
              caption="19 topics"
            >
              <q-card>
                <q-card-section>
                  <q-list>
                    <q-item v-for="video in sources" :key="video.id" clickable v-ripple :class="active.id == video.id ? 'tw-border-l-4' : ''" class="tw-mt-1 tw-bg-gray-50 tw-border-brand-pink-color" @click="select(video.id)">
                      <q-item-section avatar>
                        <svg v-if="active.id == video.id" width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <circle cx="9.5" cy="9.5" r="9.5" fill="#F31FC5"/>
                          <path d="M12.929 9.49998C12.929 9.42375 12.8864 9.35823 12.824 9.32385L8.38934 6.76353C8.35667 6.74076 8.31707 6.72717 8.27423 6.72717C8.16272 6.72717 8.07227 6.81753 8.07227 6.92904C8.07227 6.93687 8.07371 6.94425 8.07461 6.95181H8.07227V12.0936H8.07461C8.08604 12.1943 8.17055 12.2727 8.27423 12.2727C8.31104 12.2727 8.34506 12.2622 8.37476 12.245L8.37656 12.2481L12.8294 9.67728L12.8276 9.67413C12.888 9.63921 12.929 9.57468 12.929 9.49998Z" fill="white"/>
                        </svg>
                        <svg v-if="active.id > video.id" width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <circle cx="9.5" cy="9.5" r="9.5" fill="#F31FC5"/>
                          <path d="M5.25 9L7.75 11.5L12.75 6.5" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                      </q-item-section>
                      <q-item-section>
                        {{ video.title }}
                        <div class="tw-text-gray-600 tw-text-xs">
                          19 min
                        </div>
                      </q-item-section>
                    </q-item>
                  </q-list>
                </q-card-section>
              </q-card>
            </q-expansion-item>
          </div>
        </q-scroll-area>
      </div>
    </div>    
  </div>
</template>

<script>
import { computed, defineComponent, ref } from 'vue';

const sources = [
  {
    id: 1,
    title: 'Focus of UI/UX design 1',
    src: 'http://www.peach.themazzone.com/durian/movies/sintel-2048-surround.mp4',
  },
  {
    id: 2,
    title: 'Focus of UI/UX design 2',
    src: 'http://www.peach.themazzone.com/durian/movies/sintel-2048-surround.mp4',
  },
  {
    id: 3,
    title: 'Focus of UI/UX design 3',
    src: 'http://www.peach.themazzone.com/durian/movies/sintel-2048-surround.mp4',
  }
]

export default defineComponent({
  name: "VideosPage",
  setup() {
    const progress = ref(0.33)
    const expanded = ref(false)
    const active = ref(sources[0])
    let selected = ref(false)

    const select = (id) => {
      active.value = sources.find(x => x.id == id)
    }

    return {
      sources,
      progress,
      progressLabel: computed(() => (progress.value * 100) + '%'),
      expanded,
      select,
      selected,
      active,

      thumbStyle: {
        right: '2px',
        backgroundColor: '#f31fc5',
        width: '10px',
        opacity: '0.75'
      }
    }
  },
})
</script>
