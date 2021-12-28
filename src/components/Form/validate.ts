import * as yup from "yup";

export const schema = yup.object().shape({
    pais: yup.string().required('Campo Obrigatorio'),
    local: yup.string().required('Campo Obrigatorio'),
    meta: yup.string().required('Campo Obrigatorio').max(7, 'Max 7 caracteres').min(7, 'Minimo 7 caracteres')
}); 