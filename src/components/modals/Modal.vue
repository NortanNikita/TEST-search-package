<template>
  <div class="modal-wrapper" v-if="isOpenModal" @click.stop="closeModal">
    <div class="modal-wrapper__inner" @click.stop>
        <button class="close-btn" @click.stop="closeModal">
            <Times/>
        </button>
      <div class="title">
        <h2>Package: {{ modalData.package.name ? modalData.package.name : "-" }} v{{
          modalData.package.version ? modalData.package.version : "-"
        }}</h2>
      </div>
      <div class="details">
        <div class="details__side">
          <p>
            Author:
            {{
              modalData.package.author && modalData.package.author.name
                ? modalData.package.author.name
                : "-"
            }}
          </p>
          <p>
            E-mail:
            {{
              modalData.package.author && modalData.package.author.email
                ? modalData.package.author.email
                : "-"
            }}
          </p>
          <p>Keywords: {{modalData.package.keywords && modalData.package.keywords.length ?  modalData.package.keywords.join(", ") : '-'}}</p>
          <p>Links: </p>
          <a v-if="modalData.package.links.bugs" :href="modalData.package.links.bugs">Bugs</a>
          <a v-if="modalData.package.links.homepage" :href="modalData.package.links.homepage">Homepage</a>
          <a v-if="modalData.package.links.npm" :href="modalData.package.links.npm">NPM</a>
          <a v-if="modalData.package.links.repository" :href="modalData.package.links.repository">Repository</a>
        </div>
        <div class="details__side">
          <p>
            Maintenance score :
            {{ convertScores(modalData.score.detail.maintenance) }}
          </p>
          <p>
            Popularity score :
            {{ convertScores(modalData.score.detail.popularity) }}
          </p>
          <p>
            Quality score: {{ convertScores(modalData.score.detail.quality) }}
          </p>
          <p>Final score: {{ convertScores(modalData.score.final) }}</p>
          <p>Final score: {{ convertScores(modalData.searchScore) }}</p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Times from '../svg/Times'
import { mapMutations, mapState } from "vuex";
import convertScore from "../../helpers/convertScore";
export default {
  components: {
      Times
  },
  methods: {
    ...mapMutations({
      setData: "SET_DATA",
    }),
    closeModal() {
      this.setData({
        field: "isOpenModal",
        data: false,
      });
      this.setData({
        field: "modalData",
        data: {},
      });
    },
    convertScores(float) {
      return convertScore(float);
    },
  },
  computed: {
    ...mapState({
      isOpenModal: (state) => state.isOpenModal,
      modalData: (state) => state.modalData,
    }),
  },
};
</script>
<style lang="scss" scoped>
.modal-wrapper {
  position: fixed;
  z-index: 10;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.3);
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 50px;
  .title {
      padding-top: 20px;
      padding-left: 20px;
  }
  &__inner {
    position: relative;
    width: 100%;
    height: 100%;
    background: white;
    overflow: auto;
    border-radius: 5px;
    padding: 20px;
    .close-btn {
        position: absolute;
        background: none;
        border:none;
        outline:none;
        right: 12px;
        top:12px;
    }
    .details {
        display: flex;
        flex-direction: row; 
        width:100%;
        &__side {
            padding:20px;
            width:100%;
        }
    }
  }
}
@media screen and (max-width: 768px) {
    .modal-wrapper {
        &__inner {

    .details { 
        flex-direction: column;
    }
        }
    }
}
</style>
