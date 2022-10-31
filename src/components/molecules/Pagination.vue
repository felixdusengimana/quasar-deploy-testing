<template>
  <ul v-if="totalPage > 1 && totalPage <= 8" class="tw-flex tw-flex-shrink tw-items-center">
      <li v-if="withNextPrev" :class="disablePrev" class="tw-cursor-pointer">
        <q-btn @click="!disablePrev ? btnPrev() : ''" flat square dense icon="chevron_left" color="black" />
      </li>
      <li v-for="n in totalPage"  :class="n == selected ? 'tw-bg-[#2020FF] tw-text-white tw-p-2 ': 'tw-mx-2'" :key="n">
          <a @click="emitBtnClick(n)">{{ n }}</a>
      </li>
      <li v-if="withNextPrev" :class="disableNext">
        <q-btn @click="!disableNext ? btnNext() : ''" flat square dense icon="chevron_right" color="black" />
      </li>
  </ul>

  <ul v-else-if="totalPage >= 8" class="tw-flex tw-flex-shrink tw-items-center">
      <li v-if="withNextPrev" :class="disablePrev">
        <q-btn @click="!disablePrev ? btnPrev() : ''" flat square dense icon="chevron_left" color="black" />
      </li>
      <li v-for="n in pages" :class="n.content == selected ? 'tw-bg-[#2020FF] tw-text-white tw-p-2': ' ' + n.disable" :key="n">
        <div v-if="n.show" :class="n.show?'tw-mx-2':''">
          <button v-if="n.disable != 'disabled'" @click="emitBtnClick(n.content)" :disabled="n.content == selected">{{ n.content }}</button>
          <button v-else>{{ n.content }}</button>
        </div>
      </li>
      <li v-if="withNextPrev" :class="disableNext">
          <q-btn @click="!disableNext ? btnNext() : ''" flat square dense icon="chevron_right" color="black" />
      </li>
  </ul>
</template>

<script>
  export default {
      name : 'paginationComponent',
      props : {
          totalPage : {
              type : Number,
              required: true
          },
          currentPage : {
              type : Number,
              default: 1,
          },
          myData : {
              default : null,
          },
          pageRange: {
              type: Number,
              default: 3
          },
          withNextPrev : {
              type : Boolean,
              default : true
          },
          nextText : {
              type : String,
              default : 'Next'
          },
          prevText : {
              type : String,
              default : 'Prev'
          },
      },
      data() {
          return {
              selected: this.currentPage,
              disableNext : '',
              disablePrev : '',
          }
      },
      mounted()
      {
          this.disablePrevNext();
      },
      computed: {
          pages : function()
          {
              let items = [];


              for (let i = 0; i < this.totalPage; i++) {
                  let page = {
                     content: i + 1,
                     disable : '',
                     show : false
                  }

                  items[i] = page;
              }

              let page1 = {
                  content: "...",
                  disable : 'disabled',
                  show : false
              }

              let page2 = {
                  content: "...",
                  disable : 'disabled',
                  show : false
              }

              items.splice(1, 0, page1);
              items.splice(items.length-1, 0, page2);

              for (let i = 0; i < items.length; i++) {
                  if(i == 0 || i == items.length-1)
                      items[i].show = true;

                  if(this.selected <= this.pageRange)
                  {
                      if(this.selected == this.pageRange)
                      {
                          if(i >= 2 && i <= this.pageRange+1)
                              items[i].show = true;
                      }
                      else {
                          if(i >= 2 && i <= this.pageRange)
                              items[i].show = true;
                      }

                      items[items.length-2].show = true;
                  }
                  else if (this.selected > this.pageRange) {
                      if(i >= this.selected-1 && (this.selected + 2) < items.length-2 && i <= this.selected+1)
                      {
                          items[1].show = true;
                          items[items.length-2].show = true;
                          items[i].show = true;
                      }
                      else if (i >= items.length - 2 - this.pageRange &&(this.selected + 2) >= items.length-2)
                      {
                          items[1].show = true;
                          items[items.length-2].show = false;
                          items[i].show = true;
                      }
                  }

              }

              return items;
          },
      },
      methods : {
          emitBtnClick : function(n)
          {
              this.selected = n;
              this.$emit('btnClick', n, this.myData);

              this.disablePrevNext();
          },

          btnNext : function()
          {
              this.selected++;
              this.$emit('btnClick', this.selected, this.myData);

              this.disablePrevNext();
          },

          btnPrev : function()
          {
              this.selected--;
              this.$emit('btnClick', this.selected, this.myData);

              this.disablePrevNext();
          },

          disablePrevNext : function()
          {
              this.disablePrev = this.selected == 1 ? 'disabled' : '';
              this.disableNext = this.selected == this.totalPage ? 'disabled' : '';
          }
      }
  }
</script>
