import * as yup from "yup";

export const ContactSchema = yup.object().shape({
    Nama    : yup
                .string()
                .min(8)
                .max(59)
                .required(),
    Email   : yup
                .string()
                .email("masukan email dengan benar")
                .required(),
    Subject : yup
                .string()
                .required(),
    Massage : yup
                .string()
                .required(),

    Accept:  yup.bool().oneOf([true],"You must accept the terms and conditions."),
})