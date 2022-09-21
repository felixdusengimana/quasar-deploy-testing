<template>
    <div class="tw-relative tw-font-manrope" :onmouseleave="closeDropDown">
        <div class="lg:tw-w-[472px] tw-border tw-z-10 tw-border-black tw-mb-6 tw-text-sm tw-outline-none
    tw-flex tw-items-center">
      <input type="text" :onclick="opeClose" v-model="searchText" name="search_input" @change="handleSearch" :placeholder="placeholder" class="tw-w-11/12 tw-py-6 tw-p-4 tw-outline-none">
      <img v-if="open" :onclick="opeClose" src="../../assets/icons/caret-up.svg" alt="" class="tw-flex-grow"/>
      <img v-else :onclick="opeClose" src="../../assets/icons/caret-down.svg" alt="" class="tw-flex-grow"/>
    </div>
    <div v-if="open" class="tw-max-h-[276px] tw-z-20 tw-overflow-auto tw-h-fit tw-w-full tw-absolute tw-top-[70px] tw-bg-white tw-border tw-border-[#9F9F9F] tw-shadow-form">
        <div v-if="searchResult.length>0">
            <div v-for="option in searchResult" :key="option" class="tw-p-4 tw-cursor-pointer tw-text-sm text-black hover:tw-bg-[#e1e1e1]"
            @click="select(option)">
                {{ option }}
            </div>
        </div>
        <div v-else class="tw-p-4 tw-cursor-pointer tw-text-sm text-black hover:tw-bg-[#e1e1e1]">
            No result found
        </div>
    </div>
    </div>
</template>

<script>
export default {
    name: "SelectInput",
    data(){
        return{
            searchText: '',
            searchResult: [],
            selected: '',
            open: false
        }
    },
    props: {
        name: {
            type: String,
            required: true
        },
        placeholder: {
            type: String,
            required: true
        },
        options: {
            type: Array,
            required: true
        },
        getVal: {
            type: Function,
            required: true
        }
    },
    
    methods: {
        search(){
            this.searchResult = this.options.filter(option => option.toLowerCase().includes(this.searchText.toLowerCase()))
            
        },
        select(option){
            this.selected = option
            this.searchText = option
            this.open = false
            this.getVal({name: this.name, value: this.selected})
        },
        opeClose(){
            this.open = !this.open
        },
        handleSearch(e){
            this.searchText = e.target.value
            this.selected = this.searchText
            this.search()
        },
        closeDropDown(){
            this.open = false
        }
    },
    watch: {
        searchText: function(newValue){
           this.search()
        }
    },
    mounted(){
        this.searchResult = this.options
    },
    setup(props) {
        props.name;
        props.placeholder;
        props.options;
        props.getVal;
    }
}
</script>