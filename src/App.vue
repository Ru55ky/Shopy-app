<template>
  <v-app app>
    <v-card
            color="grey lighten-4"
            flat
            height="100px"
            tile
            class="font-weight-light"
    >
      <v-navigation-drawer v-model="drawer" app temporary>

        <v-list-item link
                v-for="item in items"
                :key="item.title"
                :to="item.url"
        >
          <v-icon left>{{item.icon}}</v-icon>
          {{item.title}}

        </v-list-item>

        <v-list dense>

          <v-list-item>
            <v-list-item-icon>
              <v-icon></v-icon>
            </v-list-item-icon>

            <v-list-item-content>
              <v-list-item-title></v-list-item-title>

            </v-list-item-content>
          </v-list-item>
        </v-list>
      </v-navigation-drawer>

      <v-toolbar extended dark color="primary">

        <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
        <v-toolbar-title>
          <router-link to="/components/Home" tag="span" class="pointer">Shopy-app</router-link>
        </v-toolbar-title>

        <v-spacer></v-spacer>


          <v-toolbar-items class="d-none d-sm-flex"
                           dark color="primary"
                           v-for="item in items"
                           :key="item.title"
                           link
                           :to="item.url"
          >
            <v-btn dark depressed color="primary" :to="item.url" class="font-weight-light">
              <v-icon left>{{item.icon}}</v-icon>
              {{item.title}}
            </v-btn>
          </v-toolbar-items>

      </v-toolbar>

      <v-content>
        <v-container fluid class="fill-height">
          <router-view></router-view>
        </v-container>
      </v-content>

    </v-card>


  </v-app>
</template>

<script>


  export default {
    data()  {
      return{
        drawer: false,
        items: [
          {title: 'Login', icon: 'mdi-login', url: '/components/Login'},
          {title: 'Home', icon: 'mdi-home', url: '/components/Home'},
          {title: 'Registration', icon: 'mdi-account-plus', url: '/components/Reg'}
        ]
      }
    }
  }
</script>

<style scoped>
  .pointer{
    cursor: pointer;
  }
</style>