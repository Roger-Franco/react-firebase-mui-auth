create-react-app react-firebase-auth-crud

npm config set legacy-peer-deps true => foi necessário para corrigir

npm install firebase @material-ui/core @material-ui/icons react-material-ui-form-validator react-spinners react-toastify

no firebase cria um novo app e escolha o app para web. depois cola a configuração em helpers/db.js


npm install @mui/material @emotion/react @emotion/styled => resolver questão de compilação;
Alterei o db.js => importação do firebase para se adequar;