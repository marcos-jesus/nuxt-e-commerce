<template>
  <div class="Login">
    <label class="lblLogin">Faça </label>
    <router-link to="/login" class="btnConta">Login</router-link><br />
    <label class="lblLogin">ou Crie seu </label>
    <router-link to="/registro" class="btnConta"> Cadastro</router-link>
  </div>
</template>

<style>
  a {
  cursor: pointer;
}

.btnConta {
  font-family: 'Red Hat Display', sans-serif;
  text-decoration: none;
  color: white;
  font-weight: bold;

}

.btnConta:hover {

  border-bottom: 2px white solid;
  font-weight: bold;
}

.iconeProfile {
  font-size: 20px;
}

.lblLogin {
  font-size: 15px;
  margin-left: 10px;
  color: white;
  font-family: 'Red Hat Display', sans-serif;

}
.username_icon {
  display: flex;
}

.username_icon:hover {
  color: #e1e1e6;
}

.username {
  display: flex;
  font-weight: bold;
  cursor: pointer;
  width: 100%;
}

.username p {
  display: flex;
  align-items: flex-end;
}



.icon-2x {
  font-size: 1.7rem;
  margin: 0.532rem;
}
</style>