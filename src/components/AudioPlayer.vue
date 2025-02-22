<template>
  <div class="audio">
    <div ref="overviewElement" class="player" />
  </div>

  <audio ref="audioElement" :src="src" type="audio/wav" />
</template>

<script lang="ts" setup>
  import { watch, ref, computed, onMounted } from 'vue'
  import Peaks, { type PeaksInstance, type PeaksOptions, type SetSourceOptions } from 'peaks.js'

  import { src } from '@/store'

  const audioElement = ref<HTMLAudioElement>()

  const overviewElement = ref<HTMLDivElement>()

  const peaksInstance = ref<PeaksInstance>()

  const sourceOptions = computed<SetSourceOptions>(() => ({
    mediaUrl: src.value
  }))

  const options = computed<PeaksOptions>(() => ({
    mediaElement: audioElement.value,

    overview: {
      container: overviewElement.value,

      waveformColor: '#FFFFFF',
      playedWaveformColor: '#72A3FF',
      playheadColor: '#72A3FF',

      /* @ts-ignore due to missing type */
      axisTopMarkerHeight: 0,
      axisBottomMarkerHeight: 0,
      showAxisLabels: false
    },

    dataUri: {
      arraybuffer: '/waveform.dat'
    }
  }))

  onMounted(() => {
    setTimeout(() => {
      Peaks.init(options.value, async (_, instance) => {
        peaksInstance.value = instance
      })
    }, 250)
  })

  watch(sourceOptions, (newSourceOptions) => {
    setTimeout(() => {
      peaksInstance.value?.setSource(newSourceOptions, async () => {
        await peaksInstance.value?.player.play()
      })
    }, 0)
  })

  watch(peaksInstance, (newPeaksInstance) => {
    window.onresize = () => ({})

    window.addEventListener('resize', () => {
      newPeaksInstance?.views.getView('overview')?.fitToContainer()
    })
  })
</script>

<style scoped>
  .audio {
    --height: 3rem;

    width: 100%;
    position: relative;
  }

  .player,
  .play-button {
    width: 100%;
    height: var(--height);
    cursor: pointer;
  }

  .play-button {
    background-color: var(--color);
    color: var(--background);

    font-weight: 900;
    font-style: italic;
    font-size: 1.25rem;

    border-radius: var(--br);

    margin-top: calc(var(--height) * -1);
    z-index: 1;
  }

  .play-button:focus-visible,
  .play-button:hover {
    text-transform: uppercase;
    outline: none;
    text-decoration: underline;
  }

  .play-button:hover {
    background-color: var(--color);
    color: var(--background);
  }
</style>
