import * as yup from "yup";

const validationSchema = yup.object().shape({
  name: yup.string().required("Por favor, insira seu nome."),
  lastName: yup.string().required("Por favor, insira seu sobrenome."),
  email: yup.string().email("Por favor, insira um email válido.").required("Campo obrigatório."),
  password: yup.string().min(6, "A senha deve ter pelo menos 6 caracteres.").required("Campo obrigatório."),
});

export default validationSchema;