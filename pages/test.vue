<template>
    <div>test</div>
     <div>{{ data?.allNews?.edges }}</div>
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

if (data?.allNews?.edges) {
  // log response
  console.log(data?.allNews?.edges)
}
</script>