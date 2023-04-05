<template>
    <div class="center col-md-8 pr-0">
        <div class="paginate">
            <a 
            v-for="(link, i) of links" :key="i"
            :disabled="!link.url"
            href="#"
            @click="getForPage($event, link)"
            aria-current="page"
            :class="[
                link.active ? 'active' : '',
                i === 0 ? 'rounded-l-md' : '',
                i === links.length - 1 ? 'rounded-r-md' : '',
                !link.url ? ' bg-gray-100': '',
            ]"
            v-html="link.label"
            > </a>
        </div>
    </div>
</template>

<script>
    export default {
        props:['links'],
        methods: {
            getForPage(ev, link) {
                ev.preventDefault();
                if (!link.url || link.active) {
                return;
                }
                this.$emit('get-data', link.url)
            },
        },
    }
</script>

<style scoped>

.center {
  text-align: end;
}

.paginate {
  display: inline-block;
}

.paginate a {
  color: rgba(22, 27, 23, 0.418);
  float: left;
  padding: 10px 10px;
  text-decoration: none;
  /* transition: background-color .3s; */
  border: 1px solid #ddd;
}

.paginate a.active {
  background-color: rgb(31, 224, 64);
  color: rgb(17, 167, 50);
  border: 1px solid rgb(180, 180, 192);
}

.paginate a:hover:not(.active) {background-color: #ddd;}
</style>