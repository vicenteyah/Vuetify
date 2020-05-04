<template>
    <v-card width="700" class="mx-auto mt-5">
        <v-card-title><strong>Perfil: {{ currentUser.username }}</strong></v-card-title>
        <v-card-text><strong>autorización:</strong>
            {{currentUser.accessToken.substring(0, 20)}} ... {{currentUser.accessToken.substr(currentUser.accessToken.length - 20)}}
        </v-card-text>
        <v-card-text>
            <strong>Id:</strong>
            {{currentUser.id}}
        </v-card-text>
        <v-card-text>
            <strong>Email:</strong>
            {{currentUser.email}}
        </v-card-text>
        <v-card-text v-for="(role,index) in currentUser.roles" :key="index">
            <strong>Role:</strong>{{ role }}
        </v-card-text>
    </v-card>
</template>
<script>
export default {
  name: 'Profile',
  computed: {
    currentUser() {
      return this.$store.state.auth.user;
    }
  },
  mounted() {
    if (!this.currentUser) {
      this.$router.push('/login');
    }
  }
}
</script>