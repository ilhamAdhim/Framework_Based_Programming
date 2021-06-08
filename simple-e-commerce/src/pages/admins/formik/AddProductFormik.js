import { useFormik } from "formik";
import * as Yup from "yup";
import { addDataFirebase } from "../../../firebase/services";

export const AddProductFormik = (role = "add", setDisplayAlert, setIsError, id = 0) => {
    return useFormik({
        initialValues: {
            id: 0,
            name: '',
            amount: 0,
            description: '',
            image: '',
            price: 0,
            promo: ''
        },

        //TODO : Yup validations
        validationSchema: () =>
            Yup.object({
                name: Yup.string().required("Required"),
                description: Yup.string().required("Required"),
                price: Yup.number().required("Required"),
                promo: Yup.string().required("Required")
            }),

        onSubmit: values => {
            let normalizedValues = {
                amount: parseInt(values.amount, 10),
                price: parseInt(values.price, 10),
                ...values
            }

            console.log(normalizedValues)
            role === "add" ?
                // console.log(JSON.stringify(values, null, 2))
                addDataFirebase(`products/${values.id}`, normalizedValues)
                    .then(() => window.location.reload(false))
                :
                console.log("idnya : ", id)

        },
    })
}