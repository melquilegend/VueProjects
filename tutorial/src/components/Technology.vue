<template>
  <div>
    <p>Utilizo as seguintes tecnologias para Backend:</p>
    <ul>
      <li v-for="(technolgy, index) in Backend_technology" v-bind:key="index">
        {{ technolgy }}
      </li>
    </ul>
    <p>Utilizo as seguintes tecnologias para Frontend:</p>
    <ul>
      <li v-for="technolgies in Frontend_technology" :key="technolgies.id">
        {{ technolgies.language }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Technology",
  data() {
    return {
      Backend_technology: ["JavaScript", "PHP", "SQL"],
      Frontend_technology: [
        { id: 1, language: "HTML" },
        { id: 1, language: "CSS" },
        { id: 1, language: "HTML5" },
      ],
    };
  },
};
</script>