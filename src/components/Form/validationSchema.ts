import * as Yup from "yup";

export const validationSchema = Yup.object({
  name: Yup.string()
    .min(3, "Name must be at least 3 characters")
    .max(15, "Name must have a maximum of 15 characters")
    .required("Required"),
  email: Yup.string().email("Formato no valido").required("Required"),
  subject: Yup.string()
    .max(15, "Subject must have a maximum of 15 characters")
    .required("Required"),
  message: Yup.string()
    .min(5, "Message must be at least 5 characters")
    .required("Required"),
});
