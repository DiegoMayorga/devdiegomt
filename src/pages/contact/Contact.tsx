import Input from "../../components/atoms/input/Input";
import classes from "./Contact.module.scss";
import { motion } from "framer-motion";
import { useForm, ValidationError } from "@formspree/react";

export default function ContactPage() {
  const [state, handleSubmit] = useForm(`${import.meta.env.VITE_FORM}`);

  if (state.succeeded) {
    return <p>¡Gracias por enviar tu mensaje!</p>;
  }

  return (
    <section className={classes.contact}>
      <h1>Contact</h1>
      <form className={classes.form} autoComplete="off" onSubmit={handleSubmit}>
        <Input type="text" name="contactName" label="Name" required />
        <ValidationError
          prefix="Name"
          field="contactName"
          errors={state.errors}
        />
        <Input type="email" name="contactEmail" label="Email" required />
        <ValidationError
          prefix="Email"
          field="contactEmail"
          errors={state.errors}
        />
        <Input name="message" label="Message" textarea required />
        <ValidationError
          prefix="Message"
          field="message"
          errors={state.errors}
        />
        <div className={classes["form-actions"]}>
          <motion.button
            whileHover={{ scale: [1, 1.1, 1], transition: { duration: 0.3 } }}
            type="submit"
            disabled={state.submitting}
          >
            Submit
          </motion.button>
        </div>
      </form>
    </section>
  );
}
