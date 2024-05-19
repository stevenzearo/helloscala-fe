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
                                mode: ['attract', 'grab', 'repulse']
                            },
                            resize: true
                        },
                        modes: {
                            bubble: {
                                distance: 200,
                                duration: 2,
                                opacity: 0.6,
                                size: 40
                            },
                            push: {
                                quantity: 2
                            },
                            repulse: {
                                distance: 120,
                                duration: 2
                            },
                            grab: {
                              distance: 150,
                              lineLinked: {
                                opacity: 0.6
                              }
                            },
                            attract: {
                              distance: 200,
                              duration: 2,
                              easing: 'ease-out-quad',
                              factor: 1,
                              maxSpeed: 10,
                              speed: 1,
                            }
                        }
                    },
                    particles: {
                        color: {
                            value: '#000000'
                        },
                        links: {
                            color: '#000000',
                            distance: 120,
                            enable: true,
                            opacity: 0.6,
                            width: 1
                        },
                        move: {
                            enable: true,
                            random: true,
                            direction: 'none',
                            outModes: 'out',
                            speed: {value: {min: 1, max: 3}},
                            straight: false,
                            bounce: true,
                            attract: {
                              enable: true
                            }

                        },
                        number: {
                            density: {
                                enable: true,
                            },
                            value: 80
                        },
                        opacity: {
                            value: 0.6
                        },
                        shape: {
                            type: 'circle'
                        },
                        size: {
                            value: { min: 1, max: 3 }
                        }
                    },
                    detectRetina: true
                }"
  />
</template>

<style scoped>

</style>