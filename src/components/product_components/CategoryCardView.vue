<template>
  <v-col>
    <v-app-bar>
      <v-toolbar-title>Category</v-toolbar-title>
    </v-app-bar>
    <v-row
      align="center"
      justify="space-around"
    >
      <template>
        <v-card
          v-for="(item,i) in items"
          :key="i"
          class="mx-auto my-12"
          max-width="300"
          @click="updateClickedCategory(item.title,item.to)"
        >
          <v-img
            src=""
            height="100px"
          />

          <v-card-title>
            {{ item.title }}
          </v-card-title>

          <v-card-subtitle>
            {{ item.subtitle }}
          </v-card-subtitle>
        </v-card>
      </template>
    </v-row>
  </v-col>
</template>

<script>
  export default {
    data: () => ({
      //show: false,
      items: [
        {
          src:"",
          title: "Fruits",
          subtitle:"Fruits contain important vitamins, minerals and plant chemicals. They also contain fibre.",
          btn: "See More",
          to: "/productcardview",
        },
        {
          src:"",
          title: "Vegtables",
          subtitle:" Vegetables contain important vitamins, minerals and plant chemicals. They also contain fibre.",
          btn: "See More",
          to: "/productcardview",
        },
        {
          title: "Dairy",
          subtitle:"Dairy products are a type of food produced from the milk of mammals. They are primarily produced from mammals.",
          btn: "See More",
          to: "/"
        },
        {
          title: "Cereals",
          subtitle:"Dairy products or milk products are a type of food produced from or containing the milk of mammals. They are primarily produced from mammals such as cattle.",
          btn: "See More",
          to: "/"
        },
        {
          title: "Meat",
          subtitle:"Dairy products or milk products are a type of food produced from or containing the milk of mammals. They are primarily produced from mammals such as cattle.",
          btn: "See More",
          to: "/"
        }
      ]
    }),
    methods:{
      updateClickedCategory(categroy,to){
        this.$store.state.selectedCategory= categroy
        this.$router.push({ path: to })
        console.log('selectedCategory: ',categroy)
      }
    }
  }
</script>