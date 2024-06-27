import { email as emailValidator, email, maxLength, minLength, numeric, required, url } from '@vuelidate/validators'

export const loginSchema = {
  email: { required, email },
  password: { required }
}

export const registerSchema = (state) => ({
  fullName: { required, minLength: minLength(3) }, // Ян, соболезную
  email: { required, email },
  password: { required, minLength: minLength(5) },
  confirmPassword: { required, sameAsPassword: value => value === state.password } // из-за кривого sameAs приходится вот так извращаться
})

export const checkoutSchema = {
  firstName: { required, minLength: minLength(3) },
  lastName: { required },
  email: { required, email: emailValidator, minLength: minLength(5) },
  country: { required, minLength: minLength(3) },
  city: { required, minLength: minLength(3) },
  postalCode: { required, numeric, minLength: minLength(6), maxLength: maxLength(6) },
  addressLine1: { required, minLength: minLength(3) },
  houseNumber: { required },
  apartmentNumber: { required }
}

export const productSchema = {
  title: { required, minLength: minLength(5) },
  price: { required, numeric, price: value => value > 10 },
  category: { required, minLength: minLength(3), maxLength: maxLength(20) },
  description: { required, minLength: minLength(10) },
  image: { required, url, minLength: minLength(5) }
}