<template>
  <div class="table-container">
    <div class="custom-table">
      <div class="custom-table__head">
        <div class="head-tr">
          <div
            class="head-th"
            v-for="(col, index) in convertedItems[0]"
            :key="index"
            :style="`justify-content:${
              col.textAlign ? col.textAlign : 'flex-start'
            };width:${
              col.width ? col.width :
              convertedItems[0].length ? 100 / convertedItems[0].length + '%' : 100 + '%'
            }`"
          >
            <div class="head-label">
              {{ col.headName || ' ' }}
            </div>
          </div>
        </div>
      </div>
      <div
        class="custom-table__body"
        v-if="convertedItems && convertedItems.length"
      >
        <div
          class="body-tr"
          v-for="(row, index) in convertedItems"
          :key="index"
          @click.stop="$emit('clickRow', row[0].rowData)"
        >
          <div
            class="body-td"
            v-for="(col, index) in row"
            :key="index"
            :style="`align-items:${
              col.textAlign ? col.textAlign : 'flex-start'
            };width:${col.width ? col.width : 100 / row.length + '%'}`"
          >
            <p >{{ col.render }}</p>
          </div>
        </div>
      </div>
      <div
        class="custom-table__body"
        style="text-align: center; padding: 20px"
        v-if="!convertedItems.length"
      >
        <span>No results founds</span>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  components: {
  },
  props: {
    sortUpId: {
      type: Number,
      default: 0,
    },
    sortDownId: {
      type: Number,
      default: 0,
    },
    convertedItems: {
      type: Array,
      default: () => [],
    },
  },
}
</script>
<style scoped lang="scss">
.action-box {
  display:flex;
  align-items: center;
  cursor: pointer;
  & > span {
    margin-left: 5px;
    font-weight: 100;
  }
}
.table-container {
  position: relative;
  width: 100%;
  height: 100%;
  .custom-table {
    position: relative;
    width: 100%;
    height: 100%;
    &__head {
      width: 100%;
      & > .head-tr {
        display: flex;
        flex-direction: row;
        & > .head-th {
          position: relative;
          padding: 10px;
          color: #757575;
          font-size: 13px;
          display: flex;
          flex-direction: row;
          justify-content: space-between;
          align-items: center;
          .head-label {
            height: 100%;
            display: flex;
            align-items: center;
          }
        }
      }
    }
    &__body {
      width: 100%;
      height: 100%;
      overflow: auto;
      & > .body-tr {
        display: flex;
        flex-direction: row;
        cursor: pointer;
        border-bottom: 1px solid rgba(0,0,0,0.1);
        & > .body-td {
          padding: 10px;
          font-size: 13px;
          display: flex;
          flex-direction: column;
          justify-content: center;
          p {
            word-break: break-word;
            margin: 0;
          }
        }
      }
    }
  }
}
</style>