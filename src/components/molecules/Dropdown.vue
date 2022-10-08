<template>
    <div class="tw-bg-[#F0F0F0] tw-py-3 tw-px-4 tw-flex tw-w-fit" :class="'tw-rounded-'+rounded">
      <q-btn-dropdown
            color="black"
            no-caps
            dense
            flat
            :dropdown-icon="icon?icon:'mdi-chevron-down'"
            :no-icon-animation="noAnimation"
          >
          <template v-slot:label>
              <p class="tw-text-sm tw-font-semiBold tw-capitalize">{{selected?selected:placeholder}}</p>
          </template>
            <q-list dense>
              <q-item clickable v-ripple v-close-popup @click="onSelectItem(data)" v-for="(data, index) in dropdownlist" :key="index">
                <q-item-section class="tw-p-0">
                  <q-item-label class="first-letter:tw-capitalize">{{data.value}}</q-item-label>
                </q-item-section>
                </q-item>
            </q-list>
      </q-btn-dropdown>
    </div>
</template>

<script>
export default {
  name: "DropdownComponent",
  props: {
    dropdownlist: {
      type: Array,
      required: true
    },
    placeholder:{
      type: String,
    },
    selectedValue:{
      type: String,
      required: false
    },
    icon:{
      type: String,
      required: false
    },
    onItemClick:{
      type: Function,
      required: true
    },
    rounded:{
      type: String,
      required: false,
      default: 'full'
    },
    noAnimation:{
      type: Boolean,
      required: false,
      default: false
    }
  },
  data() {
    return {
      selected: null
    };
  },
  methods: {
    onSelectItem(data) {
      this.selected = data.value;
      this.onItemClick(data);
    }
  },
  mounted() {
     if(!this.placeholder){
        this.selected = this.dropdownlist[0].value;
     }
  }
}
</script>
