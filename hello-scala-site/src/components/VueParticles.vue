<script setup lang="ts">

</script>

<template>
  <vue-particles
      id="tsparticles"
      :options="{

                    fpsLimit: 120,
                    interactivity: {
                        events: {
                            onClick: {
                                enable: true,
                                mode: 'push'
                            },
                            onHover: {
                                enable: true,
                                mode: 'attract'
                            },
                            resize: true
                        },
                        modes: {
                            bubble: {
                                distance: 400,
                                duration: 2,
                                opacity: 0.8,
                                size: 40
                            },
                            push: {
                                quantity: 4
                            },
                            repulse: {
                                distance: 200,
                                duration: 0.4
                            },
                            grab: {
                              distance: 50,
                              lineLinked: {
                                opacity: 0.5
                              }
                            },
                            attract: {
                              distance: 200,
                              duration: 0.5,
                              // easing: 'ease-out-quad',
                              factor: 1,
                              maxSpeed: 10,
                              speed: 1
                            }
                        }
                    },
                    particles: {
                        color: {
                            value: '#000000'
                        },
                        links: {
                            color: '#000000',
                            distance: 150,
                            enable: true,
                            opacity: 0.5,
                            width: 1
                        },
                        move: {
                            direction: 'none',
                            enable: true,
                            outModes: 'out',
                            random: true,
                            speed: 4,
                            straight: false,
                            bounce: true,

                        },
                        number: {
                            density: {
                                enable: true,
                            },
                            value: 80
                        },
                        opacity: {
                            value: 0.5
                        },
                        shape: {
                            type: 'circle'
                        },
                        size: {
                            value: { min: 1, max: 5 }
                        }
                    },
                    detectRetina: true
                }"
  />
</template>

<style scoped>

</style>