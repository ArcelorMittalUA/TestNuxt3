<template>
  <div> 
    <h1>Test arcelormittal</h1>
    <div>{{ data?.allNews?.edges }}</div>
  </div>
</template>
<script lang="ts" setup>
const query = gql`
  query allNews {
    allNews {
      edges {
        node {
          id
          slug
          title
        }
      }
    }
  }
`

const { data } = await useAsyncQuery(query)
</script>