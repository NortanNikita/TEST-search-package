<template>
  <div class="page">
    <Search :searchString="searchString" @change="searchString = $event" />
    <Table
      :convertedItems="convertBodyTable"
      @clickRow="openDetails($event)"
    />
    <div class="pagination-wrapper">
      <b-pagination
        v-if="total"
        :value="from"
        :total-rows="total"
        :per-page="size"
        @change="from = $event"
        first-number
        align="center"
      ></b-pagination>
    </div>
    <Modal />
  </div>
</template>
<script>
import Modal from '../components/modals/Modal'
import Table from "../components/ui/Table";
import Search from "../components/ui/fields/Search";
import { mapActions, mapMutations, mapState } from "vuex";
import convertDateToLocal from "../helpers/convertDateToLocal";
export default {
  components: {
    Search,
    Table,
    Modal,
  },
  data: () => ({
    searchString: "",
    from: 1,
    size: 10,
  }),
  methods: {
    ...mapActions({
      fetchPackages: "modulePackages/FETCH_PACKAGES",
    }),
    ...mapMutations({
      setData: 'SET_DATA'
    }),
    openDetails(event) {
      this.setData({
        field:'isOpenModal',
        data: true,
      })
      this.setData({
        field:'modalData',
        data: event,
      })
    }
  },
  computed: {
    ...mapState({
      packages: (state) => state.modulePackages.packages,
      total: (state) => state.modulePackages.total,
      error: (state) => state.modulePackages.error,
    }),
    convertBodyTable() {
      return this.packages.map((pack, index) => [
        {
          headName: "Package name",
          render: pack.package && pack.package.name ? pack.package.name : "-",
          width:'30%',
          rowData: pack
        },
        {
          headName: "Version",
          render:
            pack.package && pack.package.version ? pack.package.version : "-",
          width:'100px'
        },
        {
          headName: "Description",
          render:
            pack.package && pack.package.description
              ? pack.package.description
              : "-",
          width:'70%'
        },
        {
          headName: "Date",
          render:
            pack.package && pack.package.date
              ? convertDateToLocal(pack.package.date)
              : "-",
          width:'150px',
          textAlign:'flex-end'
        },
      ]);
    },
  },
  watch: {
    searchString(newVal) {
      this.from = 1;
      this.fetchPackages({ text: newVal, size: this.size, from: this.from });
    },
    from(newVal) {
      this.fetchPackages({
        text: this.searchString,
        size: this.size,
        from: newVal,
      });
    },
  },
};
</script>
<style lang="scss" scoped>
.page { 
  background: #fff;
  min-height: 100vh;
  height: 100%;
  width: 100%;
  padding: 20px;
  .pagination-wrapper {
    padding-top: 1rem;
  }
}
</style>

