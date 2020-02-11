<template>
  <v-app app>
    <v-card
            color="grey lighten-4"
            flat
            height="100px"
            tile
    >
      <v-navigation-drawer v-model="drawer" app temporary>

        <v-list-item>
          <v-list-item-avatar>
            <v-img src="https://randomuser.me/api/portraits/men/78.jpg"></v-img>
          </v-list-item-avatar>

          <v-list-item-content>
            <v-list-item-title>John Leider</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-divider></v-divider>

        <v-list dense>

          <v-list-item
                  v-for="item in items"
                  :key="item.title"
                  link

          >
            <v-list-item-icon>
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-item-icon>

            <v-list-item-content>
              <v-list-item-title>{{item.title}}</v-list-item-title>

            </v-list-item-content>
          </v-list-item>
        </v-list>
      </v-navigation-drawer>
      <v-toolbar extended dark color="primary">

        <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>

        <v-toolbar-title>Title</v-toolbar-title>

        <v-spacer></v-spacer>

        <v-btn depressed dark color="primary">
          <v-icon left>mdi-login</v-icon>

          Login
        </v-btn>

        <v-btn depressed dark color="primary">
          <v-icon>mdi-home</v-icon>
          Главная
        </v-btn>

      </v-toolbar>

    </v-card>


  </v-app>
</template>

<script>


  export default {
    data()  {
      return{
        drawer: false,
        items: [
          {title: 'Login', icon: 'mdi-login', url: '/Login'}
        ]
      }
    }
  }
</script>
