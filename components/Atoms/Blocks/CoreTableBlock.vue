<template>
  <div class="table-block">
    <div v-html="block.saveContent"></div>
  </div>
</template>
<script>
export default {
  props: {
    block: {},
  },
}
</script>
<style lang="scss">
.table-block {
  max-width: 1028px;
  .wp-block-table {
    table {
      width: 100%;
      margin-bottom: 1rem;
      color: var(--color);
      border-collapse: collapse;

      tbody {
        td {
          border-top: 1px solid var(--border-color);
          line-height: 1.5;
          padding: 10px;

          &:first-child {
            padding-left: 0;
          }
        }

        tr {
          &:last-child {
            border-bottom: 1px solid var(--border-color);
          }
        }
      }
    }
  }
}
@media (max-width: $mobile) {
  .table-block {
    max-width: 100%;
    .wp-block-table {
      table {
        tbody {
          td {
            width: 100%;
            display: block;
            border-top: 0;
            padding-left: 0;
            padding-right: 0;
          }

          tr {
            display: flex;
            flex-direction: column;
            padding: 16px 0;
            border-top: 1px solid var(--border-color);
          }
        }
      }
    }
  }
}
</style>